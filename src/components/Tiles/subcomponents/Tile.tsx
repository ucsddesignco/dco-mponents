import React from 'react';
import Placeholder from '../../Placeholder/Placeholder';
export interface TileProps {
  children?: JSX.Element | JSX.Element[];
}
const Tile = ({ children }: TileProps) => {
  return <div className="dc-tile">{children}</div>;
};

export default Tile;
