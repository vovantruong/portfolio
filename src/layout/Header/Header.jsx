import React from 'react'
import classNames from 'classnames/bind'
import styles from './Header.module.sass'

const cx = classNames.bind(styles)

const Header = () => {
  return(
    <header className={cx('header')}>
        Header
    </header>
  )
}
export default Header