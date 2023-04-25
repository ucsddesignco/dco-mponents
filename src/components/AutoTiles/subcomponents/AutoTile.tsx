import React from 'react';
export interface AutoTileProps {
  /** Optional custom styling */
  style?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[];
}

const AutoTile = ({ style, children }: AutoTileProps) => {
  return <div className="dc-auto-tile">{children}</div>;
};

export default AutoTile;
