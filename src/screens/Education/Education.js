import React from 'react'
import classNames from 'classnames/bind'
import styles from './Education.module.scss'
import { MdOutlineCastForEducation } from 'react-icons/md'

const cx = classNames.bind(styles)

const Education = () => {
	return (
		<div className={cx('education')}>
			<div className="container">
				<div className={cx('wrapper')}>
					<div className="section-heading">
						<p className="heading-meta">
							<MdOutlineCastForEducation /> Education
						</p>
						<h2 className="title-meta">Education</h2>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Education
