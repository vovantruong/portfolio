import React from 'react'
import classNames from 'classnames/bind'
import styles from './Blog.module.scss'

const cx = classNames.bind(styles)

const Blog = () => {
  return(
    <div className={cx('blog')}>
        Updating...
    </div>
  )
}
export default Blog