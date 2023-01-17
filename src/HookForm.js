import React, { useState } from 'react';

const HookForm = props => {

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [firstNameErrors, setFirstNameErrors] = useState(null)
    const [emailErrors, setEmailErrors] = useState(null)
    const [lastNameErrors, setLastNameErrors] = useState(null)
    const [passwordErrors, setPasswordErrors] = useState(null)
    const [confirmPasswordErrors, setConfirmPasswordErrors] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault()
        setHasBeenSubmitted(true)
    }

    const firstNameHandler = (e) => {
        setFirstName(e.target.value)
        if(e.target.value.length < 3) {
            setFirstNameErrors("First name field must be atleast 3 characters")
        } else {
            setFirstNameErrors(null)
        }
}

    const lastNameHandler = (e) => {
        setLastName(e.target.value)
        if(e.target.value.length < 3) {
            setLastNameErrors("Last name field must be atleast 3 characters")
        } else {
            setLastNameErrors(null)
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value)
        if(e.target.value.length < 3) {
            setEmailErrors("Email field must be atleast 3 characters")
        } else {
            setEmailErrors(null)
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 8) {
            setPasswordErrors("Password field must be atleast 8 characters")
        } else {
            setPasswordErrors(null)
        }
    }

    const confirmPasswordHandler = (e) => {
        setConfirmPassword(e.target.value)
        if(password != e.target.value) {
            setConfirmPasswordErrors("Passwords do not match")
        } else {
            setConfirmPassword(e.target.value)
            setConfirmPasswordErrors(null)
        }
    }


    return (
        <div className='card hook-form'>
            <h2 className='card-header'> Hook Form </h2>
            <div className='card-body'>
                <form onSubmit={submitHandler}>
                    <div className='mb-3'>
                        <label htmlFor='firstName' className='form-label'>First Name:</label>
                        <input 
                        type="text" 
                        className='form-control' 
                        name='firstName'
                        onChange={firstNameHandler}
                        value={firstName}
                        />
                        {
                            firstNameErrors && 
                            <span>
                                {firstNameErrors}
                            </span>
                        }
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='lastName' className='form-label'>Last Name:</label>
                        <input 
                        type="text" 
                        className='form-control' 
                        name='lastName'
                        onChange={lastNameHandler}
                        value={lastName}
                        />
                        {
                            lastNameErrors && 
                            <span>
                                {lastNameErrors}
                            </span>
                        }
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>Email:</label>
                        <input 
                        type="text" 
                        className='form-control' 
                        name='email'
                        onChange={emailHandler}
                        value={email}
                        />
                        {
                            emailErrors && 
                            <span>
                                {emailErrors}
                            </span>
                        }
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password:</label>
                        <input 
                        type="text" 
                        className='form-control' 
                        name='password'
                        onChange={passwordHandler}
                        value={password}
                        />
                        {
                            passwordErrors && 
                            <span>
                                {passwordErrors}
                            </span>
                        }
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='confirm-password' className='form-label'>Confirm Password:</label>
                        <input 
                        type="text" 
                        className='form-control' 
                        name='confirm-password'
                        onChange={confirmPasswordHandler}
                        value={confirmPassword}
                        />
                        {
                            confirmPasswordErrors && 
                            <span>
                                {confirmPasswordErrors}
                            </span>
                        }
                    </div>
                </form>
                <div>
                    <h2 className='card-header'>Your form Data</h2>
                    <div className='card'>
                        <h5> First Name: {firstName}</h5>
                        <h5> Last Name: {lastName}</h5>
                        <h5> Email: {email}</h5>
                        <h5>Password: {password}</h5>
                        <h5> Confirm Password: {confirmPassword}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HookForm