import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import ArticlePreview from '../components/Article'
import styled from 'styled-components'

const BlogList = props => {
  const { title, description } = props.data.site.siteMetadata
  const posts = props.data.allContentfulBlogPost.nodes

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/' : '/archive/' + (currentPage - 1).toString()
  const nextPage = '/archive/' + (currentPage + 1).toString()

  return (
    <Layout location={props.location}>
      <div>
        <Helmet title={`${title} - ${description}`} />
        <div className="wrapper">
          <ul className="article-list">
            {posts.map(node => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
          <Pagination>
            {!isFirst && (
              <Link to={prevPage} rel="prev">
                ← Previous Page
              </Link>
            )}
            {!isLast && (
              <Link to={nextPage} rel="next">
                Next Page →
              </Link>
            )}
          </Pagination>
        </div>
      </div>
    </Layout>
  )
}

const Pagination = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

export default BlogList

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
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
`
