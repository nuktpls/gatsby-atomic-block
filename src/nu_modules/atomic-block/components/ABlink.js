import React from 'react'

const ABlink = (props) => (
	<a className={props.elementClass} href={props.link}>
		{props.linkText}
	</a>
)

export default ABlink
