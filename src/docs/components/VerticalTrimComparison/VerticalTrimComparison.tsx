import React from 'react';
import Columns from '../../../components/Columns';
import Placeholder from '../../../components/Placeholder';
import './VerticalTrimComparison.scss';
import '../fake-canvas.scss';
const VerticalTrimComparison = () => {
  return (
    <div id="dc-docs-vertical-trim-comparison" className="fake-canvas">
      <Columns count={2} space={64}>
        <Columns.Column>
          <Placeholder height={32} />
          <span className="has-trim">Design Co</span>
          <Placeholder height={32} />
        </Columns.Column>
        <Columns.Column>
          <Placeholder height={32} />
          <span className="no-trim">Design Co</span>
          <Placeholder height={32} />
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default VerticalTrimComparison;
