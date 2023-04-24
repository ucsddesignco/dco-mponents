import React from 'react';
import './Placeholder.scss';
interface PlaceholderProps {
  width?: 'auto' | number;
  height?: number;
  label?: string;
}

const Placeholder = ({
  width = 'auto',
  height = 80,
  label,
}: PlaceholderProps) => {
  return (
    <div
      style={{
        width,
        height,
      }}
      className="dc-placeholder"
    >
      {label ? (
        <span>{label}</span>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <line
            style={{ strokeWidth: '1px', stroke: 'hsla(0, 0%, 0%, 0.15)' }}
            x1={0}
            y1={0}
            x2="100%"
            y2="100%"
          />
          <line
            style={{ strokeWidth: '1px', stroke: 'hsla(0, 0%, 0%, 0.15)' }}
            x1="100%"
            y1={0}
            x2={0}
            y2="100%"
          />
        </svg>
      )}
    </div>
  );
};

export default Placeholder;
