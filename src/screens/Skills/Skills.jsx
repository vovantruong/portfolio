import React from 'react'
import classNames from 'classnames/bind'
import styles from './Skills.module.scss'
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa'

const cx = classNames.bind(styles)

const Skills = () => {
	return (
		<div className={cx('skills')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className="section-heading">
						<p className="heading-meta">
							<FaLightbulb /> MY SPECIALTY
						</p>
						<h2 className="title-meta">MY SKILLS</h2>
					</div>
					<div className={cx('section-content')}>
						<FaRegLightbulb />
						<p></p>
					</div>
					<div className={cx('section-skills')}>
						<div className={cx('skill-item')}>
							<div className={cx('progress')}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Skills
