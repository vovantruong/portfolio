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
import { ImProfile, ImBlog } from 'react-icons/im'
import { FaUserFriends, FaLightbulb } from 'react-icons/fa'
import { MdOutlineCastForEducation } from 'react-icons/md'
import { GiSoapExperiment } from 'react-icons/gi'
import ToggleThemes from '~/components/ToggleThemes/ToggleThemes'
import OutsideClickHandler from 'react-outside-click-handler'
import { IoSettingsOutline } from 'react-icons/io5'
import ChangeColor from '~/components/ChangeColor/ChangeColor'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const dataItem = [
	{
		id: 'home',
		name: 'Home',
		icon: <HiHome />,
	},
	{
		id: 'about',
		name: 'About',
		icon: <FaUserFriends />,
	},
	// {
	// 	id: 'services',
	// 	name: 'Services',
	// 	icon: <AiOutlineFundProjectionScreen />,
	// },
	{
		id: 'skills',
		name: 'Skills',
		icon: <FaLightbulb />,
	},
	// {
	// 	id: 'education',
	// 	name: 'Education',
	// 	icon: <MdOutlineCastForEducation />,
	// },
	{
		id: 'experience',
		name: 'Experience',
		icon: <GiSoapExperiment />,
	},
	{
		id: 'contact',
		name: 'Contact',
		icon: <BsTelephoneFill />,
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
	const [visiblePopup, setVisiblePopup] = useState(false)
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

	function renderSettingColor() {
		return (
			<OutsideClickHandler onOutsideClick={() => setVisiblePopup(false)}>
				<div className={cx('wrap-setting')}>
					<button className={cx('toggle-setting')} onClick={() => setVisiblePopup(!visiblePopup)}>
						<IoSettingsOutline />
					</button>
					<div className={cx('wrap-popup', { 'show-wrap__popup': visiblePopup })}>
						<h3 className={cx('popup-title')}>Themes setting</h3>
						<ChangeColor />
					</div>
				</div>
			</OutsideClickHandler>
		)
	}

	return (
		<header className={cx('header')}>
			<div className={cx('wrap-head', { 'sticky-header': scroll })}>
				<div className="container">
					<nav className={cx('navbar')}>
						<Link to="/" className={cx('head__brand')}>GAVIN</Link>
						{!breakpoint.tablet && renderNavbar()}
						{!breakpoint.tablet && <ToggleThemes />}
						{!breakpoint.tablet && renderSettingColor()}
						{breakpoint.tablet && (
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
