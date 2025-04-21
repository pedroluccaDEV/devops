import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Header.css';

const Layout = () => {
  return ( 
    <header className="header">
        <img src="../../logo.png" alt="logoPUC" className="logo" />
        <h1>Atividade Somativa Semana 4</h1>
    </header>
  );
};

export default Layout;