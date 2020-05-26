import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import cn from "classnames"
import { FaBars, FaTimes } from "react-icons/fa"

import HeaderHomeLink from "./HeaderHomeLink"
import HeaderNavLink from "./HeaderNavLink"
import DropdownLink from "./DropdownLink"

const Container = styled.div`
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 6rem;
    background: transparent;
    padding: 0 2rem;

    .header-nav-container {
      display: flex;
      align-items: center;
      margin: 0 -0.5rem;

      .header-nav-link {
        @media screen and (max-width: 1000px) {
          display: none;
        }
      }

      .collapsible-menu-button {
        position: relative;
        display: none;
        height: 2rem;
        width: 2rem;

        .icon {
          position: absolute;
          top: 0;
          left: 0;
          height: 2rem;
          width: 2rem;
          color: white;
          opacity: 0;
          transform: scale(0);
          transition: opacity 0.2s ease, transform 0.2s ease;

          &.visible {
            transform: scale(1);
            opacity: 1;
          }
        }

        @media screen and (max-width: 1000px) {
          display: block;
        }
      }
    }
  }

  .dropdown-container {
    position: absolute;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s linear;

    @media screen and (min-width: 1001px) {
      display: none;
    }

    &.open {
      max-height: 100%;
    }
  }
`

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <Container>
      <header className="header-container">
        <HeaderHomeLink />
        <div className="header-nav-container">
          <HeaderNavLink to="/projects/">Projects</HeaderNavLink>
          <HeaderNavLink to="/about-spectroscopy/">
            About Spectroscopy
          </HeaderNavLink>
          <HeaderNavLink to="/members/">Members</HeaderNavLink>
          <HeaderNavLink to="/contact/">Contact</HeaderNavLink>
          <button
            className="collapsible-menu-button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <FaTimes className={cn("icon", { visible: dropdownOpen })} />
            <FaBars className={cn("icon", { visible: !dropdownOpen })} />
          </button>
        </div>
      </header>
      <div className={cn("dropdown-container", { open: dropdownOpen })}>
        <DropdownLink to="/projects/">Projects</DropdownLink>
        <DropdownLink to="/about-spectroscopy/">
          About Spectroscopy
        </DropdownLink>
        <DropdownLink to="/members/">Members</DropdownLink>
        <DropdownLink to="/contact/">Contact</DropdownLink>
      </div>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
