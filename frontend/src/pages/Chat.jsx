import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import jwtDecode from 'jwt-decode';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
let socket;

export default function Chat({ authed }) {
  const { workshopId } = useParams();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const userId = authed ? jwtDecode(localStorage.getItem('token')).id : null;
  const endRef = useRef(null);

  useEffect(() => {
    socket = io(API_URL, { transports: ['websocket'] });
    socket.emit('joinRoom', { workshopId, userId });
    socket.on('message', (msg) => setMessages((m) => [...m, msg]));
    return () => socket.disconnect();
  }, [workshopId, userId]);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages]);

  const send = () => {
    if (!text.trim()) return;
    socket.emit('message', { workshopId, userId, text });
    setText('');
  };

  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-semibold mb-2">Workshop chat</h2>
      <div className="border h-96 overflow-y-auto p-2 rounded">
        {messages.map(m => (
          <div key={m._id || Math.random()} className="my-1">
            <span className="font-mono text-xs opacity-60">{m.sender?.slice(-4) || 'you'}:</span> {m.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="flex gap-2 mt-2">
        <input className="border flex-1 p-2" value={text} onChange={e=>setText(e.target.value)} placeholder="Type a message..." />
        <button className="px-3 py-2 border rounded" onClick={send}>Send</button>
      </div>
    </div>
  );
}
