import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1 style={{ marginBlockStart: "0em", marginBlockEnd: "0em" }}>
        Announcements
        </h1>
      <h3>{data.allMarkdownRemark.totalCount} Posts</h3>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1 style={{marginBottom: '-0.5em'}}>
              {node.frontmatter.title}
            </h1>
           <p style={{fontWeight: 'bold'}}>{node.frontmatter.date}</p>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
          <hr style={{borderStyle: 'dashed', borderColor: '#C3C3C3'}}></hr>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt(pruneLength: 500)
          timeToRead
          html
        }
      }
    }
  }
`

export default IndexPage
