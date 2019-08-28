// import PropTypes from "prop-types"
import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../Header/Logo'

import { device } from '../../config/device'

import iconFacebook from '../../images/icon-facebook.svg'
import iconLinkedin from '../../images/icon-linkedin.svg'
import iconTwitter from '../../images/icon-twitter.svg'
import iconInstagram from '../../images/icon-instagram.svg'

const FooterContainer = styled.footer`
  padding: 30px 0;

  @media ${device.tablet} {
    padding: 80px 0 150px;
  }
`

const FooterWrapper = styled.div`
  display: grid;
  grid-row-gap: 30px;
  grid-template-rows: repeat(2);

  @media ${device.mobileL} {
    text-align: center;
  }

  @media ${device.tablet} {
    grid-column-gap: 30px;
    grid-template-columns: 1fr 2fr;
  }
`

const FooterLogo = styled.div`
  /* margin-bottom: 30px; */
`

const FooterMenus = styled.div`
  display: grid;
  grid-row-gap: 30px;
  grid-template-rows: repeat(3);

  @media ${device.tablet} {
    grid-column-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  }
`

const FooterMenu = styled.div`
  ul {
    list-style: none;

    li {
      color: #74767b;
      font-size: 15px;
      line-height: 30px;
    }
  }
`

const FooterMenuHeader = styled.span`
  display: block;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 25px;
  margin-bottom: 10px;
  text-transform: uppercase;
`

const FooterNote = styled.div`
  background: #f5f5f5;
  padding: 30px 0;

  @media ${device.mobileL} {
    text-align: center;
  }

  @media ${device.tablet} {
    padding: 0;
  }
`

const FooterNoteWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    align-items: center;
    flex-direction: row;
    height: 80px;
    justify-content: space-between;
  }

  ul {
    list-style: none;
    margin-bottom: 30px;

    @media ${device.tablet} {
      display: flex;
      margin-bottom: 0;
    }

    li {
      color: #74767b;
      font-size: 15px;
      font-weight: 500;

      &:not(:last-child) {
        margin-bottom: 10px;

        @media ${device.tablet} {
          margin: 0;
          margin-right: 30px;
        }
      }
    }
  }
`

const SocialIcons = styled.ul`
  display: flex;
  justify-content: space-around;
`

const Footer = () => {
  const productLinks = [
    { title: 'Social Source', link: '/products/social-source' },
    { title: 'Leo', link: '/products/leo' },
  ]

  const companyLinks = [
    { title: 'About', link: '/about' },
    { title: 'Case Studies', link: '/case-studies' },
  ]

  const salesLinks = [
    { title: '+1 (201) 831 9975' },
    { title: '27 Corsham St' },
    { title: 'Hoxton, London N1 6DR' },
  ]

  const privacyLinks = [
    { title: 'Privacy', link: 'https://app.recruitd.com/privacy' },
    { title: 'Terms', link: 'https://app.recruitd.com/terms' },
    { title: 'Contact Us', link: 'mailto:sales@recruitd.com' },
  ]

  const socialLinks = [
    {
      title: 'Twitter',
      link: 'https://www.twitter.com/recruitdapp',
      image: iconTwitter,
    },
    {
      title: 'Facebook',
      link: 'https://www.facebook.com/recruitdapp',
      image: iconFacebook,
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/recruitdapp',
      image: iconInstagram,
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/company/recruitd',
      image: iconLinkedin,
    },
  ]

  return (
    <>
      <FooterContainer>
        <FooterWrapper className="outer-wrapper">
          <FooterLogo>
            <Link to="/">
              <Logo />
            </Link>
          </FooterLogo>
          <FooterMenus>
            <FooterMenu>
              <FooterMenuHeader>Products</FooterMenuHeader>
              <ul>
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`https://www.recruitd.com${link.link}`}
                      title={link.title}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </FooterMenu>
            <FooterMenu>
              <FooterMenuHeader>Company</FooterMenuHeader>
              <ul>
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={`https://www.recruitd.com${link.link}`}
                      title={link.title}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
                <li>
                  <Link to="/" title="Blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="https://jobs.recruitd.com/recruitd"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Careers"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </FooterMenu>
            <FooterMenu>
              <FooterMenuHeader>Contact Sales</FooterMenuHeader>
              <ul>
                {salesLinks.map((link, index) => (
                  <li key={index}>{link.title}</li>
                ))}
                <li>
                  <a href="mailto:sales@recruitd.com" title="Email Us">
                    sales@recruitd.com
                  </a>
                </li>
              </ul>
            </FooterMenu>
          </FooterMenus>
        </FooterWrapper>
      </FooterContainer>
      <FooterNote>
        <FooterNoteWrapper className="outer-wrapper">
          <div>
            <ul>
              {privacyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.title}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SocialIcons>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    title={link.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.image ? (
                      <img src={link.image} alt={link.title} />
                    ) : (
                      link.title
                    )}
                  </a>
                </li>
              ))}
            </SocialIcons>
          </div>
        </FooterNoteWrapper>
      </FooterNote>
    </>
  )
}

export default Footer
