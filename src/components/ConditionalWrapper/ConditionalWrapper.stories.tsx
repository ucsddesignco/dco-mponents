import React from 'react'
import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import ConditionalWrapper from './ConditionalWrapper'

const meta = {
	title: 'DComponents/Utility/ConditionalWrapper',
	component: ConditionalWrapper,
	tags: ['autodocs'],
} satisfies Meta<typeof ConditionalWrapper>

export default meta
type Story = StoryObj<typeof meta>

const Template: StoryFn = ({ wrap, ComponentWrapper, elementWrapper, children, ...rest }) => (
	<ConditionalWrapper
		wrap={wrap}
		elementWrapper={elementWrapper}
		children={children}
		{...rest}
	/>
)

export const LinkConditionalWrapper: Story = Template.bind({})
LinkConditionalWrapper.args = {
	wrap: true,
	elementWrapper: 'a',
	children: 'This is conditionally a link',
	href: 'https://i0.wp.com/boingboing.net/wp-content/uploads/2020/12/Screen-Shot-2020-12-03-at-3.20.15-PM.png?fit=1200%2C698&ssl=1',
	rel: 'norefferrer',
	target: '_blank',
}
