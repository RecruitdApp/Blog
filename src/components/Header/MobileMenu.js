import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { device } from "../../config/device"

const MobileMenuOuter = styled.div`
  @media ${device.tablet} {
    display: none;
  }
`

const MobileMenuContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 5px 20px -5px rgba(50, 50, 93, 0.25);
  left: 20px;
  position: absolute;
  right: 20px;
  top: 60px;
  z-index: 1;
  /* width: 100%; */

  a {
    display: block;
    line-height: 25px;
    margin: 0 !important;
    padding: 15px 30px;

    &.small {
      font-weight: 500;
      padding-bottom: 5px;
      padding-top: 5px;
    }

    &:first-child {
      padding-top: 25px;
    }

    &:last-child {
      padding-bottom: 25px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }

    h3 {
      font-size: 22px;
      letter-spacing: 0px;
    }
  }
`

const Border = styled.div`
  background: #eee;
  height: 1px;
  margin: 10px 0;
  width: 100%;
`

const MobileMenu = ({ recruitdSession }) => {
  const [menu, setMenu] = useState(false)
  const toggle = () => setMenu(menu === false ? true : false)

  return (
    <MobileMenuOuter>
      <button onClick={toggle}>
        {!menu ? (
          <svg
            width="20"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
          >
            <g fill="#1F1F1F" fillRule="evenodd">
              <rect width="20" height="2" rx="1" />
              <rect y="5" width="20" height="2" rx="1" />
              <rect y="10" width="20" height="2" rx="1" />
            </g>
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xlinkHref="http://www.w3.org/1999/xlink"
          >
            <g fill="#1F1F1F" fillRule="evenodd">
              <rect
                transform="rotate(-45 8 8)"
                x="-2"
                y="7"
                width="20"
                height="2"
                rx="1"
              />
              <rect
                transform="rotate(45 8 8)"
                x="-2"
                y="7"
                width="20"
                height="2"
                rx="1"
              />
            </g>
          </svg>
        )}
      </button>
      {menu && (
        <MobileMenuContainer>
          <Link to="/products/social-source" title="Social Source">
            <h3>Social Source</h3>
          </Link>
          <Link to="/products/leo" title="Leo">
            <h3>Leo</h3>
          </Link>
          <Border />
          <Link to="/case-studies" title="Case Studies" className="small">
            Case Studies
          </Link>
          <Link to="/about" title="About" className="small">
            About
          </Link>
          <a
            href="https://blog.recruitd.com"
            title="Resources"
            className="small"
          >
            Resources
          </a>
          {!recruitdSession ? (
            <>
              <a
                href="https://app.recruitd.com/signin"
                title="Sign In"
                className="small"
              >
                Sign In
              </a>
              <a
                href="https://app.recruitd.com/signup"
                title="Sign Up"
                className="small"
              >
                Sign Up
              </a>
            </>
          ) : (
            <a
              href="https://app.recruitd.com/dashboard"
              className="button"
              title="redirect"
            >
              Go to dashboard
            </a>
          )}
        </MobileMenuContainer>
      )}
    </MobileMenuOuter>
  )
}

export default MobileMenu
