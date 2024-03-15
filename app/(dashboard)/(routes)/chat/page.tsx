'use client';



import axios from 'axios';
import React, { useState } from 'react'

const Chat = () => {
    const [result, setResult] = useState('');
async function generate() {
    const response = await axios.post('api/chat');
    setResult(response.data);
}
  return (
    <div>
        <button onClick={generate}>generate</button>
      {result}
    </div>
  )
}

export default Chat
