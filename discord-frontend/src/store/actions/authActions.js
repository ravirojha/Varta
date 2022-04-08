import * as api from '../../api'

const authActions = {
    SET_USER_DETAILS: 'AUTH_SET_USER_DETAILS'
};

export const getActions = (dispatch) => {
    return {
        login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
        register: (userDetails, navigate) =>
            dispatch(register(userDetails, history)),
    }
}

const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
    };
};


const login = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.login(userDetails);

        if(response.error) {
            // show error message in alert

        } else {
            const { userDetails } response.data;
            localStorage.setItem('user', JSON.stringify('userDetails'));

            dispatch(setUserDetails(userDetails));
            navigate(/dashboard);
        }
    }
}