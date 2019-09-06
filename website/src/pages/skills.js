import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "../components/container"
import "devicon/devicon.min.css"

const Skill = ({ icon, name }) => (
  <div className="align-center">
    <i className={`${icon} colored`}></i>
    <p className="font-weight-bold text-dark">{name}</p>
  </div>
)

const Gatsby = () => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)
  return data.allImageSharp.edges
    .filter(
      ({ node }) =>
        node.fluid.originalName === "gatsby-icon.png" ||
        node.fluid.originalName === "strapi-icon.png"
    )
    .map((image, index) => {
      const name = image.node.fluid.originalName.split("-")[0],
        capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)

      return (
        <div key={index} className="align-center">
          <Img className="skill-icon" fluid={image.node.fluid} />
          <p className="font-weight-bold text-dark">{capitalizedName}</p>
        </div>
      )
    })
}

const Skills = () => (
  <Container>
    <h1>Skills</h1>
    <h2>Basics</h2>
    <div className="row">
      <Skill icon="devicon-html5-plain" name="Html 5" />
      <Skill icon="devicon-css3-plain" name="CSS 3" />
      <Skill icon="devicon-javascript-plain" name="ES 6" />
    </div>
    <hr />
    <h2>MERN Stack</h2>
    <div className="row">
      <Skill icon="devicon-mongodb-plain" name="MONGO DB" />
      <Skill icon="devicon-express-original" name="EXPRESS JS" />
      <Skill icon="devicon-react-original" name="REACT JS" />
      <Skill icon="devicon-nodejs-plain" name="NODE JS" />
    </div>
    <hr />
    <h2>JamSTACK</h2>
    <div className="row">
      <Gatsby />
    </div>
    <hr />
    <h1>Tools</h1>
    <div className="row">
      <Skill icon="devicon-webpack-plain" name="WEBPACK" />
      <Skill icon="devicon-git-plain" name="GIT" />
      <Skill icon="devicon-github-plain" name="GITHUB" />
      <Skill icon="devicon-travis-plain" name="TRAVIS" />
      <Skill icon="devicon-mocha-plain" name="Mocha" />
      <Skill icon="devicon-jasmine-plain" name="Jasmine" />
      <Skill icon="devicon-ubuntu-plain" name="Ubuntu" />
      <Skill icon="devicon-visualstudio-plain" name="VS Code" />
    </div>
  </Container>
)

export default Skills
