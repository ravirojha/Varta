import * as api from '../../api'

export const authActions = {
    SET_USER_DETAILS: 'AUTH_SET_USER_DETAILS'
};

export const getActions = (dispatch) => {
    return {
        login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
        register: (userDetails, navigate) =>
            dispatch(register(userDetails, navigate)),
    }
}

const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
    };
};


export const login = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.login(userDetails);

        if(response.error) {
            // show error message in alert

        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails));
            navigate('/dashboard');
        }
    }
}

export const register = (userDetails, navigate) => {
    return async (dispatch) => {
        const response = await api.register(userDetails);

        if(response.error) {
            // show error message in alert

        } else {
            const { userDetails } = response?.data;
            localStorage.setItem('user', JSON.stringify(userDetails));

            dispatch(setUserDetails(userDetails));
            navigate('/dashboard');
        }
    }
}