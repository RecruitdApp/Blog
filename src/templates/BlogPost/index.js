import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'

import Layout from '../../components/Layout'
import Share from '../../components/SocialShare'

import styles from './style/general.module.scss'

const document = {
  nodeType: 'document',
  content: [
    {
      nodeType: 'paragraph',
      content: [
        {
          nodeType: 'text',
          value: 'Hello',
          marks: [{ type: 'bold' }],
        },
        {
          nodeType: 'text',
          value: ' world!',
          marks: [{ type: 'italic' }],
        },
      ],
    },
  ],
  nodeType: 'embedded-entry-block',
  data: {
    target: (...)Link<'Entry'>(...);
  },
}

const Bold = ({ children }) => <strong>{children}</strong>
const Text = ({ children }) => <p>{children}</p>
const Comp = () => <h2>Test</h2>

class BlogPostTemplate extends React.Component {
  render() {
    const options = {
      renderMark: {
        [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      },
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      },
      renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: node => {
          return <Comp />
        },
      },
    }

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
                <div className={styles.authorDetails}>
                  <span className={styles.authorName}>{post.author.name}</span>
                  <p className={styles.authorDescription}>
                    {post.author.shortBio.shortBio}
                  </p>
                </div>
              </div>
              {/* <Share
                socialConfig={{
                  twitterHandle,
                  config: {
                    url: `${shareUrl}${shareSlug}`,
                    title: shareTitle,
                  },
                }}
              /> */}
              {console.log(post.postBody.json)}
              {/* {documentToReactComponents(post.postBody.json, options)} */}
              {documentToReactComponents(document, options)}

              {/* <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              /> */}
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
          fixed(width: 40, height: 40, resizingBehavior: SCALE, quality: 100) {
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
      postBody {
        json
      }
    }
  }
`
