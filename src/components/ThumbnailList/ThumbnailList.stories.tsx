import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import type { Meta, StoryObj } from '@storybook/react'
import ThumbnailList from './ThumbnailList'

const TestImages: { [key: string]: string } = {
	Angy: 'https://preview.redd.it/voiac279e2461.png?auto=webp&s=68ac149085a1bab71f1dd4d71d0a509bcc4a316e',
	'Frew Up': 'https://i.pinimg.com/564x/5b/02/47/5b0247d140ff9659066d61fa63edc79a.jpg',
	Happy: 'https://i.pinimg.com/originals/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg',
	Hello: 'https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg',
	Melvin: 'https://preview.redd.it/r3lcc7gf64791.png?width=540&format=png&auto=webp&s=9d32ec46f884486fd59dfd01453bf5d07bf30d75',
	Polite: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fm=pjpg',
	Stinky: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'DComponents/ThumbnailList',
	component: ThumbnailList,
	tags: ['autodocs'],
} satisfies Meta<typeof ThumbnailList>

export default meta
type Story = StoryObj<typeof meta>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThumbnailList> = args => (
	<ThumbnailList
		{...args}
		thumbnails={TestImages}
		thumbnailsPerRow={4}
		imagePadding={10}
	/>
)

export const ForceSquare: Story = Template.bind({})
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
ForceSquare.args = { forceSquare: true }

export const NoForceSquare: Story = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoForceSquare.args = { forceSquare: false }
