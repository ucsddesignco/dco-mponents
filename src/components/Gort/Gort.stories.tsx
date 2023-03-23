import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Gort from './Gort'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'DComponents/Gort',
	component: Gort,
} as ComponentMeta<typeof Gort>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Gort> = args => <Gort {...args} />

export const HelloWorld = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {}

export const ClickMe = Template.bind({})
ClickMe.args = {}
