import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { device } from '../../config/device'

import Logo from './Logo'
import MenuLeft from './MenuLeft'
import MenuRight from './MenuRight'
import MobileMenu from './MobileMenu'

const HeaderContainer = styled.header`
  /* border-bottom: 1px solid #eee; */
  position: relative;
  z-index: 5;

  @media ${device.mobileL} {
    padding: 0 5px;
  }
`

const HeaderWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 70px;
  justify-content: space-between;

  a {
    font-size: 15px;
  }
`

const HeaderLeft = styled.div`
  @media ${device.mobileL} {
    justify-content: space-between;
    width: 100%;
  }

  display: flex;

  h1 {
    height: 27px;
    font-size: 16px;
    line-height: 1;
    margin: 0;
    margin-right: 40px;
  }
`

const Header = () => {
  const [menu, setMenu] = useState(false)
  const toggleOn = () => setMenu(true)
  const toggleOff = () => setMenu(false)
  const [recruitdSession, setRecruitdSession] = useState(undefined)

  useEffect(() => {
    findCookies()
  }, [])

  const findCookies = () => {
    let cookiesArr = document.cookie.split(';')
    let cookiesObj = {}
    cookiesArr.map(cookieStr => {
      let arr = cookieStr.split('=')
      cookiesObj[arr[0].trim()] = arr[1]
      return null
    })
    if (cookiesObj.recruitdSession) {
      setRecruitdSession(cookiesObj.recruitdSession)
    }
    return null
  }

  return (
    <HeaderContainer>
      <HeaderWrapper onMouseLeave={toggleOff} className="outer-wrapper">
        <HeaderLeft>
          <h1>
            <a href="https://www.recruitd.com" title="Recruitd">
              <Logo />
            </a>
          </h1>
          <MenuLeft menu={menu} toggleOff={toggleOff} toggleOn={toggleOn} />
          <MobileMenu recruitdSession={recruitdSession} />
        </HeaderLeft>
        <MenuRight recruitdSession={recruitdSession} />
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header
