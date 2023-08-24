import { useState } from "react"
import axios from 'axios';
const SignupForm = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // 
        const authObject = { 'Project-ID': process.env.REACT_APP_PROJECTID, 'User-Name': username, 'User-Secret': password }
        
        try {
            // username / password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            // error -> try with new username...
            setError('Please fill in the correct information')
            // setError(alert('Oops, incorrect username or Password'))
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">ORIENT CHAT </h1>
                <form onSubmit={handleSubmit}>
                    <input className="input" type="text" name="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Firstname" required/>
                    <input className="input" type="text" name="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Lastname" required/>
                    <input className="input" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required/>
                    <input className="input" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required/>
                    <input  className="input" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required/>
                    <div align='center'>
                        <button type="submit" className="button">
                            <span>Sign Up</span>
                        </button>
                    </div>
                </form>
                <h2 className="signup">Alright have an Account? <span>Sign in</span></h2>
                <h2 className="error">{error}</h2>
            </div>
        </div>
    );
}

export default SignupForm;