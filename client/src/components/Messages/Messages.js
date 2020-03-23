import React from 'react';
import ScrolltoBottom from 'react-scroll-to-bottom';
import './Messages.css';
import Message from '../Message/Message';

const Messages=({messages,name})=>(
<ScrolltoBottom className="messages">
    {messages.map((message,i)=><div key={i}><Message message={message} name={name} /></div>)}
</ScrolltoBottom>
)

export default Messages;