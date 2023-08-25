import { useState } from "react"
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // const authObject = { 'Project-ID': process.env.REACT_APP_PROJECTID, 'User-Name': username, 'User-Secret': password }
        const authObject = { 'Project-ID': "2a1ffe93-ba15-414c-9620-3b325e71f612", 'User-Name': username, 'User-Secret': password }
        
        try {
            // username / password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            // error -> try with new username...
            setError('Oops, incorrect username or Password')
            // setError(alert('Oops, incorrect username or Password'))
        }
        // 
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">ORIENT CHAT </h1>
                <form onSubmit={handleSubmit}>
                    <input 
                    className="input"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required/>
                    <input 
                    className="input"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required/>
                    <div align='center'>
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h2 className="signup">Don't have an Account? <span>Sign up</span></h2>
                <h2 className="error">{error}</h2>
            </div>
        </div>
    );
}

export default LoginForm;