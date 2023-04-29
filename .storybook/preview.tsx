import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/global.scss';
import { MDXProvider } from '@mdx-js/react';
import { DocsContainer } from '@storybook/blocks';
import H1 from '../src/docs/components/H1';

type Component<Props> = (props: Props) => JSX.Element;

export const MyDocsContainer = (props) => (
  <MDXProvider
    components={{
      h1: H1 as Component<JSX.IntrinsicElements['h1']>,
    }}
  >
    <DocsContainer {...props} />
  </MDXProvider>
);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Welcome', 'Foundations'],
        method: 'alphabetical',
      },
    },
    docs: {
      container: MyDocsContainer,
    },
  },
};

export default preview;
