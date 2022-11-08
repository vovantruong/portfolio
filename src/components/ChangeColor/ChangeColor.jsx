import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ChangeColor.module.scss'
import { useDispatch } from 'react-redux'
import ThemeAction from '../../services/ThemeAction'
import { BsCheckLg } from 'react-icons/bs'

const cx = classNames.bind(styles)
const color_settings = [
	{
		id: 'red',
		name: 'Red',
		background: 'red-color',
		color: '#ff014f',
		class: 'theme-color-red',
	},
	{
		id: 'organe',
		name: 'Organe',
		background: 'organe-color',
		color: '#fa5b0f',
		class: 'theme-color-organe',
	},
	{
		id: 'green',
		name: 'Green',
		background: 'green-color',
		color: '#37b182',
		class: 'theme-color-green',
	},
	{
		id: 'blue',
		name: 'Blue',
		background: 'blue-color',
		color: '#1854b4',
		class: 'theme-color-blue',
	},
	{
		id: 'pink',
		name: 'Pink',
		background: 'pink-color',
		color: '#f021b2',
		class: 'theme-color-pink',
	},
]

const ChangeColor = () => {
	const [currentColor, setCurrentColor] = useState(localStorage.getItem('colorMode') ?? 'theme-color-red')

	const dispatch = useDispatch()

	const handleSetColor = (color) => {
		setCurrentColor(color.class)
		localStorage.setItem('colorMode', color.class)
		dispatch(ThemeAction.setColor(color.class))
	}

	return (
		<div className={cx('change-color')}>
			{color_settings.map((color, i) => (
				<button
					aria-label="Hello"
					key={i}
					onClick={() => handleSetColor(color)}
					className={cx({ active: color.class === currentColor })}
					style={{ background: color.color }}
				>
					{currentColor === color.class && <BsCheckLg />}
				</button>
			))}
		</div>
	)
}
export default ChangeColor
