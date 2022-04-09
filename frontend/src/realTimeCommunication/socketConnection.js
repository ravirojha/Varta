import io from 'socket.io-client';
import {setPendingFriendsInvitations} from '../store/actions/friendsActions';

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;
    socket = io(`http://localhost:5002`, {
        auth: {
            token: jwtToken,
        }
    });


    socket.on(`connect`, () => {
        console.log('Successfully connected with socket.io server');
        console.log(socket.id);
    });
    socket.on('friends-invitations', (data) => {
        const { pendingInvitations } = data;
        store.dispatch(setPendingFriendsInvitations());
    });
};