import React from 'react'

interface ConditionalWrapperGeneral {
	/** boolean determining if wrap is active */
	wrap: boolean
	/** any children of the wrapper */
	children?: any
	/** styling for the wrapper */
	style?: any
	/** other props applied to the wrapper */
	[x: string]: any
}

interface ConditionalWrapperComponent extends ConditionalWrapperGeneral {
	/** wrap with React Component; mutually exclusive with elementWrapper */
	ComponentWrapper: React.ElementType
	/** wrap with html element; mutually exclusive with ComponentWrapper */
	elementWrapper?: never
}

interface ConditionalWrapperElement extends ConditionalWrapperGeneral {
	/** wrap with React Component; mutually exclusive with elementWrapper */
	ComponentWrapper?: never
	/** wrap with html element; mutually exclusive with ComponentWrapper */
	elementWrapper: string
}

function ConditionalWrapper({ wrap, ComponentWrapper, elementWrapper, children, ...rest }: ConditionalWrapperComponent | ConditionalWrapperElement) {
	return wrap ? (
		ComponentWrapper ? (
			<ComponentWrapper
				children={children}
				{...rest}
			/>
		) : (
			React.createElement(elementWrapper, rest, children)
		)
	) : (
		<>{children}</>
	)
}

export default ConditionalWrapper
