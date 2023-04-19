import React, { useEffect, useState } from 'react'
import './Label.scss'

export interface LabelProps {
	/**  Sets the size*/
	size?: 'medium' | 'small'
	/**  Sets the text color */
	foregroundColor?: string
	/**  Sets the background color */
	backgroundColor?: string
	/**  Sets the label text */
	children: any
}

function Label({ size = 'medium', foregroundColor = '#ffffff', backgroundColor = '#000000', children }: LabelProps) {
	const [padding, setPadding] = useState<number>(0)
	const [fontSize, setFontSize] = useState<number>(0)

	useEffect(() => {
		setPadding(size === 'medium' ? 12 : 8)
		setFontSize(size === 'medium' ? 16 : 12)
	}, [size])

	return (
		<div
			className='dcomp-test-component-Label'
			style={{ color: foregroundColor, backgroundColor: backgroundColor, padding: padding, fontSize: fontSize }}
		>
			{children}
		</div>
	)
}

export default Label
