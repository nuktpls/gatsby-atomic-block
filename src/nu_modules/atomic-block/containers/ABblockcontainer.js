import React,{ useEffect, useRef, useState } from 'react'

import ABmainwrappercontainer from './ABmainwrappercontainer'
import abinfo from '../../../tools/abinfo'

const ABblockContainer = ({ configs, params, subAgent, contents }) => {
	let wrapperRef = useRef(null)
	const [theWrapper, setWrapper] = useState(wrapperRef.current)
	function updateWrapper(wrapper) {
		setWrapper(wrapper)
	}
	useEffect(() => {
		document.addEventListener('onReady', (e) => {
			updateWrapper(abinfo(wrapperClass.split(' ')))
		})
	})

	const gridType = contents.isCarousel ? 'carousel' : 'columns'
	const elementClass = contents.sliderClass || null
	const gridClass = 'grid-' + gridType + '-item'
	const wrapperClass = 'grid-' + gridType + ' ' + elementClass
	const listClass =
		'grid-' +
		gridType +
		'-list ' +
		elementClass +
		'-list no-pdd-mrg-first-last-child'

	if (subAgent) {
		return (
			<ABmainwrappercontainer
				classWrapper={wrapperClass}
				theRef={wrapperRef}
				secondClass={listClass}
				gridClass={gridClass}
				contents={contents}
				params={params}
			>
				{subAgent}
			</ABmainwrappercontainer>
		)
	} else {
		return (
			<ABmainwrappercontainer
				classWrapper={wrapperClass}
				theRef={wrapperRef}
				secondClass={listClass}
				gridClass={gridClass}
				contents={contents}
				params={params}
			>
				<h2>zumba</h2>
			</ABmainwrappercontainer>
		)
	}

}

export default ABblockContainer
