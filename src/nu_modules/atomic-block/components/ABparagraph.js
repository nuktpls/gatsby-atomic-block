import React from 'react'

const ABparagraph = (props) => (
	<div
		className={props.elementClass}
		dangerouslySetInnerHTML={{ __html: props.paragraph }}
	></div>
)

export default ABparagraph
