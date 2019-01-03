import React from 'react'
import { Link } from 'gatsby'
import styles from './style/general.module.scss'

export default () => (
  <nav role="navigation" className={styles.navigation}>
    <div className={styles.brand}>
      <svg width="102" height="30" xmlns="http://www.w3.org/2000/svg">
        <g fill="#00CBA7" fill-rule="nonzero">
          <path d="M8.757 14.228c0-.875-.72-1.58-1.61-1.58-1.456 0-2.83.418-3.985 1.19a1.608 1.608 0 0 0-1.566-1.19c-.875 0-1.581.712-1.581 1.58v14.154c0 .89.713 1.61 1.58 1.61.905 0 1.61-.705 1.61-1.61v-8.25c0-2.448 1.692-4.294 3.935-4.294.911 0 1.617-.706 1.617-1.61zM16.934 12.647c-2.324 0-4.412.92-5.897 2.596C9.632 16.846 8.853 19 8.853 21.316c0 4.949 3.537 8.677 8.228 8.677 2.89 0 5.419-1.412 6.948-3.883a1.62 1.62 0 0 0-.551-2.213 1.61 1.61 0 0 0-2.199.5l-.022.03c-.875 1.485-2.397 2.345-4.176 2.345-2.309 0-4.206-1.544-4.824-3.838h11.03c.89 0 1.61-.72 1.61-1.61 0-5.03-3.353-8.677-7.963-8.677zm-4.691 7.059c.58-2.338 2.39-3.868 4.69-3.868 2.295 0 4.016 1.493 4.56 3.868h-9.25zM34.404 15.838c1.67 0 3.06.72 4.03 2.096.515.728 1.522.904 2.213.404.75-.5.934-1.485.412-2.264-1.508-2.177-3.934-3.427-6.655-3.427-4.69 0-8.228 3.728-8.228 8.677 0 4.948 3.537 8.676 8.228 8.676 2.714 0 5.14-1.265 6.655-3.456.25-.345.345-.794.272-1.213a1.543 1.543 0 0 0-.662-1.015 1.615 1.615 0 0 0-1.213-.272c-.427.081-.787.316-1.022.662-.956 1.353-2.346 2.066-4.03 2.066-2.867 0-5.029-2.346-5.029-5.448-.007-3.125 2.162-5.486 5.03-5.486zM49.816 12.647c-1.456 0-2.83.42-3.985 1.191a1.608 1.608 0 0 0-1.566-1.19c-.875 0-1.581.712-1.581 1.58v14.154c0 .89.713 1.61 1.58 1.61.905 0 1.611-.705 1.611-1.61v-8.25c0-2.448 1.691-4.294 3.934-4.294.904 0 1.61-.706 1.61-1.61.007-.875-.713-1.58-1.603-1.58zM65.309 12.647c-.89 0-1.61.713-1.61 1.58v8.25c0 2.405-1.78 4.295-4.052 4.295-2.228 0-3.787-1.765-3.787-4.294v-8.25c0-.875-.72-1.58-1.61-1.58-.89 0-1.61.712-1.61 1.58v8.25c0 2 .669 3.868 1.89 5.25C55.83 29.19 57.646 30 59.653 30a7.086 7.086 0 0 0 4.089-1.272A1.598 1.598 0 0 0 65.323 30c.905 0 1.61-.706 1.61-1.61V14.228a1.617 1.617 0 0 0-1.624-1.58zM70.912 12.647c-.875 0-1.61.728-1.61 1.58v14.155c0 .89.72 1.61 1.61 1.61.904 0 1.61-.705 1.61-1.61V14.228c.007-.875-.72-1.58-1.61-1.58zM83.875 26.154a1.519 1.519 0 0 0-1.162-.39c-.419.03-.801.221-1.095.537l-.03.037c-.22.272-.559.434-.934.434-.713 0-1.294-.566-1.294-1.265v-9.669h2.691c.905 0 1.61-.706 1.61-1.61 0-.875-.72-1.58-1.61-1.58h-2.69v-2.361c0-.905-.707-1.61-1.611-1.61-.89 0-1.61.72-1.61 1.61v2.36h-.199c-.875 0-1.58.713-1.58 1.58 0 .89.713 1.611 1.58 1.611h.199V25.5c0 2.478 2.03 4.493 4.522 4.493a4.517 4.517 0 0 0 3.426-1.589c.265-.338.39-.75.36-1.161a1.538 1.538 0 0 0-.573-1.089zM99.67 7.72c-.905 0-1.611.706-1.611 1.61v5c-1.405-1.102-3.147-1.69-5.03-1.69-4.705 0-8.257 3.728-8.257 8.676 0 4.949 3.552 8.677 8.257 8.677 1.89 0 3.633-.596 5.03-1.706v.095c0 .905.706 1.61 1.61 1.61.875 0 1.581-.72 1.581-1.61V9.338c0-.897-.713-1.617-1.58-1.617zM98.05 21.317c0 3.103-2.161 5.449-5.029 5.449s-5.03-2.346-5.03-5.449c0-3.125 2.162-5.478 5.03-5.478 2.868 0 5.03 2.36 5.03 5.478z" />
          <g transform="translate(36.47)">
            <circle cx="25.478" cy="2.853" r="2.831" />
            <circle cx="19.824" cy="2.853" r="1" />
            <circle cx="14.162" cy="2.853" r="2.831" />
            <circle cx="8.5" cy="2.853" r="1" />
            <circle cx="2.838" cy="2.853" r="2.831" />
          </g>
        </g>
      </svg>
    </div>
    <div className={styles.navigationRight}>
      <ul>
        <li className={styles.navigationItem}>
          <Link to="/">Professionals</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/">Agencies</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/">Employers</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/">Jobs</Link>
        </li>
      </ul>
      <ul>
        <li className={styles.navigationItem}>
          <Link to="/">Sign In</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/">Create Account</Link>
        </li>
      </ul>
    </div>
  </nav>
)
