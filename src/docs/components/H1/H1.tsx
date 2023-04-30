import React from 'react';
import './H1.scss';

interface H1Props {
  children?: string;
}

export const H1 = ({ children }: H1Props) => {
  return (
    <div className="dc-docs-h1">
      <h1>{children}</h1>
    </div>
  );
};

export default H1;
