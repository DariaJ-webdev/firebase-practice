import React, { useState } from 'react';

function RegisterForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email, password);
    };

    return (
        <form id="registerForm" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <label htmlFor="email">Email:</label>
            <input 
                type="email" 
                id="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className=" submit submit__register">Register</button>
        </form>
    );
}

export default RegisterForm;