import React from 'react'

const ABheading = (props) => (
	<h2
		className={props.elementClass}
		style={{
			fontSize: props.fontSize,
			color: props.fontColor,
		}}
	>
		{props.heading}
	</h2>
)

export default ABheading
