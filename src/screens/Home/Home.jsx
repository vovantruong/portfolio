import React from 'react'
import classNames from 'classnames/bind'
import styles from './Home.module.scss'

const cx = classNames.bind(styles)

const Home = () => {
  return(
    <div className={cx('home')}>
        <h1>Hello world</h1>
    </div>
  )
}
export default Home