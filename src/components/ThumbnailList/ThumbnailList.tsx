import React, { useState } from 'react'
import uuid from 'react-uuid'

import './ThumbnailList.scss'

type DCoThumbnail = {
	caption: string
	src: string
	alt: string
	href?: string
}

interface ThumbnailListProps {
	thumbnails: DCoThumbnail[]
	thumbnailsPerRow?: number
	forceSquare?: boolean
	justifyContent?: string
	imagePadding?: number
	className: string
	style: React.CSSProperties
	[x: string]: any

}

function ThumbnailList({ thumbnails, thumbnailsPerRow = 4, forceSquare = true, justifyContent = 'space-around', imagePadding = 0, className = '', style = {},  ...rest}: ThumbnailListProps) {
	const generateKeys = () => {
		const thumbnailKeys: { [key:string] : string } = {}

		thumbnails.forEach(thumbnail => {
			thumbnailKeys[thumbnail.caption] = uuid()
		})

		return thumbnailKeys
	}

	// eslint-disable-next-line
	const [uuidKeys, _] = useState(generateKeys())

	console.log(Math.floor((100 / thumbnailsPerRow) * 100) / 100)

	return (
		<div
			className='dcomp-thumbnail-list-container'
			style={{
				justifyContent: justifyContent,
			}}
		>
			{thumbnails.map(thumbnail => (
				React.createElement(
					// element name
					thumbnail?.href !== undefined ? 'a' : 'figure',
					// props
					{
						className: 'dcomp-thumbnail-list-thumbnail ' + className,
						href: thumbnail?.href !== undefined ? thumbnail.href : undefined,
						target: thumbnail?.href !== undefined ? '_blank' : undefined,
						rel: thumbnail?.href !== undefined ? 'noreferrer' : undefined,
						style: {
							'--max-thumbnail-width': `${Math.floor((100 / thumbnailsPerRow) * 100) / 100}%`,
							'--image-padding': `${imagePadding}px`,
							...style,
						},
						key: uuidKeys[thumbnail.caption],
						...rest,
					},
					// children
					<>
						<img
							className={'dcomp-thumbnail-list-image' + String(forceSquare && ' dcomp-thumbnail-list-image-square')}
							src={thumbnail.src}
							alt={thumbnail.alt}
							width='100%'
						/>
						<figcaption className='dcomp-thumbnail-list-image-caption'>{thumbnail.caption}</figcaption>
					</>,
				)
			))}
		</div>
	)
}

export default ThumbnailList

export type { DCoThumbnail }
