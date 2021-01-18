import React, { useContext } from 'react'
import { Navigate, Route } from 'react-router-dom';
import { UserContext } from '../../Hooks/UserContext/UserContext'

const ProtectRoutes = (props) => {
  const { login } = useContext(UserContext);

  if(login === true) return <Route {...props}/>;
  else if(login === false) return <Navigate to="/login"/>
  else return null;
}

export default ProtectRoutes
