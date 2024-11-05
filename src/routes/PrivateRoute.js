import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem('userName');

  return isLoggedIn ? children : <Navigate to="/login" />;
};

// Agrega la validación de PropTypes
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;