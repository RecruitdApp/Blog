import React from 'react'
import styled from 'styled-components'

import { device } from '../../config/device'

const HeaderButtons = styled.div`
  height: 27px;
  @media ${device.mobileL} {
    display: none;
  }

  .button {
    background: #0a2444;
    border-radius: 4px;
    color: #ffffff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    padding: 10px 15px;
    text-align: center;
    transition: 0.15s ease-in-out background-color, 0.15s ease-in-out color;

    @media ${device.tablet} {
      font-size: 15px;
      padding: 14px 26px;
    }

    &:hover {
      background: darken($primaryblue, 10%);
      color: #ffffff;
      text-decoration: none;
    }

    &-transparent {
      background: transparent;
      color: #74767b;

      &:hover {
        background: transparent;
        color: inherit;
      }
    }
  }

  .button {
    padding: 9px 35px;

    &-transparent {
      padding: 9px 25px;
    }
  }
`

const MenuRight = ({ recruitdSession }) => (
  <HeaderButtons>
    {!recruitdSession ? (
      <>
        <a
          href="https://app.recruitd.com/signin"
          className="button button-transparent"
          title="Sign In"
        >
          Sign In
        </a>
        <a
          href="https://app.recruitd.com/trial"
          className="button"
          title="Free Trial"
        >
          Free Trial
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
  </HeaderButtons>
)

export default MenuRight
