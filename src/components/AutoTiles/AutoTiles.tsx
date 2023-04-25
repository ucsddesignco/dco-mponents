import React from 'react';
import AutoTile from './subcomponents/AutoTile';
import './AutoTiles.scss';

interface AutoTilesProps {
  /** The minimum tile width */
  minWidth: number;
  /** The space (px) between tiles */
  space?: number;
  /** Optional custom styling */
  style?: React.CSSProperties;
  /** Vertical alignment of tiles of varying heights */
  verticalAlignment?: `top` | 'center' | 'bottom';
  children?: JSX.Element | JSX.Element[];
}

/** `AutoTiles` and `AutoTile` are layout components that display a responsive grid of elements that adjusts automatically. This is unlike the `Tiles` and `Tile` components whose breakpoints must be set manually to be responsive.*/
const AutoTiles = ({
  minWidth,
  space = 0,
  style,
  verticalAlignment = 'top',
  children,
}: AutoTilesProps) => {
  let alignment;
  switch (verticalAlignment) {
    case 'top': {
      alignment = 'start';
      break;
    }
    case 'center': {
      alignment = 'center';
      break;
    }
    case 'bottom': {
      alignment = 'end';
      break;
    }
  }

  return (
    <div
      className="dc-auto-tiles"
      style={
        {
          '--min-width': minWidth,
          '--space': space,
          '--vertical-alignment': alignment,
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default AutoTiles;

AutoTiles.Tile = AutoTile;
