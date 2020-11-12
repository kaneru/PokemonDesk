import React from 'react';
import { A, usePath } from 'hookrouter';
import cn from 'classnames';

import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';
import { GENERAL_MENU } from '../../routes';

const Header: React.FC = () => {
  const path = usePath();

  return (
    <header className={s.root}>
      <div className={s.wrapper}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <nav className={s.menuWrapper}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A href={link} className={cn(s.menuLink, { [s.activeLink]: link === path })} key={title}>
              {title}
            </A>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
