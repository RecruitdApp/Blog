import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import ArticlePreview from '../components/Article'
import styled from 'styled-components'

class RootIndex extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata
    const posts = this.props.data.allContentfulBlogPost.edges

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={`${title} - ${description}`} />
          <div className="wrapper">
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
            <Pagination>
              <Link to="/archive/2" rel="next">
                Next Page →
              </Link>
            </Pagination>
          </div>
        </div>
      </Layout>
    )
  }
}

const Pagination = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

export default RootIndex

export const pageQuery = graphql`
  query RootIndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          author {
            id
            name
            image {
              fixed(
                width: 30
                height: 30
                resizingBehavior: SCALE
                quality: 100
              ) {
                ...GatsbyContentfulFixed
              }
            }
          }
          description {
            description
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
