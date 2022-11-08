import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { useScrollSection } from 'react-scroll-section'
import { MediaQueryContext } from '~/context/MediaQueryContext'
import { IoIosMenu } from 'react-icons/io'
import Sidebar from '../Sidebar/Sidebar'

const cx = classNames.bind(styles)

const dataItem = [
	{
		id: 'home',
		name: 'Home',
	},
	{
		id: 'portfolio',
		name: 'Portfolio',
	},
	{
		id: 'about',
		name: 'About',
	},
	{
		id: 'resume',
		name: 'Resume',
	},
	{
		id: 'blog',
		name: 'Blog',
	},
	{
		id: 'contact',
		name: 'Contact',
	},
]

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

const Header = () => {
	const [scroll, setScroll] = useState(false)
	const [visible, setVisible] = useState(false)
	const breakpoint = useContext(MediaQueryContext)

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 125) {
				setScroll(true)
			} else {
				setScroll(false)
			}
		})
	}, [])

	function renderNavbar() {
		return (
			<nav className={cx('navbar')}>
				<ul className={cx('nav-menu')}>
					{dataItem.map((item, id) => (
						<NavItem key={id} id={item.id} className={cx('nav-menu__item')}>
							<div className={cx('wrap-item')}>
								<span className={cx('nav-title')}>{item.name}</span>
							</div>
						</NavItem>
					))}
				</ul>
			</nav>
		)
	}

	return (
		<header className={cx('header')}>
			<div className={cx('wrap-head', { 'sticky-header': scroll && !breakpoint.mobile })}>
				<div className="container">
					{!breakpoint.mobile && renderNavbar()}
					{breakpoint.mobile && (
						<React.Fragment>
							{/* <div className={cx('nav-mb')}>
								<div className={cx('wrap-img__mb')}>
									<img src={require('../../assets/image/avt-gavin.png')} alt=''/>
								</div>
								<h2 className={cx('nav-mb__title')}>GAVIN</h2>
							</div> */}
							<button className={cx('toggle-sidebar')} onClick={() => setVisible(true)}>
								<IoIosMenu />
							</button>
						</React.Fragment>
					)}
				</div>
			</div>
			<Sidebar dataNavbar={dataItem} visible={visible} onClose={() => setVisible(false)} />
		</header>
	)
}
export default Header
