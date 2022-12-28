import React, { useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'
import UserImage from '../../assets/image/avt-gavin.png'
import ReactTypingEffect from 'react-typing-effect'
import { ImDownload3 } from 'react-icons/im'
import { FaRegPaperPlane } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const cx = classNames.bind(styles)

const Home = () => {
	const handleDownloadCv = () => {
		// using Java Script method to get PDF file
		fetch('../../assets/file/CV-VoVanTruong.pdf').then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob)
				// Setting various property values
				let alink = document.createElement('a')
				alink.href = fileURL
				alink.download = 'CV-VoVanTruong.pdf'
				alink.click()
			})
		})
	}

	const scrollMouseRef = useRef()

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 150) {
				scrollMouseRef.current.style.opacity = '0'
			} else {
				scrollMouseRef.current.style.opacity = '1'
			}
		})
	}, [])

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
									text={['Front End Developer.', 'Fresher Coder.', 'Web Programer.']}
									typingDelay={500}
								/>
							</span>
						</h4>
						<p className={cx('intro__desc')}>
							I am a new programmer, with my passion for general programming languages and Front-End web
							in particular, I chose it and pursued it to the end. This site was created to motivate me.
						</p>
						<div className={cx('intro__btn')}>
							<button className={cx('btn-home')}>
								Say Hello <FaRegPaperPlane />
							</button>
							<button className={cx('btn-home', 'download-cv')} onClick={handleDownloadCv}>
								Download CV <ImDownload3 />
							</button>
						</div>
					</div>
					<div className={cx('home__img')} data-aos="fade-left"></div>
				</div>
				<div ref={scrollMouseRef} className={cx('scroll-down')}>
					<div className={cx('wrapper')}>
						<div className={cx('mouse')}></div>
						<span>
							Scroll down <HiArrowDown />
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Home
