import React from 'react'

interface ConditionalWrapperGeneral {
	condition: boolean
	children?: any
	style?: any
	[x: string]: any
}

interface ConditionalWrapperComponent extends ConditionalWrapperGeneral {
	ComponentWrapper: React.ElementType
	elementWrapper?: never
}

interface ConditionalWrapperElement extends ConditionalWrapperGeneral {
	ComponentWrapper?: never
	elementWrapper: string
}

function ConditionalWrapper({ condition, ComponentWrapper, elementWrapper, children, ...rest }: ConditionalWrapperComponent | ConditionalWrapperElement) {
	return condition ? (
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
