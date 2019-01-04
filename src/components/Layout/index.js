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
        />
        <Navigation />
        <Container>{children}</Container>
        <Footer />
      </>
    )
  }
}

export default Template
