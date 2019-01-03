import React from 'react'
import { Link } from 'gatsby'
import styles from './style/general.module.scss'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </nav>
)
