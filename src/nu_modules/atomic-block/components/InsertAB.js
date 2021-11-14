import React from 'react'

import ABmodal from './ABmodal'
import slugify from '../../../tools/slugify'

const InsertHTML = ({ type, params }) => {
	switch (type) {
		case 'form':
			if (
				params.form &&
				params.formID &&
				params.textButton &&
				params.heading &&
				params.buttonColor &&
				params.textButtonColor &&
				params.tksMsg
			) {
				const formIdSlug = slugify(params.formID)
				const visibleClassState = params.refState ? 'visible' : 'not-visible'

				return (
					<>
						<ABmodal
							handleRefState={params.handleRefState}
							wrapperRef={params.wrapperRef}
							visibleClassState={visibleClassState}
							modalBackgroundColor={params.modalBackgroundColor}
							heading={params.heading}
							modalText={params.modalText}
							formID={params.formID}
							formIdSlug={formIdSlug}
							form={params.form}
							buttonColor={params.buttonColor}
							textButtonColor={params.textButtonColor}
							textButton={params.textButton}
						/>
					</>
				)
			} else {
				return null
			}
		default:
			return null
	}
}

export default InsertHTML
