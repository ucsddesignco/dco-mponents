import React from 'react';
import './VerticalTrim.scss';
import Placeholder from '../../../components/Placeholder/Placeholder';
import { Columns } from '../../../components';
import '../fake-canvas.scss';

const VerticalTrim = () => {
  return (
    <div id="dc-docs-vertical-trim" className="fake-canvas">
      <Columns count={2} space={64}>
        <Columns.Column>
          <div>
            <span className="title">Design Co</span>
            <Placeholder height={32} />
            <span className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, provident.
            </span>
            <Placeholder height={32} />
            <span className="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, voluptas! A fuga ducimus consequuntur minima nesciunt
              consectetur nemo recusandae iure, laboriosam omnis harum id
              voluptas, tempora laborum molestiae sequi non illum iusto maxime
              quidem velit, cumque quia asperiores corporis. Soluta eveniet
              aliquam dolorum, est expedita, cupiditate assumenda excepturi
              dolores natus quia voluptatum consequatur exercitationem eaque
              perspiciatis cum maiores quis hic quaerat quos ut voluptatibus
              rerum.
            </span>
          </div>
        </Columns.Column>
        <Columns.Column>
          <div className="flex">
            <span className="title">Design Co</span>
            <span className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio, provident.
            </span>
            <span className="p">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, voluptas! A fuga ducimus consequuntur minima nesciunt
              consectetur nemo recusandae iure, laboriosam omnis harum id
              voluptas, tempora laborum molestiae sequi non illum iusto maxime
              quidem velit, cumque quia asperiores corporis. Soluta eveniet
              aliquam dolorum, est expedita, cupiditate assumenda excepturi
              dolores natus quia voluptatum consequatur exercitationem eaque
              perspiciatis cum maiores quis hic quaerat quos ut voluptatibus
              rerum.
            </span>
          </div>
        </Columns.Column>
      </Columns>
    </div>
  );
};

export default VerticalTrim;
