import React from 'react';
import styles from './Navbar.module.scss';
import logo from '../../assets/rick-and-morty-logo.png'

const Navbar = () => (
  <nav className={`${styles.Navbar} navbar fixed-top d-inline-flex justify-content-center justify-content-sm-start align-items-center`}>
    <img className={styles.logo} src={logo} alt="Rick and Morty logo" />
  </nav>
);

export default Navbar;
