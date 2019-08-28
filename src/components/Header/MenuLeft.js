import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { device } from '../../config/device'

const Links = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }

  a,
  button {
    color: #74767b;
    font-size: 15px;
    font-weight: 500;
    position: relative;

    &:not(:last-child) {
      margin-right: 40px;
    }

    &:hover {
      color: inherit;
      text-decoration: none;
    }

    svg {
      margin-left: 9px;
      position: relative;
      top: 0;
    }
  }
`

const DropdownLink = styled.button`
  cursor: inherit;

  span {
    cursor: pointer;
  }
`

const ProductMenu = styled.div`
  background: #004a6d;
  border-radius: 4px;
  box-shadow: 0 5px 20px -5px rgba(50, 50, 93, 0.25);
  color: #ffffff;
  display: none;
  flex-direction: column;
  left: 0;
  min-width: 500px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  text-align: left;
  top: 35px;
  z-index: 2;

  a {
    color: #ffffff;
    line-height: 25px;
    margin: 0 !important;
    padding: 15px 30px;

    &:first-child {
      padding-top: 25px;
    }

    &:last-child {
      padding-bottom: 25px;
    }

    h3 {
      color: #ffffff;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.15);

      h3 {
        color: #ffffff;
      }
    }

    h3 {
      font-size: 22px;
    }

    p {
      font-size: 15px;
      font-weight: 400;
      opacity: 0.75;
    }
  }

  &.active {
    display: flex;
    opacity: 1;
    z-index: 0;
  }
`

const MenuLeft = ({ menu, toggleOff, toggleOn }) => {
  return (
    <Links>
      <DropdownLink onMouseEnter={toggleOn}>
        <span>
          Products
          <svg
            width="11"
            height="5"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
          >
            <path
              d="M1 0l4.5 4.5L10 0"
              stroke="#74767B"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </span>
        <ProductMenu
          className={menu && 'active'}
          onMouseEnter={toggleOn}
          onMouseLeave={toggleOff}
        >
          <a
            href="https://www.recruitd.com/products/social-source"
            title="Social Source"
          >
            <h3>Social Source</h3>
            <p>
              Fill your talent pipeline with a monthly supply of relevant and
              hire-ready candidates.
            </p>
          </a>
          <a href="https://www.recruitd.com/products/leo" title="Leo">
            <h3>Leo</h3>
            <p>
              Automate tasks, delight candidates and continuously improve
              recruitment performance.
            </p>
          </a>
        </ProductMenu>
      </DropdownLink>
      <a href="https://www.recruitd.com/case-studies" title="Case Studies">
        Case Studies
      </a>
      <a href="https://www.recruitd.com/about" title="About">
        About
      </a>
      <Link to="/" title="Resources">
        Resources
      </Link>
    </Links>
  )
}

export default MenuLeft
