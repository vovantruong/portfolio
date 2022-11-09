import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import Drawer from '@mui/material/Drawer'
import { useScrollSection } from 'react-scroll-section'
import { IoClose } from 'react-icons/io5'
import ChangeColor from '~/components/ChangeColor/ChangeColor'
import useDarkMode from '~/hooks/useDarkMode'
import { BsCheckLg } from 'react-icons/bs'
import { dataSocialMedia } from '~/mock/dataSocialMedia'

const cx = classNames.bind(styles)

export const NavItem = ({ id = '', className, children, style }) => {
	const nameSection = useScrollSection(id)
	return (
		<li
			onClick={nameSection.onClick}
			className={cx(className, { 'nav-active': nameSection.selected })}
			style={style}
		>
			{children}
		</li>
	)
}

const Sidebar = ({ visible, onClose, dataNavbar }) => {
	const [darkMode, setDarkMode] = useDarkMode()

	return (
		<Drawer anchor="right" open={visible} onClose={onClose} className={cx('sidebar-area')}>
			<div className={cx('wrap-side')}>
				<div className={cx('wrap-head')}>
					<div className={cx('wrap-head__logo')}>
						<img src={require('../../assets/image/avt-gavin.png')} alt="..." />
					</div>
					<h2 className={cx('wrap-head__title')}>Portfolio</h2>
					<button className={cx('close-btn')} onClick={onClose}>
						<IoClose />
					</button>
				</div>
				<hr className={cx('space')} />
				<ul className={cx('navbar-nav')}>
					{dataNavbar.map((item, id) => (
						<NavItem key={id} id={item.id} className={cx('nav-menu__item')}>
							<div className={cx('wrap-item')}>
								{item.icon}
								<span className={cx('nav-title')}>{item.name}</span>
							</div>
						</NavItem>
					))}
				</ul>
				<hr className={cx('space')} />
				<div className={cx('wrap-change__color')}>
					<h2 className={cx('wrap-sidebar__title')}>Choose mode</h2>
					<div className={cx('wrap-mode')}>
						{['light', 'dark'].map((item, i) => (
							<button
								key={i}
								className={cx('change-mode', item)}
								onClick={() => (item === 'dark' ? setDarkMode(true) : setDarkMode(false))}
							>
								{item === 'dark' && darkMode && <BsCheckLg className={cx('icon-check')} />}
								{item === 'light' && !darkMode && <BsCheckLg className={cx('icon-check')} />}
							</button>
						))}
					</div>
					<h2 className={cx('wrap-sidebar__title')}>Choose themes</h2>
					<ChangeColor classNames={cx('change-themes')} />
					<h2 className={cx('wrap-sidebar__title')}>Connect with us</h2>
					<div className={cx('wrap-social')}>
						{dataSocialMedia.map((item, i) => (
							<a
								className={cx('social-item', item.name)}
								key={i}
								href={item.link}
							>
								{item.icon}
							</a>
						))}
					</div>
				</div>
			</div>
		</Drawer>
	)
}
export default Sidebar
