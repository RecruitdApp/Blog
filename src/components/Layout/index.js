import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import base from '../../assets/styles/base.scss'
import Container from '../Container'
import Footer from '../Footer'
import Navigation from '../Navigation'

import favicon from '../../../static/favicon.ico'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
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
          <meta
            property="og:site_name"
            content="Recruitd Resources | Helping you navigate employment"
          />
          <meta property="og:url" content="https://blog.recruitd.com" />
          <meta
            property="og:title"
            content="Recruitd Resources | Helping you navigate employment"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Whether securing your next job, hiring into to your organisation, or recruiting for a client, Recruitd is the easiest place to do it."
          />
          <meta
            property="og:image"
            content="https://s3.eu-west-2.amazonaws.com/alpha-recruitd/recruitd-banner.jpg"
          />
          <meta
            property="og:image:alt"
            content="Recruitd Resources | Helping you navigate employment"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:creator" content="recruitdapp" />
          <meta
            name="twitter:title"
            content="Recruitd Resources | Helping you navigate employment"
          />
          <meta
            name="twitter:description"
            content="Whether securing your next job, hiring into to your organisation, or recruiting for a client, Recruitd is the easiest place to do it."
          />
          <meta
            name="twitter:image"
            content="https://s3.eu-west-2.amazonaws.com/alpha-recruitd/recruitd-banner.jpg"
          />
        </Helmet>

        <Navigation />
        <Container>{children}</Container>
        <Footer />
      </>
    )
  }
}

export default Template
