import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
// import signup soon...

import './App.css';
// require('dotenv').config();

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    
   return (
    <>
    <div>
        <h1>The Orient Chat App</h1> 
    </div>
       <ChatEngine 
           height='100vh'
           projectID= {process.env.REACT_APP_PROJECTID}
           userName="user1"
           userSecret="123123"
           renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
       />
    </>
   );
}

export default App;