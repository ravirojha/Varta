import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthBox from "../../shared/components/AuthBox";
import LoginPageFooter from "./LoginPageFooter";
import LoginPageHeader from "./LoginPageHeader";
import LoginPageInputs from "./LoginPageInputs";
import { validateLoginForm } from "../../shared/utils/validators";
import { connect } from "react-redux";
import { getActions } from "../../store/actions/authActions";

const LoginPage = ({ login }) => {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setIsFormValid(validateLoginForm({ mail, password }));
    }, [mail, password, setIsFormValid]);

    const handleLogin = () => {
        const userDetails = {
            mail,
            password,
        };

        login(userDetails,navigate);
    };

    return (
        <AuthBox>
            <LoginPageHeader />
            <LoginPageInputs
                mail={mail}
                setMail={setMail}
                password={password}
                setPassword={setPassword}
            />
            <LoginPageFooter isFormValid={isFormValid} handleLogin={handleLogin} />
        </AuthBox>
    );
};

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};

export default connect(null, mapActionsToProps)(LoginPage);