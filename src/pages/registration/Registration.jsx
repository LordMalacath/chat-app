import React from 'react';
import { Link } from 'react-router-dom';

import Description from 'components/starterPageDescription/Description';
import RegistrationForm from 'pages/registration/components/registrationForm/RegistrationForm';
import Logo from 'components/logo/Logo';

export default function Register() {
    return (
        <div className='wrapper'>
            <div className='app formContainer'>
                <Logo />
                <Description content={'Registration'}/>
                <RegistrationForm />
                <p>Do you have an account?
                    <Link to="/login"> Login</Link>
                </p>
            </div>
        </div>
    );
}

