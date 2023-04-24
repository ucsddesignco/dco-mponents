import React from 'react';
import './Columns.scss';
import Column from './subcomponents/Column';
import clsx from 'clsx';

export interface ColumnsProps {
  /** Viewport width (px) at which the columns are collapsed vertically */
  collapseBreakpoint?: 'sm' | 'md' | 'lg' | 'xlg' | undefined;
  /** The number of columns */
  count: number;
  /** The space (px) between columns */
  space?: number;
  /** Optional custom styling */
  style?: React.CSSProperties;
  verticalAlignment?: `top` | 'center' | 'bottom';
  children?: JSX.Element | JSX.Element[];
}

/** `Columns` and `Column` are layout components that help display elements side by side. `Columns` wrap multiple `Column` components, and all content should be placed inside the `Column` components.*/
const Columns = ({
  children,
  collapseBreakpoint,
  count,
  space = 0,
  style,
  verticalAlignment = 'top',
}: ColumnsProps) => {
  console.log(!!collapseBreakpoint);

  let alignItems;
  switch (verticalAlignment) {
    case 'top': {
      alignItems = 'start';
      break;
    }
    case 'center': {
      alignItems = 'center';
      break;
    }
    case 'bottom': {
      alignItems = 'end';
      break;
    }
  }

  return (
    <div
      className={clsx(
        'dc-columns',
        collapseBreakpoint && 'dc-columns__breakpoint--' + collapseBreakpoint
      )}
      style={
        {
          '--columns': count,
          '--space': space + 'px',
          '--vertical-aligntment': alignItems,
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
};

Columns.Column = Column;

export default Columns;
