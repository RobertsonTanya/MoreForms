import React, { useState } from "react";
import "../styles/form.css";

const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const firstNameCheck = (value) => {
        setFirstName(value);
        if(value.length < 1){
            setFirstNameError(`First name is required.`);
        } else if (value.length < 3){
            setFirstNameError (`First name must be longer than 2 characters`);
        } else {
            setFirstNameError('');
        }
    }
    const lastNameCheck = (value) => {
        setLastName(value);
        if(value.length < 1){
            setLastNameError(`Last name is required.`);
        } else if (value.length < 3){
            setLastNameError (`Last name must be longer than 2 characters`);
        } else {
            setLastNameError('');
        }
    }
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const emailCheck = (value) => {
        setEmail(value);
        if(value.length < 2){
            setEmailError(`Email is required.`);
        } else if(!emailRegex.test(value)){
            setEmailError(`A valid email is required.`);
        } else {
            setEmailError('');
        }
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const passwordCheck = (value) => {
        setPassword(value);
        if(value.length < 2){
            setPasswordError(`Password is required.`);
        } else if(!passwordRegex.test(value)){
            setPasswordError(`A valid password is required. Min 8 characters, 1 number and 1 letter.`);
        } else {
            setPasswordError('');
        }
    }
    const confirmPasswordCheck = (value) => {
        setConfirmPassword(value);
        if(value.length < 2){
            setConfirmPasswordError(`Confirm password is required.`);
        } else if(value !== password){
            setConfirmPasswordError(`Password must match.`);
        } else {
            setConfirmPasswordError('');
        }
    }
    const confirmForm = (e) => {
        e.preventDefault();
        firstNameCheck(firstName);
        lastNameCheck(lastName);
        emailCheck(email);
        passwordCheck(password);
        confirmPasswordCheck(confirmPassword);

        if(!firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError){
            alert('All is good!');
            document.getElementById('main-form').reset();
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    }


    return (
        <div className="user-form">
            <form id="main-form" onSubmit={(e) => confirmForm(e)}>
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" type="text" onChange={(e) => firstNameCheck(e.target.value)} />
                {firstNameError ? <p className="error">{firstNameError}</p> : ''}
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" type="text" onChange={(e) => lastNameCheck(e.target.value)} />
                {lastNameError ? <p className="error">{lastNameError}</p> : ''}
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={(e) => emailCheck(e.target.value)} />
                {emailError ? <p className="error">{emailError}</p> : ''}
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={(e) => passwordCheck(e.target.value)} />
                {passwordError ? <p className="error">{passwordError}</p> : ''}
                <label htmlFor="confirm-password">Confirm Password</label>
                <input id="confirm-password" type="password" onChange={(e) => confirmPasswordCheck(e.target.value)} />
                {confirmPasswordError ? <p className="error">{confirmPasswordError}</p> : ''}

                <button type="submit">Go!</button>
            </form>

            <div id="results">
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </div>
    )
}
export default Form;