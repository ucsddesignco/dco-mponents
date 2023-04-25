import React from 'react';
import './Tiles.scss';
import Tile from './subcomponents/Tile';
import clsx from 'clsx';

export interface TilesProps {
  /** Viewport width (px) at which the columns are collapsed vertically */
  collapseBreakpoint?: 'sm' | 'md' | 'lg' | 'xlg' | undefined;
  /** The number of tiles per row */
  count: number;
  /** Horizontal justification of tiles */
  horizontalJustification?: `left` | 'center' | 'right';
  /** The space (px) between tiles */
  space?: number;
  /** Optional custom styling */
  style?: React.CSSProperties;
  /** Vertical alignment of tiles of varying heights */
  verticalAlignment?: `top` | 'center' | 'bottom';
  children?: JSX.Element | JSX.Element[];
}

/** `Tiles` and `Tile` are layout components that display a grid of elements. */
const Tiles = ({
  collapseBreakpoint,
  count,
  horizontalJustification = 'center',
  space = 0,
  style,
  verticalAlignment = 'top',
  children,
}: TilesProps) => {
  let alignmentX, alignmentY;

  switch (horizontalJustification) {
    case 'left': {
      alignmentX = 'start';
      break;
    }
    case 'center': {
      alignmentX = 'center';
      break;
    }
    case 'right': {
      alignmentX = 'end';
      break;
    }
  }

  switch (verticalAlignment) {
    case 'top': {
      alignmentY = 'start';
      break;
    }
    case 'center': {
      alignmentY = 'center';
      break;
    }
    case 'bottom': {
      alignmentY = 'end';
      break;
    }
  }

  return (
    <>
      <div
        className={clsx(
          'dc-tiles',
          collapseBreakpoint && 'dc-tiles__breakpoint--' + collapseBreakpoint
        )}
        style={
          {
            '--count': count,
            '--horizontal-alignment': alignmentX,
            '--space': space,
            '--vertical-alignment': alignmentY,
            ...style,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </>
  );
};

Tiles.Tile = Tile;

export default Tiles;
