import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import "../styles/main.css"
import Header from "../components/header"
import CopyRight from "../components/copyRight"
import Contact from "../components/contact"
import SEO from "../components/seo"
import { capitalizeLetter } from "../lib/helpers"

const Intro = props => (
  <Fragment>
    <header className="major">
      <h2>Hi,</h2>
    </header>
    <ReactMarkdown {...props} />
    <ul className="actions">
      <li>
        <Link to="/skills" className="button">
          Skills & Tools
        </Link>
      </li>
    </ul>
  </Fragment>
)

const RecentWorks = ({ title, projects }) => (
  <Fragment>
    <h2>{capitalizeLetter(`${title} works`)}</h2>
    <div className="row">
      {projects.map(project => (
        <article
          className="col-6 col-12-xsmall work-item"
          key={project.node.id}
        >
          <Link to={`/${project.node.id}`} className="image fit thumb">
            <Img
              className="image-overlay"
              imgStyle={{
                backgroundColor: "red",
              }}
              fluid={project.node.image.childImageSharp.fluid}
            />
          </Link>
          <h3>{project.node.title}</h3>
        </article>
      ))}
    </div>
  </Fragment>
)

const IndexPage = ({ data }) => (
  <Fragment>
    <SEO
      title="Home"
      meta={[
        {
          name: "keywords",
          content:
            "web developer portfolio, web developer full stack, web developer freelance website, contact form, fullstack developer",
        },
      ]}
    />
    <Header />
    <div id="main">
      <section id="one">
        <Intro source={data.strapiPage.content} />
      </section>

      <section id="two">
        <RecentWorks
          title="freelance"
          projects={data.freelanceProjects.edges}
        />
      </section>

      <section id="three">
        <RecentWorks title="demo" projects={data.demoProjects.edges} />
      </section>

      <section id="four">
        <Contact />
      </section>

      <CopyRight />
    </div>
  </Fragment>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    freelanceProjects: allStrapiProject(
      sort: { order: DESC, fields: createdAt }
      filter: { type: { eq: "freelance" } }
    ) {
      edges {
        node {
          id
          title
          content
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          createdAt
        }
      }
    }
    demoProjects: allStrapiProject(
      sort: { order: DESC, fields: createdAt }
      filter: { type: { eq: "demo" } }
    ) {
      edges {
        node {
          id
          title
          content
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    strapiPage(title: { eq: "home" }) {
      id
      content
      title
    }
  }
`
