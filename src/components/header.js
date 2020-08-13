import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import LogoImage from "./logoImage"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  a {
    width: 124px;
    height: auto;
  }
`

const Header = ({ siteTitle }) => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoImage />
      </Link>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
