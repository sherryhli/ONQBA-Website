import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Row, Col } from 'react-grid-system';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className="header-desktop"><Header siteTitle="Ontario Quizbowl Association" /></div>
      <div className="header-mobile"><Header siteTitle="ONQBA" /></div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1175,
          padding: `0px 0rem 0rem`,
          paddingTop: 0,
          zIndex: -1
        }}
      >
        <main>
          <Container>
            <Row>
              <Col md={9}>{children}</Col>
              <Col md={3}><TwitterTimelineEmbed
                sourceType="profile"
                screenName="ontarioquizbowl"
                options={{ height: 450 }}
              /></Col>
            </Row>
          </Container>
        </main>
        <footer>
          © Ontario Quiz Bowl Association, {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
