import React from 'react'
import type { Meta, StoryFn, StoryObj } from '@storybook/react'
import AutoTiles from './AutoTiles'
import Placeholder from '../Placeholder/'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AutoTiles> = {
	title: 'DComponents/AutoTiles',
	component: AutoTiles,
}

export default meta

type Story = StoryObj<typeof meta>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn = args => (
	<AutoTiles
		minWidth={250}
		{...args}
	>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
	</AutoTiles>
)

const UnequalHeightsTemplate: StoryFn = args => (
	<AutoTiles
		minWidth={250}
		{...args}
	>
		<AutoTiles.Tile>
			<Placeholder height={50} />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder height={30} />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder height={70} />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder height={70} />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder height={50} />
		</AutoTiles.Tile>
	</AutoTiles>
)

const MinimumWidthsTemplate: StoryFn = args => (
	<AutoTiles
		minWidth={100}
		{...args}
	>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
		<AutoTiles.Tile>
			<Placeholder />
		</AutoTiles.Tile>
	</AutoTiles>
)

export const Default: Story = Template.bind({})

export const MinimumWidths: Story = MinimumWidthsTemplate.bind({})

export const WithSpace: Story = Template.bind({})
WithSpace.args = { space: 32 }

export const UnequalHeights: Story = UnequalHeightsTemplate.bind({})

// More on args: https://storybook.js.org/docs/react/writing-stories/args
