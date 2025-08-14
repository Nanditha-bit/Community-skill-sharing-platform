import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { api } from '../api';

export default function WorkshopDetail({ authed }) {
  const { id } = useParams();
  const [w, setW] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/workshops/${id}`).then(res => setW(res.data));
  }, [id]);

  const bookAndPay = async () => {
    if (!authed) return navigate('/login');
    // 1) create booking
    const { data: booking } = await api.post('/bookings', { workshopId: id });
    // 2) create stripe session
    const { data } = await api.post('/stripe/create-checkout-session', { bookingId: booking._id });
    window.location.href = data.url;
  };

  if (!w) return <div>Loading...</div>;
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-bold">{w.title}</h2>
      <p className="my-2">{w.description}</p>
      <p className="font-semibold">Price: ₹{w.priceINR}</p>
      <div className="flex gap-3 mt-3">
        <button className="px-3 py-2 border rounded" onClick={bookAndPay}>Book & Pay</button>
        <Link className="underline" to={`/chat/${w._id}`}>Open chat</Link>
      </div>
    </div>
  );
}
