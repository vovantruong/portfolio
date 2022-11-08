import React, { useEffect } from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import UserImage from '../../assets/image/avt-gavin.png'
import TiltAnimated from '../../components/TiltAnimated/TiltAnimated'
import ReactTypingEffect from 'react-typing-effect'

const optionsTilt = {
	speed: 1500,
	max: 30,
	speed: 300,
	transition: true,
	perspective: 1000,
}

const cx = classNames.bind(styles)

const Home = () => {
	return (
		<div className={cx('home')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className={cx('intro')} data-aos="fade-right">
						<p className={cx('intro__welcome')}>WELCOME TO MY WORLD</p>
						<h4 className={cx('intro__title')}>
							<p className={cx('intro__title-hi')}>Hi, I'm&nbsp;</p>
							<p className={cx('intro__title-name')}>Truong</p>
							<br />
							<span className={cx('intro__title-caption')}>
								a&nbsp;
								<ReactTypingEffect
									speed={100}
									eraseSpeed={50}
									text={['Front End Developer.', 'Fresher Coder.','Web Programer.']}
									typingDelay={500}
								/>
							</span>
						</h4>
						<p className={cx('intro__desc')}>
							I am a new programmer, with my passion for general programming languages and Front-End web
							in particular, I chose it and pursued it to the end. This site was created to motivate me.
						</p>
					</div>
					<div className={cx('avatar')} data-aos="fade-left" >
						<TiltAnimated options={optionsTilt} className={cx('image-user')}>
							<div className={cx('box-img')}></div>
							<img src={UserImage} alt="..." />
						</TiltAnimated>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Home
