import React from 'react'

const ABdebug = ({ blockInfo }) => {
	if (!blockInfo) {
		return null
	}
	return (
		<>
			<div className="tooltip">
				AQUI
				<p className="some">blockHeight: {blockInfo.blockHeight}</p>
			</div>
		</>
	)
}

export default ABdebug
