import React from 'react';

import s from './Heading.module.scss';

interface HeadingProps {
  tag?: keyof JSX.IntrinsicElements;
}

const Heading: React.FC<HeadingProps> = ({ children, tag: Wrapper = 'h2' }) => {
  return <Wrapper className={s.root}>{children}</Wrapper>;
};

export default Heading;
