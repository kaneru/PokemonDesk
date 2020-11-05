import React from 'react';
import s from '../App.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div>
        Made with
        <span role="img" aria-label="emoji-heart">
          ❤️
        </span>
      </div>
      <div>
        <a href="#">Our team</a>
      </div>
    </footer>
  );
};

export default Footer;
