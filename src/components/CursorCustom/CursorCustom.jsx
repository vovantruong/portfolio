import React, { useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './CursorCustom.module.scss'
import AnimatedCursor from 'react-animated-cursor'

const cx = classNames.bind(styles)

const CursorCustom = () => {
	return (
		<AnimatedCursor
			innerSize={12}
			outerSize={50}
			outerAlpha={0}
			innerScale={1}
			outerScale={1.4}
			hasBlendMode={true}
			innerStyle={{
				backgroundColor: 'rgba(112, 112, 112, 0.5)',
			}}
			outerStyle={{
				border: '1px solid rgba(112, 112, 112, 0.5)',
			}}
			clickables={[
				'a',
				'input[type="text"]',
				'input[type="email"]',
				'input[type="number"]',
				'input[type="submit"]',
				'input[type="image"]',
				'label[for]',
				'select',
				'textarea',
				'button',
				'.link',
			]}
		/>
	)
}
export default CursorCustom
