import {openAlertMessage} from './alertActions';
import * as api from '../../api';

export const friendsActions = {
    SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
    SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
    SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE-USERS',
}

export const getActions = (dispatch) => {
    return {
        sendFriendInvitation: (data, closeDialogHandler) => dispatch(sendFriendInvitation(data, closeDialogHandler)),
    }
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
    return {
        type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
        pendingFriendsInvitations,
    }
}

const sendFriendInvitation = (data, closeDialogHandler) => {
    return async (disaptch) => {
        const response = await api.sendFriendInvitation(data);

        if (response.error) {
            disaptch(openAlertMessage(response.exception?.response?.data));
        } else {
            disaptch(openAlertMessage('Invitation has been sent'));
            closeDialogHandler();
        }
    }
}