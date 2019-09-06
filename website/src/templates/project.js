import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Container from "../components/container"

const ProjectTemplate = ({ data }) => (
  <Container>
    <h1>{data.strapiProject.title}</h1>
    <Img fluid={data.strapiProject.image.childImageSharp.fluid} />
    <br />
    <ReactMarkdown
      className="indexArticle"
      source={data.strapiProject.content}
      transformImageUri={uri =>
        uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
      }
      escapeHtml={false}
    />
    <hr />
    <a
      href={data.strapiProject.demo_link}
      className="icon solid fa-broadcast-tower"
    >
      &nbsp; Demo
    </a>
    <br />
    <a
      href={data.strapiProject.github_link}
      className="icon brands fa-github-square"
    >
      &nbsp; Github
    </a>
  </Container>
)

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplate($id: String!) {
    strapiProject(id: { eq: $id }) {
      title
      content
      demo_link
      github_link
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
