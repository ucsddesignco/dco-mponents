import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import type { Meta, StoryObj } from '@storybook/react';
import Gort from './Gort'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'DComponents/Gort',
	component: Gort,
  tags: ['autodocs'],
} satisfies Meta<typeof Gort>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Gort> = args => <Gort {...args} />

export const Autoplay: Story = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Autoplay.args = {}

export const NoAutoplay: Story = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoAutoplay.args = { autoplay: false }
