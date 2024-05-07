import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import usersData from './Auth';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });
    const [submitted, setSubmitted] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);

    const validateForm = () => {
        let valid = true;
        const newErrors = { username: '', password: '' };

        if (!username.trim()) {
            newErrors.username = 'Please enter username';
            valid = false;
        }

        if (!password.trim()) {
            newErrors.password = 'Please enter password';
            valid = false;
        }

        setErrors(newErrors);

        return valid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const matchedUser = usersData.find(user => user.email === username && user.password === password);
            if (matchedUser) {
                setAuthenticated(true);
                setSubmitted(true);
                setTimeout(() => {
                    setSubmitted(false);
                    setUsername('');
                    setPassword('');
                    setAuthenticated(false);
                }, 2000);
            } else {
                setSubmitted(false);
                setErrors({ username: 'Invalid email or password', password: 'Invalid email or password' });
            }
        }
    };
    return (
        <div className="Login-page">
            <header className="header">
                <h1>LogIn</h1>
                <p>Welcome back! Log in to continue.</p>
            </header>
            <section className="content">
                <Card className="card" title="Log In">
                    <form onSubmit={handleSubmit}>
                        <div className="p-field">
                            <span className="p-float-label">
                                <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <label htmlFor="username">Email</label>
                                {errors.username && <small className="p-error">{errors.username}</small>}
                            </span>
                        </div>
                        <div className="p-field">
                            <span className="p-float-label">
                                <InputText id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label htmlFor="password">Password</label>
                                {errors.password && <small className="p-error">{errors.password}</small>}
                            </span>
                        </div>
                        <Button label="Log In" className="p-button-raised p-button-primary" />
                        {submitted && authenticated && <div className="success-message">Successfully submitted</div>}
                        {submitted && !authenticated && <div className="error-message">Authentication failed</div>}
                    </form>
                </Card>
            </section>
        </div>
    );
};

export default Login;
