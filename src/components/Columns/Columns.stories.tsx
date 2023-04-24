import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import Columns from './Columns';
import Placeholder from '../Placeholder/Placeholder';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Columns> = {
  title: 'Layout/Columns',
  component: Columns,
};

export default meta;
type Story = StoryObj<typeof Columns>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn = (args) => (
  <Columns count={12} {...args}>
    <Columns.Column span={4}>
      <Placeholder />
    </Columns.Column>
    <Columns.Column span={4}>
      <Placeholder />
    </Columns.Column>
    <Columns.Column span={4}>
      <Placeholder />
    </Columns.Column>
  </Columns>
);

const EqualWidthsTemplate: StoryFn = (args) => (
  <Columns count={6} {...args}>
    <Columns.Column span={3}>
      <Placeholder label="3" />
    </Columns.Column>
    <Columns.Column span={3}>
      <Placeholder label="3" />
    </Columns.Column>
  </Columns>
);

const UnequalWidthsTemplate: StoryFn = (args) => (
  <Columns count={6} {...args}>
    <Columns.Column span={2}>
      <Placeholder label="2" />
    </Columns.Column>
    <Columns.Column span={4}>
      <Placeholder label="4" />
    </Columns.Column>
  </Columns>
);

const UnequalHeightsTemplate: StoryFn = (args) => (
  <Columns count={6} {...args}>
    <Columns.Column span={2}>
      <Placeholder height={50} />
    </Columns.Column>
    <Columns.Column span={2}>
      <Placeholder height={100} />
    </Columns.Column>
    <Columns.Column span={2}>
      <Placeholder height={80} />
    </Columns.Column>
  </Columns>
);

export const Default: Story = Template.bind({});

export const WithSpace: Story = Template.bind({});
WithSpace.args = { space: 32 };

export const EqualWidths: Story = EqualWidthsTemplate.bind({});

export const UnequalWidths: Story = UnequalWidthsTemplate.bind({});

export const Collapsing: Story = Template.bind({});
Collapsing.args = { collapseBreakpoint: 'md' };

export const UnequalHeights: Story = UnequalHeightsTemplate.bind({});
