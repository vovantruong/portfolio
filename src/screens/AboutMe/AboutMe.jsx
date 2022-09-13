import React from 'react'
import classNames from 'classnames/bind'
import styles from './AboutMe.module.scss'
import ChangeColor from '~/components/ChangeColor/ChangeColor'

const cx = classNames.bind(styles)

const AboutMe = () => {
  return(
    <div className={cx('about')}>
       about
       {/* <ChangeColor /> */}
    </div>
  )
}
export default AboutMe