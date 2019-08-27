import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ResponsiveMenu from 'react-responsive-navbar';
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWordpressSimple } from "react-icons/fa";
import './header.css';

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1175,
        padding: `5px 5px 0.5px 5px`
      }}
      className="header-container"
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className="header-title"
        >
          {siteTitle}
        </Link>
        <span className="icon">
          <a href="https://ontarioquizbowl.wordpress.com/">
            <FaWordpressSimple color="white" size="20"/>
          </a>
        </span>
        <span className="icon">
          <a href="https://twitter.com/ontarioquizbowl">
            <FaTwitterSquare color="white" size="20"/>
          </a>
        </span>
        <span className="icon">
          <a href="https://www.facebook.com/ONQBA/">
            <FaFacebookSquare color="white" size="20"/>
          </a>
        </span>
      </h1>
      <ResponsiveMenu
        menuOpenButton={<MdMenu size={32} color="white"></MdMenu>}
        menuCloseButton={<MdClose size={32} color="white"></MdClose>}
        changeMenuOn="500px"
        largeMenuClassName="large-menu-classname"
        smallMenuClassName="small-menu-classname"
        menu={
          <ul>
            <li style={{ paddingLeft: "0px"}} className="nav-link"><Link to="/" style={{ textDecoration: 'none', color: "inherit" }}>Home</Link></li>
            <li className="nav-link"><Link to="/about" style={{ textDecoration: 'none', color: "inherit" }}>About</Link></li>
            <li className="nav-link"><Link to="/events" style={{ textDecoration: 'none', color: "inherit" }}>Events</Link></li>
            <li className="nav-link"><Link to="/contact" style={{ textDecoration: 'none', color: "inherit" }}>Contact</Link></li>
          </ul>
        }
      />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
