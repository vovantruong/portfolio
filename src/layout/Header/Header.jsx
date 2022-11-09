import React, { useContext, useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import { useScrollSection } from 'react-scroll-section'
import { MediaQueryContext } from '~/context/MediaQueryContext'
import { IoIosMenu } from 'react-icons/io'
import Sidebar from '../Sidebar/Sidebar'
import { HiHome } from 'react-icons/hi'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { ImProfile,ImBlog } from 'react-icons/im'
import { FaUserFriends } from 'react-icons/fa'

const cx = classNames.bind(styles)

const dataItem = [
	{
		id: 'home',
		name: 'Home',
		icon: <HiHome />
	},
	{
		id: 'portfolio',
		name: 'Portfolio',
		icon: <AiOutlineFundProjectionScreen />
	},
	{
		id: 'about',
		name: 'About',
		icon: <FaUserFriends />
	},
	{
		id: 'resume',
		name: 'Resume',
		icon: <ImProfile />
	},
	{
		id: 'blog',
		name: 'Blog',
		icon: <ImBlog />
	},
	{
		id: 'contact',
		name: 'Contact',
		icon: <BsTelephoneFill />
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
			<ul className={cx('nav-menu')}>
				{dataItem.map((item, id) => (
					<NavItem key={id} id={item.id} className={cx('nav-menu__item')}>
						<div className={cx('wrap-item')}>
							<span className={cx('nav-title')}>{item.name}</span>
						</div>
					</NavItem>
				))}
			</ul>
		)
	}

	return (
		<header className={cx('header')}>
			<div className={cx('wrap-head', { 'sticky-header': scroll && !breakpoint.mobile })}>
				<div className="container">
					<nav className={cx('navbar')}>
						{!breakpoint.mobile && renderNavbar()}
						{breakpoint.mobile && (
							<React.Fragment>
								<button className={cx('toggle-sidebar')} onClick={() => setVisible(true)}>
									<IoIosMenu />
								</button>
							</React.Fragment>
						)}
					</nav>
				</div>
			</div>
			<Sidebar dataNavbar={dataItem} visible={visible} onClose={() => setVisible(false)} />
		</header>
	)
}
export default Header
