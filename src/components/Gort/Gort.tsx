import React, { KeyboardEventHandler, useState } from 'react'
import './Gort.scss'

export interface GortProps {
	autoplay?: boolean
}

const gortImg = 'https://ih1.redbubble.net/image.3919572071.7167/pp,504x498-pad,600x600,f8f8f8.jpg'
const gortVid = 'https://www.youtube.com/embed/lvwZQTB4iv4?rel=0?version=3&autoplay=1&controls=0&showinfo=0&loop=1'

function Gort({ autoplay = true }: GortProps) {
	const [pullUp, setPullUp] = useState<boolean>(false)

	const playGort = () => {
		setPullUp(true)
	}

	const keyPressHandler: KeyboardEventHandler = (e: React.KeyboardEvent<Element>) => {
		if (e?.key === ' ' || e?.key === 'Enter') {
			e?.preventDefault()
			playGort()
		}
	}

	return (
		<div className='dcomp-gort'>
			<img id='dcomp-gort-img' src={gortImg} style={{ display: !pullUp ? 'block' : 'none' }} onClick={playGort} onKeyDown={keyPressHandler} role='button' alt='Gort' tabIndex={0} aria-hidden={pullUp} />
			{pullUp && <iframe id='dcomp-gort-iframe' src={gortVid} title='capybara ok i pull up' allow={autoplay ? 'autoplay' : ''} />}
		</div>
	)
}

export default Gort
