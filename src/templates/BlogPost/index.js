import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'
import Share from '../../components/SocialShare'

import styles from './style/general.module.scss'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const { title, description } = get(this.props, 'data.site.siteMetadata')
    const shareSlug = post.slug
    const shareUrl = 'https://blog.recruitd.com/'
    const twitterHandle = '@recruitdapp'
    const shareTitle = post.title
    const socialImage = post.socialImage ? post.socialImage.fluid.src : null

    return (
      <div className={styles.articleContainer}>
        <Layout location={this.props.location}>
          <Helmet title={`${post.title} | ${title} - ${description}`}>
            <meta property="og:title" content={`${post.title} | ${title}`} />
            <meta
              property="og:description"
              content={post.description.description}
            />
            <meta name="twitter:title" content={`${post.title} | ${title}`} />
            <meta
              name="twitter:description"
              content={post.description.description}
            />
            {socialImage && (
              <meta property="og:image" content={`https:${socialImage}`} />
            )}
            {socialImage && (
              <meta name="twitter:image" content={`https:${socialImage}`} />
            )}
          </Helmet>
          <div className="wrapper">
            <div className={styles.article}>
              <div className={styles.articleHeader}>
                <h1>{post.title}</h1>
                <p>{post.publishDate}</p>
              </div>
              <div className={styles.articleAuthor}>
                <a href={post.author.recruitd} target="_blank">
                  <Img
                    className={styles.authorAvatar}
                    alt={post.author.name}
                    fixed={post.author.image.fixed}
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      width: '40px',
                      height: '40px',
                    }}
                  />
                </a>
                <div className={styles.authorDetails}>
                  <a
                    href={post.author.recruitd}
                    target="_blank"
                    className={styles.authorName}
                  >
                    {post.author.name}
                  </a>
                  <p className={styles.authorDescription}>
                    {post.author.shortBio.shortBio}
                  </p>
                </div>
                <div>
                  <a
                    href={post.author.recruitd}
                    target="_blank"
                    className={styles.authorButton}
                  >
                    Follow
                  </a>
                </div>
              </div>
              <Share
                socialConfig={{
                  twitterHandle,
                  config: {
                    url: `${shareUrl}${shareSlug}`,
                    title: shareTitle,
                  },
                }}
              />
              <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </Layout>
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description {
        description
      }
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      socialImage {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
      author {
        id
        name
        recruitd
        image {
          fixed(width: 40, height: 40, resizingBehavior: SCALE) {
            ...GatsbyContentfulFixed
          }
        }
        shortBio {
          shortBio
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
