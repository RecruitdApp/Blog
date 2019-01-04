import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './style/general.module.scss'

export default ({ article }) => (
  <article className={styles.article}>
    <Link to={`/${article.slug}`}>
      <h3 className={styles.articleTitle}>{article.title}</h3>
      <p
        className={styles.articleExcerpt}
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </Link>

    <div className={styles.articleAuthor}>
      <Img
        className={styles.articleAvatar}
        alt={article.author.name}
        fluid={article.author.image.fluid}
        style={{
          position: 'relative',
          overflow: 'hidden',
          display: 'inlineBlock',
          width: '30px',
          height: '30px',
        }}
      />
      {article.author.name} <span>{article.publishDate}</span>
    </div>
    <Link to={`/${article.slug}`} className={styles.articleLink} />
  </article>
)
