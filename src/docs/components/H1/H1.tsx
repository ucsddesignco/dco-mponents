import React from 'react';
import './H1.scss';

interface H1Props {
  children?: string;
}

export const H1 = ({ children }: H1Props) => {
  return <h1 className="dc-docs-h1">{children}</h1>;
};

export default H1;
