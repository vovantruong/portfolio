import React from 'react'
import classNames from 'classnames/bind'
import styles from './Skills.module.scss'
import { FaLightbulb, FaRegLightbulb } from 'react-icons/fa'
import { dataSkills } from '~/mock/dataSkills'

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
					<div className={cx('section-content')}></div>
					<div className={cx('section-skills')}>
						{dataSkills.map((item, i) => (
							<div key={i} className={cx('wrap-item')}>
								<div className={cx('progress-wrap')}>
									<h3>{item.name}</h3>
									<div className={cx('progress')}>
										<div className={cx('progress-bar')} style={{ width: `${item.level}%` }}>
											<span>{item.level}%</span>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
export default Skills
