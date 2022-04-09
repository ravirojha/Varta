const User = require('../../models/user');
const FriendInvitation = require('../../models/friendInvitation')
const friendsUpdates = require('../../socketHandlers/updates/friends');

const postInvite = async (req, res) => {
    const { targetMailAddress } = req.body;

    const { userId, mail } = req.user;

    if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
        return res.status(409).send('User cannot send request to themself');
    }

    const targetUser = await User.findOne({
        mail: targetMailAddress.toLowerCase()
    })

    if (!targetUser) {
        return res.status(404).send(`User ${targetMailAddress} not found`);
    }

    const invitationAlreadyReceived = await FriendInvitation.findOne({
        receiverId: targetUser._id,
        senderId: userId
    });

    if (invitationAlreadyReceived) {
        return res.status(409).send('You have already sent an invitation to this user');
    }

    const userAlreadyFriend = targetUser.friends.find(friendId => friendId.toString() === userId.toString())

    if (userAlreadyFriend) {
        return res.status(409).send('Friend Already added');
    }

    const newInvitation = await FriendInvitation.create({
        senderId: userId,
        receiverId: targetUser._id
    });



    // send pending invitations update to specific user
    friendsUpdates.updateFriendsPendingInvitations(targetUser._id.toString());


    return res.status(201).send('Invitation has been sent');
}

module.exports = postInvite;