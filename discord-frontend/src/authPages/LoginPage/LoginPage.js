import React from 'react';
import AuthBox from "../../shared/components/AuthBox";
import LoginPageHeader from "./LoginPageHeader";


function LoginPage(props) {
    return (
        <AuthBox>
            <LoginPageHeader />
        </AuthBox>
    );
}

export default LoginPage;