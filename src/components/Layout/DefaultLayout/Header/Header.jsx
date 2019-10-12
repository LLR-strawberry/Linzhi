import React, { Component } from 'react'
import { Tag } from 'antd'
import styles from './Header.scss'
// import classnames from 'classnames'

export default function Header() {
  return (
    <div className={styles.wrapper}>
      <Tag color="#f50">切换主题</Tag>
    </div>
  )
}
