import React, { useState } from 'react';

function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(email, password);
    };

    return (
        <form id="loginForm" onSubmit={handleSubmit}>
            <h2>Login</h2>
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
            <button type="submit" className=" submit submit__login">Login</button>
            <p><a href="" className="forgot">Forgot Password?</a></p>
        </form>
    );
}

export default LoginForm;

