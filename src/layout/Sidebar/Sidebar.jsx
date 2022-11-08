import React from 'react'
import classNames from 'classnames/bind'
import styles from './Sidebar.module.scss'
import Drawer from '@mui/material/Drawer'
import { useScrollSection } from 'react-scroll-section'
import { IoClose } from 'react-icons/io5'
import ChangeColor from '~/components/ChangeColor/ChangeColor'

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
								<span className={cx('nav-title')}>{item.name}</span>
							</div>
						</NavItem>
					))}
				</ul>
				<hr className={cx('space')} />
				<div className={cx('wrap-change__color')}>
					<h4 className={cx('wrap-sidebar__title')}>Change themes</h4>
                    <ChangeColor />
				</div>
			</div>
		</Drawer>
	)
}
export default Sidebar
