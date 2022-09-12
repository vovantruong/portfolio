import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import classNames from 'classnames/bind'
import styles from './TiltAnimated.module.scss'

const cx = classNames.bind(styles)
const TiltAnimated = ({ options, className, children, ...props }) => {
	const tilt = useRef(null)

	useEffect(() => {
		VanillaTilt.init(tilt.current, options)
	}, [options])

	return (
		<div ref={tilt} {...props} className={cx(className)}>
			{children}
		</div>
	)
}

export default TiltAnimated
