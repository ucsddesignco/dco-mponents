import React from 'react'

interface ConditionalWrapperProps {
	condition: boolean
	ComponentWrapper: React.ElementType | undefined
	elementWrapper: string | undefined
	children: any
	[x: string]: any
}

function ConditionalWrapper({ condition, ComponentWrapper, elementWrapper, children, ...rest }: ConditionalWrapperProps) {
	return condition ? (
		ComponentWrapper ? (
			<ComponentWrapper
				children={children}
				{...rest}
			/>
		) : (
			React.createElement(elementWrapper ?? '', rest, children)
		)
	) : (
		<>{children}</>
	)
}

export default ConditionalWrapper
