import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import LogoImage from "./logoImage"
import logo from "../images/logo.png"
import styled from "styled-components"
import {
  IoIosMenu,
  IoIosClose,
  IoIosArrowDown,
  IoIosArrowUp,
} from "react-icons/io"
const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: 0;
  left: 0;
  z-index: 999;
  a {
    width: 124px;
    height: auto;
  }
`

const MenuToggle = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  transition: opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s;
  background-color: rgba(0, 0, 0, 0.08);
  opacity: ${props => (props.isOpen ? 1 : 0)};
  pointer-events: ${props => (props.isOpen ? "all" : "none")};

  .inner {
    width: 300px;
    height: 100%;
    position: fixed;
    overflow-y: auto;
    top: 0;
    left: 0;
    box-shadow: 4px 0px 8px rgba(38, 42, 51, 0.15);
    background-color: #fff;
    padding: 16px;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s,
      opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    transform: ${props =>
      props.isOpen ? "translateX(0)" : "translateX(-240px)"};

    header {
      img {
        width: 120px;
      }

      svg {
        position: absolute;
        top: 16px;
        right: 16px;
        cursor: pointer;
      }
    }

    ul {
      list-style: none;
      margin-left: 0;

      li {
        margin-bottom: 24px;
        cursor: pointer;

        a {
          text-decoration: none;
          color: #000;

          &:hover,
          &:active {
            color: blue;
          }
        }

        &.parent {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        &.sub {
          padding-left: 16px;
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => {
  const [isMenuOpen, toggleMenu] = useState(false)
  const [isSubMenuOpen, toggleSubMenu] = useState(false)

  return (
    <HeaderWrapper>
      <Link to="/">
        <LogoImage />
      </Link>
      <MenuToggle onClick={() => toggleMenu(true)}>
        <IoIosMenu color="#fff" size="24px" />
      </MenuToggle>

      <Menu isOpen={isMenuOpen} onClick={() => toggleMenu(false)}>
        <div className="inner" onClick={e => e.stopPropagation()}>
          <header>
            <img alt="logo" src={logo}></img>
            <IoIosClose size="24px" onClick={() => toggleMenu(false)} />
          </header>

          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li
              className="parent"
              onClick={() => toggleSubMenu(!isSubMenuOpen)}
            >
              Thẩm mỹ không phẩu thuật{" "}
              {isSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </li>
            {isSubMenuOpen && (
              <>
                <li className="sub">
                  <Link to="/tiem-filler-moi-la-gi">
                    - Tiêm Filler môi là gì ?
                  </Link>
                </li>
                <li className="sub">
                  <Link to="/uu-diem-tiem-moi-filler">
                    - Ưu điểm khi thực hiện tạo hình môi bằng Filler
                  </Link>
                </li>
                <li className="sub">
                  <Link to="/nhung-ai-co-the-tiem-filler-moi">
                    - Những ai có thể thực hiện tiêm Filler môi
                  </Link>
                </li>
                <li className="sub">
                  <Link to="/quy-trinh-thuc-hien">- Quy trình thực hiện</Link>
                </li>
                <li className="sub">
                  <Link to="/hinh-anh-khach-hang">
                    - Hình ảnh thực tế khách hàng
                  </Link>
                </li>
                <li className="sub">
                  <Link to="/cham-soc-sau-khi-tiem">
                    - Chăm sóc sau khi tiêm Filler
                  </Link>
                </li>
                <li className="sub">
                  <Link to="/vi-sao-nen-chon-lyn-spa">
                    - Vì sao nên chọn tiêm Filler môi tại LYN Spa?
                  </Link>
                </li>
              </>
            )}
            <li>Làm hồng vĩnh viễn</li>
            {/* <li>Các dịch vụ khác</li> */}
            <li>
              <Link to="/lien-he">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </Menu>
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
