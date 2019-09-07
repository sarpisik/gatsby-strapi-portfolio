import React, { Fragment } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Profile = props => (
  <span className="image avatar">
    <Img {...props} />
  </span>
)

const Text = () => (
  <h1>
    <strong>I am Sarp IŞIK</strong>,
    <br />
    Full Stack Web Developer.
  </h1>
)

const ContactIcon = ({ node }) => (
  <li key={node.name}>
    <a
      href={node.url}
      className={`icon ${node.name === "mail" ? "solid" : "brands"} fa-${
        node.name === "mail" ? "envelope" : node.name
      }`}
    >
      <span className="label">{node.name}</span>
    </a>
  </li>
)

const ContactIcons = ({ icons }) => (
  <ul className="icons">{icons.map(ContactIcon)}</ul>
)

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiProfile {
        photo {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      allStrapiLink {
        edges {
          node {
            name
            url
          }
        }
      }
    }
  `)

  return (
    <Fragment>
      <header id="header" className="background-dark">
        <div className="inner">
          <Profile
            fluid={data.strapiProfile.photo.childImageSharp.fluid}
            alt="sarp isik avatar"
          />
          <Text />
        </div>
        <footer id="footer" className="social-icons">
          <div className="inner">
            <ContactIcons icons={data.allStrapiLink.edges} />
          </div>
        </footer>
      </header>
    </Fragment>
  )
}

export default Header
