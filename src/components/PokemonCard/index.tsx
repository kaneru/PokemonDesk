import React from 'react';
import cn from 'classnames';

import Heading from '../Heading';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';
import s from './PokemonCard.module.scss';

interface PokemonCardProps {
  name: string;
  attack: number;
  defense: number;
  img: string;
  types: string[];
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, attack, defense, img, types }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading tag="h5" className={s.titleName}>
          {toCapitalizeFirstLetter(name)}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span
              key={type}
              className={cn(s.label, { [s.labelCyan]: type === 'water' }, { [s.labelGreen]: type === 'grass' })}>
              {toCapitalizeFirstLetter(type)}
            </span>
          ))}
        </div>
      </div>
      <div
        className={cn(
          s.pictureWrap,
          { [s.grassGradient]: types[0] === 'grass' },
          { [s.waterGradient]: types[0] === 'water' },
        )}>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
