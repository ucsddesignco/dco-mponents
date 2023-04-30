import React from 'react'
<<<<<<< Updated upstream
import type { Meta, StoryFn, StoryObj } from '@storybook/react';
=======
import type { Meta, StoryFn, StoryObj } from '@storybook/react'
>>>>>>> Stashed changes
import Gort from './Gort'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
<<<<<<< Updated upstream
  title: 'DComponents/Gort',
	component: Gort,
  tags: ['autodocs'],
} satisfies Meta<typeof Gort>;
=======
	title: 'DComponents/Gort/Gort',
	component: Gort,
	tags: ['autodocs'],
} satisfies Meta<typeof Gort>
>>>>>>> Stashed changes

export default meta
type Story = StoryObj<typeof meta>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn = args => <Gort {...args} />

export const Autoplay: Story = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Autoplay.args = {}

export const NoAutoplay: Story = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoAutoplay.args = { autoplay: false }
