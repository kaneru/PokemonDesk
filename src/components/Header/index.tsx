import React from 'react';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenuItems {
  id: number;
  value: string;
  link: string;
}

const MENU_ITEMS: IMenuItems[] = [
  {
    id: 0,
    value: 'Home',
    link: '#',
  },
  {
    id: 1,
    value: 'Pokédex',
    link: '#',
  },
  {
    id: 2,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 3,
    value: 'Documentation',
    link: '#',
  },
];

const Header: React.FC = () => {
  return (
    <header className={s.root}>
      <div className={s.wrapper}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <nav className={s.menuWrapper}>
          {MENU_ITEMS.map(({ id, value, link }) => (
            <a href={link} className={s.menuLink} key={id}>
              {value}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
