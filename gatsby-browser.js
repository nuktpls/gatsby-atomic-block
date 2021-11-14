import React from 'react'
import './src/scss/styles.scss'
import { GlobalProvider } from './src/nu_modules/layout/services/context'
export const wrapRootElement = ({ element }) => (
	<GlobalProvider>{element}</GlobalProvider>
)
