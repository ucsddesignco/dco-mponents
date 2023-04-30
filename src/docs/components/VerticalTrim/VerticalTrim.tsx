import React from 'react';
import './VerticalTrim.scss';
import Placeholder from '../../../components/Placeholder/Placeholder';

const VerticalTrim = () => {
  return (
    <div id="dc-docs-vertical-trim">
      <Placeholder height={32} />
      <span className="lg">VerticalTrim</span>
      <Placeholder height={32} />
    </div>
  );
};

export default VerticalTrim;
