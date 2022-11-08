import React from 'react'
import classNames from 'classnames/bind'
import styles from './Resume.module.scss'

const cx = classNames.bind(styles)

const Resume = () => {
  return(
    <div className={cx('resume')}>
        Resume
    </div>
  )
}
export default Resume