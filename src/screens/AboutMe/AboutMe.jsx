import React, { useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './AboutMe.module.scss'
import { FaBirthdayCake, FaQuoteLeft, FaRegCalendarAlt, FaUserFriends, FaUserGraduate } from 'react-icons/fa'
import { GiModernCity } from 'react-icons/gi'

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
					<div className={cx('section-body')}>
						<div className={cx('box-item', 'about__img')}>
							<img src={require('../../assets/image/question-mark.jpg')} alt="..." />
						</div>
						<div className={cx('box-item', 'about__content')}>
							<div className={cx('about-desc')}>
								<p className={cx('desc-item')}>
									<strong>
										<FaQuoteLeft />
									</strong>
									<span>Hi I'm Van Truong, </span>you can also call me <span>Gavin</span>. I am a web
									developer, and I am very passionate and dedicated to my work. With 1 year of
									experience as a fresh graduate programmer and many practical projects, I hope I can
									develop long-term and pursue my passion to become a seasoned programmer. And can
									create value for yourself.
								</p>
								<p className={cx('desc-item')}>
									This is a website I just made to satisfy my curiosity with a UI design that is quite
									hot right now, Neumorphism.
								</p>
							</div>
							<div className={cx('person-infor')}>
								<p className={cx('infor-item')}>
									<div className={cx('icon')}>
										<FaRegCalendarAlt />
									</div>
									<span>Birthday:</span>
									July 10, 2001
								</p>
								<p className={cx('infor-item')}>
									<div className={cx('icon')}>
										<FaBirthdayCake />
									</div>
									<span>Age:</span>
									{new Date().getFullYear() - 2001}
								</p>
								<p className={cx('infor-item')}>
									<div className={cx('icon')}>
										<FaUserGraduate />
									</div>
									<span>Level:</span>
									Fresher Dev
								</p>
								<p className={cx('infor-item')}>
									<div className={cx('icon')}>
										<GiModernCity />
									</div>
									<span>City:</span>
									HCM, Viet Nam
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default AboutMe
