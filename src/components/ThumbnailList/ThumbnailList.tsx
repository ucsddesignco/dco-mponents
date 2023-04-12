import React from 'react'

import './ThumbnailList.scss'

interface ThumbnailListProps {
	thumbnails: any
	thumbnailsPerRow?: number
	forceSquare?: boolean
	justifyContent?: string
}

function ThumbnailList({ thumbnails, thumbnailsPerRow = 3, forceSquare = true, justifyContent = 'space-around' }: ThumbnailListProps) {
	return (
		<div
			className='dcomp-thumbnail-list-container'
			style={{
				justifyContent: justifyContent,
			}}
		>
			{Object.keys(thumbnails).map(cap => (
				<div
					className='dcomp-thumbnail-list-thumbnail'
					style={
						{
							'--max-thumbnail-width': `${100 / (thumbnailsPerRow + 1)}%`,
						} as React.CSSProperties
					}
				>
					<img
						className={String(forceSquare && 'dcomp-thumbnail-list-image-square')}
						src={thumbnails[cap]}
						alt={`Some regularized description of ${cap}.`}
						width='100%'
					/>
					{cap}
				</div>
			))}
		</div>
	)
}

export default ThumbnailList
