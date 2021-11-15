import { Navigate } from 'react-router-dom'
import { Route } from 'react-router';


function PrivateRoute({ element, path }) {
  const token = localStorage.getItem('token');
  const ele = token
    ? element
    : <Navigate to="/login" replace />;

  return <Route path={path} element={ele} />;
}

export default PrivateRoute