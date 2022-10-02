import Logo from 'components/logo/Logo';
import Description from 'components/starterPageDescription/Description';
import React from 'react';
import { Link } from 'react-router-dom';
import LogInForm from './components/logInForm/LogInForm';

export default function Login() {
    return (
        <div className='wrapper'>
            <div className='app formContainer'>
                <Logo />
                <Description content={'Login'}/>
                <LogInForm />
                <p>You don`t have an account?
                    <Link to="/register"> Register</Link>
                </p>
            </div>
        </div>
    )
};
