import React from 'react'
import './Columns.scss'
import Column from './subcomponents/Column'
import clsx from 'clsx'

export interface ColumnsProps {
	/** Viewport width (px) at which the columns are collapsed vertically */
	collapseBreakpoint?: 'sm' | 'md' | 'lg' | 'xlg' | undefined
	/** The number of columns */
	count: number
	/** The space (px) between columns */
	space?: number
	/** Optional custom styling */
	style?: React.CSSProperties
	/** Vertical alignment of columns of varying heights */
	verticalAlignment?: `top` | 'center' | 'bottom'
	children?: JSX.Element | JSX.Element[]
}

/** `Columns` and `Column` are layout components that display elements side by side.*/
const Columns = ({ children, collapseBreakpoint, count, space = 0, style, verticalAlignment = 'top' }: ColumnsProps) => {
	console.log(!!collapseBreakpoint)

	let alignment
	switch (verticalAlignment) {
		case 'top': {
			alignment = 'start'
			break
		}
		case 'center': {
			alignment = 'center'
			break
		}
		case 'bottom': {
			alignment = 'end'
			break
		}
	}

	return (
		<div
			className={clsx('dc-columns', collapseBreakpoint && 'dc-columns__breakpoint--' + collapseBreakpoint)}
			style={
				{
					'--count': count,
					'--space': space,
					'--vertical-aligntment': alignment,
					...style,
				} as React.CSSProperties
			}
		>
			{children}
		</div>
	)
}

Columns.Column = Column

export default Columns
