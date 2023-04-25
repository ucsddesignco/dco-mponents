import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import Tiles from './Tiles';
import Placeholder from '../Placeholder/Placeholder';

const meta: Meta<typeof Tiles> = {
  title: 'DComponents/Tiles',
  component: Tiles,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Template: StoryFn = (args) => (
  <Tiles count={3} {...args}>
    <Tiles.Tile>
      <Placeholder />
    </Tiles.Tile>
    <Tiles.Tile>
      <Placeholder />
    </Tiles.Tile>
    <Tiles.Tile>
      <Placeholder />
    </Tiles.Tile>
    <Tiles.Tile>
      <Placeholder />
    </Tiles.Tile>
    <Tiles.Tile>
      <Placeholder />
    </Tiles.Tile>
  </Tiles>
);

const UnequalHeightsTemplate: StoryFn = (args) => (
  <Tiles count={3} {...args}>
    <Tiles.Tile>
      <Placeholder height={50} />
    </Tiles.Tile>
    <Tiles.Tile>
      <Placeholder height={30} />
    </Tiles.Tile>
    <Tiles.Tile>
      <Placeholder height={70} />
    </Tiles.Tile>
    <Tiles.Tile>
      <Placeholder height={70} />
    </Tiles.Tile>
    <Tiles.Tile>
      <Placeholder height={50} />
    </Tiles.Tile>
  </Tiles>
);

export const Default: Story = Template.bind({});

export const WithSpace: Story = Template.bind({});
WithSpace.args = { space: 32 };

export const UnequalHeights: Story = UnequalHeightsTemplate.bind({});
export const Collapsing: Story = Template.bind({});
Collapsing.args = { collapseBreakpoint: 'md' };
