import React from 'react'
import AgentResolver from './src/nu_modules/atomic-block/containers'

const AtomicBlock = ({
	type,
	children,
	link,
	linkText,
	heading,
	paragraph,
	srcSet,
	sizes,
	src,
	alt,
	formID,
	form,
	backgroundColor,
	isCarousel,
	sliderClass,
	numColumns,
	alignTo,
	blockTitle,
	debug,
	fontColor,
	fontSize,
}) => {
	const content = {
		heading: heading,
		paragraph: paragraph,
		link: link,
		linkText: linkText,
		srcSet: srcSet,
		sizes: sizes,
		src: src,
		alt: alt,
		formID: formID,
		form: form,
		backgroundColor: backgroundColor,
		isCarousel: isCarousel,
		sliderClass: sliderClass,
		gridType: isCarousel ? 'carousel' : 'columns',
		numColumns: numColumns,
		alignTo: alignTo,
		blockTitle: blockTitle,
		debug: debug,
		fontSize: fontSize,
		fontColor: fontColor,
		// debugInfos: debugInfos,
	}
	return (
		<AgentResolver
			type={type}
			children={children}
			contents={content}
		/>
	)
}

export default AtomicBlock
