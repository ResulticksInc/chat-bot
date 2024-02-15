import logo from './logo.svg';
import './App.css';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from './config.js';
import MessageParser from './ActionProvider';
import ActionProvider from './MessageParser';
import { useEffect } from 'react';

function App() {
  
  useEffect(() => {
    alert(localStorage.getItem('isAuth'))
  })
  return (
    <div>
      <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
