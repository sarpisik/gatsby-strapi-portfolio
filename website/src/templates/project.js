import React, { Fragment } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import Container from "../components/container"
import SEO from "../components/seo"

const ProjectTemplate = ({ data }) => (
  <Fragment>
    <SEO
      title={data.strapiProject.title}
      meta={[
        {
          name: "keywords",
          content: `web developer portfolio project, web developer full stack project, web developer freelance project, portfolio project, fullstack developer project, ${data.strapiProject.title}`,
        },
      ]}
    />
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
    </Container>
  </Fragment>
)

export default ProjectTemplate

export const query = graphql`
  query ProjectTemplate($id: String!) {
    strapiProject(id: { eq: $id }) {
      title
      content
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
