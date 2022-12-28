import React from 'react'
import classNames from 'classnames/bind'
import styles from './AboutMe.module.scss'
import { FaUserFriends } from 'react-icons/fa'

const cx = classNames.bind(styles)

const AboutMe = () => {
	return (
		<div className={cx('about-area')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className="section-heading">
						<p className="heading-meta">
							<FaUserFriends /> about us
						</p>
						<h2 className="title-meta">Who Am I?</h2>
					</div>
					<div className={cx('content')}>
						<span>Hi I'm Van Truong, </span>you can also call me Gavin. I am a web developer, and I am very
						passionate and dedicated to my work. With 1 year of experience as a fresh graduate programmer
						and many practical projects, I hope I can develop long-term and pursue my passion to become a
						seasoned programmer. And can create value for yourself.
					</div>
				</div>
			</div>
		</div>
	)
}
export default AboutMe
