import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import base from '../../assets/styles/base.scss'
import Container from '../Container'
import Footer from '../Footer'
import Navigation from '../Navigation'

import favicon from '../../../static/favicon.ico'

class Layout extends React.Component {
  render() {
    const { location, children } = this.props

    const title = 'Recruitd Resources'
    const description = 'Helping you navigate employment'
    const shortBio =
      'Whether securing your next job, hiring into to your organisation, or recruiting for a client, Recruitd is the easiest place to do it.'
    const image =
      'https://s3.eu-west-2.amazonaws.com/alpha-recruitd/recruitd-banner.jpg'

    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <Helmet
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        >
          <meta property="og:site_name" content={`${title} - ${description}`} />
          <meta property="og:url" content="https://blog.recruitd.com" />
          <meta property="og:title" content={`${title} - ${description}`} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={shortBio} />
          <meta property="og:image" content={image} />
          <meta property="og:image:alt" content={`${title} - ${description}`} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="recruitdapp" />
          <meta name="twitter:title" content={`${title} - ${description}`} />
          <meta name="twitter:description" content={shortBio} />
          <meta name="twitter:image" content={image} />
        </Helmet>

        <Navigation />
        <Container>{children}</Container>
        <Footer />
      </>
    )
  }
}

export default Layout
