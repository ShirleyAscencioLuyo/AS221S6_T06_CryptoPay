import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaTicketAlt, FaListAlt, FaAward, FaTachometerAlt, FaClock, FaCog } from 'react-icons/fa';
import '../../styles/components/Sidebar.css';

const Sidebar = () => {
  const [userName, setUserName] = useState('');
  const [showSettingsSubMenu, setShowSettingsSubMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const name = localStorage.getItem('userName');
    if (name) {
      setUserName(name);
    }
  }, []);

  const handleSettingsSubMenuToggle = () => {
    setShowSettingsSubMenu(!showSettingsSubMenu);
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <div className="profile">
        <img
          src={require('../../assets/profilePerson.png')}
          alt="User Avatar"
          className="profile-pic"
        />
        <p className="role">ENCARGADO</p>
        <h3 className="name">Usuario</h3>
      </div>
      <div className="menu">
        {/* Dashboard y sus elementos directamente en el menú */}
        <Link to="/inicio" className="menu-item"><FaHome className="icon" /> Inicio</Link>
        <Link to="/purchases" className="menu-item"><FaTicketAlt className="icon" /> Compras de Pasaje</Link>
        <Link to="/transaction-details" className="menu-item"><FaListAlt className="icon" /> Detalles de la Transacción</Link>
        <Link to="/rewards" className="menu-item"><FaAward className="icon" /> Recompensas</Link>
        <Link to="/route-monitoring" className="menu-item"><FaTachometerAlt className="icon" /> Monitoreo de Ruta</Link>
        <Link to="/schedules" className="menu-item"><FaClock className="icon" /> Horarios</Link>

        <div className="menu-item">
          <button
            onClick={handleSettingsSubMenuToggle}
            className="settings-button"
            aria-expanded={showSettingsSubMenu} // Para mejorar la accesibilidad
            aria-controls="settings-submenu" // Para indicar qué parte controla
          >
            <FaCog className="icon" /> Configuración
            <span className="arrow">{showSettingsSubMenu ? "▲" : "▼"}</span>
          </button>
        </div>
        {showSettingsSubMenu && (
          <div className="sub-menu" id="settings-submenu"> {/* Agregar un ID para aria-controls */}
            <Link to="/profile" className="sub-menu-item">Perfil</Link>
            <a href="#logout" onClick={handleLogout} className="sub-menu-item">Salir</a>
          </div>
        )}

      </div>
    </div>
  );
};

export default Sidebar;
