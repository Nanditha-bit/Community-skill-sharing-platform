import { useState } from 'react';
import { api } from '../api';
export default function Register({ setToken }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'learner' });
  const submit = async (e) => {
    e.preventDefault();
    const { data } = await api.post('/auth/register', form);
    setToken(data.token);
  };
  return (
    <form onSubmit={submit} className="max-w-md flex flex-col gap-2">
      <h2 className="text-2xl font-semibold">Create account</h2>
      <input className="border p-2" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
      <input className="border p-2" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" className="border p-2" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/>
      <select className="border p-2" value={form.role} onChange={e=>setForm({...form,role:e.target.value})}>
        <option value="learner">Learner</option>
        <option value="instructor">Instructor</option>
      </select>
      <button className="px-3 py-2 border rounded">Sign up</button>
    </form>
  );
}
