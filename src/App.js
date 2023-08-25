import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
// import signup soon...

import './App.css';
// require('dotenv').config();

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

   return (

       <ChatEngine 
           height='100vh'
           projectID= {process.env.REACT_APP_PROJECTID}
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
       />

   );
}

export default App;