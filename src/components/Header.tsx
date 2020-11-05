import React from 'react';
import s from '../App.module.scss';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Logo />
      <ul className={s.header__menu}>
        <li className={s.active_item}>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pokédex</a>
        </li>
        <li>
          <a href="#">Legendaries</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
