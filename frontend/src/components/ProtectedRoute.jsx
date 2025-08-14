import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, authed }) {
  if (!authed) return <Navigate to="/login" replace />;
  return children;
}
