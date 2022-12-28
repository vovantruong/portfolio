import React from 'react'
import classNames from 'classnames/bind'
import styles from './Experience.module.scss'
import { GiSoapExperiment } from 'react-icons/gi'

const cx = classNames.bind(styles)

const Experience = () => {
	return (
		<div className={cx('experience-area')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className="section-heading">
						<p className="heading-meta">
							<GiSoapExperiment /> experience
						</p>
						<h2 className="title-meta">Learning experience</h2>
					</div>
					<div className={cx('timeline')}></div>
				</div>
			</div>
		</div>
	)
}
export default Experience
