import React from 'react'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

const DefaultLayout = ({ children }) => {
	return (
		<div className={cx('default-layout')}>
			{/* <Header />
			<ToggleThemes />
			<SocialMedia /> */}
			<div className={cx('wrapper')}>{children}</div>
			<div className="container">
				<div className={cx('footer')}>
					<p>
						Copyright © 2022. All rights owned by website developer <Link to="#">Gavin</Link>
					</p>
				</div>
			</div>
		</div>
	)
}
export default DefaultLayout
