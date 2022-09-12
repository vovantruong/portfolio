import React from 'react'
import classNames from 'classnames/bind'
import styles from './Project.module.scss'

const cx = classNames.bind(styles)

const Project = () => {
  return(
    <div className={cx('project')}>
        Projects
    </div>
  )
}
export default Project