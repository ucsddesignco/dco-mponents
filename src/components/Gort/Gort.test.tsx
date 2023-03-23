import React from 'react'
import { render } from '@testing-library/react'

import Gort from './Gort'

describe('Button', () => {
	test('renders the Gort component', () => {
		render(<Gort />)
	})
})
