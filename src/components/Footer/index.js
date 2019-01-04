import React from 'react'
import { Link } from 'gatsby'
import styles from './style/general.module.scss'

export default () => (
  <footer className={styles.footer}>
    <div className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumn}>
          <svg xmlns="http://www.w3.org/2000/svg" width="150" height="45">
            <g fill="#00CBA7" fillRule="nonzero">
              <path d="M12.974 20.93c0-1.335-1.068-2.412-2.386-2.412-2.157 0-4.194.64-5.904 1.818a2.395 2.395 0 0 0-2.32-1.818c-1.296 0-2.342 1.089-2.342 2.413v21.6c0 1.358 1.056 2.458 2.342 2.458 1.34 0 2.385-1.077 2.385-2.458v-12.59c0-3.736 2.506-6.553 5.828-6.553 1.351 0 2.397-1.077 2.397-2.457zM25.087 18.518c-3.442 0-6.536 1.403-8.736 3.961-2.08 2.446-3.236 5.734-3.236 9.269 0 7.552 5.24 13.24 12.19 13.24 4.281 0 8.028-2.154 10.294-5.924.676-1.167.305-2.682-.817-3.378-1.122-.695-2.527-.37-3.257.764l-.033.044c-1.296 2.267-3.55 3.58-6.187 3.58-3.42 0-6.23-2.357-7.146-5.857h16.34c1.318 0 2.386-1.1 2.386-2.458 0-7.675-4.968-13.24-11.798-13.24zm-6.95 10.772c.86-3.568 3.54-5.902 6.95-5.902 3.399 0 5.948 2.278 6.754 5.902H18.137zM50.97 23.388c2.472 0 4.531 1.1 5.969 3.198.763 1.111 2.255 1.38 3.279.617 1.111-.763 1.383-2.266.61-3.456-2.233-3.321-5.828-5.229-9.859-5.229-6.95 0-12.189 5.69-12.189 13.241C38.78 39.311 44.02 45 50.97 45c4.02 0 7.614-1.93 9.858-5.274.37-.527.512-1.212.403-1.851-.12-.651-.468-1.201-.98-1.549a2.338 2.338 0 0 0-1.798-.415 2.331 2.331 0 0 0-1.514 1.01c-1.416 2.064-3.475 3.153-5.97 3.153-4.248 0-7.45-3.58-7.45-8.315-.011-4.769 3.202-8.37 7.45-8.37zM73.802 18.518c-2.157 0-4.194.64-5.904 1.818a2.395 2.395 0 0 0-2.32-1.818c-1.297 0-2.343 1.089-2.343 2.413v21.6c0 1.358 1.057 2.458 2.342 2.458 1.34 0 2.386-1.077 2.386-2.458v-12.59c0-3.736 2.505-6.553 5.828-6.553 1.34 0 2.385-1.077 2.385-2.457a2.38 2.38 0 0 0-2.374-2.413zM96.754 18.518c-1.318 0-2.386 1.089-2.386 2.413v12.59c0 3.67-2.636 6.553-6.002 6.553-3.3 0-5.61-2.693-5.61-6.553V20.93c0-1.336-1.068-2.413-2.386-2.413s-2.385 1.089-2.385 2.413v12.59c0 3.052.991 5.902 2.8 8.012C82.711 43.766 85.402 45 88.376 45c2.211 0 4.292-.673 6.057-1.941C94.662 44.18 95.61 45 96.776 45c1.34 0 2.385-1.077 2.385-2.457V20.93c-.022-1.336-1.09-2.413-2.407-2.413zM105.054 18.518c-1.296 0-2.385 1.111-2.385 2.413v21.6c0 1.358 1.067 2.458 2.385 2.458 1.34 0 2.386-1.077 2.386-2.458v-21.6a2.39 2.39 0 0 0-2.386-2.413zM124.26 39.131a2.21 2.21 0 0 0-1.722-.594c-.62.045-1.187.336-1.623.819l-.044.056a1.745 1.745 0 0 1-1.383.662 1.925 1.925 0 0 1-1.917-1.93V23.388h3.987c1.34 0 2.385-1.077 2.385-2.457 0-1.336-1.067-2.413-2.385-2.413h-3.987v-3.602c0-1.38-1.046-2.457-2.386-2.457-1.318 0-2.385 1.1-2.385 2.457v3.602h-.295c-1.296 0-2.342 1.089-2.342 2.413 0 1.357 1.057 2.457 2.342 2.457h.295v14.745c0 3.781 3.006 6.856 6.699 6.856 1.939 0 3.78-.875 5.076-2.424a2.626 2.626 0 0 0 .534-1.773 2.37 2.37 0 0 0-.85-1.66zM147.658 11c-1.34 0-2.386 1.077-2.386 2.457v7.63c-2.08-1.682-4.662-2.58-7.45-2.58-6.972 0-12.234 5.689-12.234 13.24 0 7.553 5.262 13.242 12.233 13.242 2.8 0 5.382-.91 7.451-2.604v.146c0 1.38 1.046 2.458 2.386 2.458 1.296 0 2.342-1.1 2.342-2.458V13.47c0-1.37-1.057-2.469-2.342-2.469zm-2.397 20.748c0 4.735-3.202 8.315-7.45 8.315-4.249 0-7.452-3.58-7.452-8.315 0-4.77 3.203-8.36 7.451-8.36 4.249 0 7.451 3.602 7.451 8.36z" />
              <g transform="translate(53.642)">
                <ellipse cx="37.55" cy="3.979" rx="4.172" ry="3.949" />
                <ellipse cx="29.216" cy="3.979" rx="1.387" ry="1.313" />
                <ellipse cx="20.872" cy="3.979" rx="4.172" ry="3.949" />
                <ellipse cx="12.527" cy="3.979" rx="1.387" ry="1.313" />
                <ellipse cx="4.183" cy="3.979" rx="4.172" ry="3.949" />
              </g>
            </g>
          </svg>
          <p className={styles.footerCopyright}>
            Copyright © 2019 Recruitd Limited
          </p>
        </div>
        <div className={styles.footerColumn}>
          <ul className={styles.footerList}>
            <li>
              <a
                href="https://www.recruitd.com/professionals"
                className={styles.footerLink}
                title="For Professionals"
              >
                For Professionals
              </a>
            </li>
            <li>
              <a
                href="https://www.recruitd.com/agencies"
                className={styles.footerLink}
                title="For Agencies"
              >
                For Agencies
              </a>
            </li>
            <li>
              <a
                href="https://www.recruitd.com/employers "
                className={styles.footerLink}
                title="For Employers"
              >
                For Employers
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <ul className={styles.footerList}>
            <li>
              <a
                href="https://www.recruitd.com/search#professionals"
                className={styles.footerLink}
                title="Search Professionals"
              >
                Search Professionals
              </a>
            </li>
            <li>
              <a
                href="https://www.recruitd.com/search#agencies"
                className={styles.footerLink}
                title="Search Agencies"
              >
                Search Agencies
              </a>
            </li>
            <li>
              <a
                href="https://www.recruitd.com/search#employers"
                className={styles.footerLink}
                title=""
              >
                Search Employers
              </a>
            </li>
            <li>
              <a
                href="https://www.recruitd.com/jobs"
                className={styles.footerLink}
                title="Search Jobs"
              >
                Search Jobs
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerColumn}>
          <ul className={styles.footerList}>
            <li>
              <a href="/" className={styles.footerLink} title="Blog">
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://www.recruitd.com/privacy"
                className={styles.footerLink}
                title="Privacy"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="https://www.recruitd.com/terms"
                className={styles.footerLink}
                title="Terms of Business"
              >
                Terms of Business
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
)
