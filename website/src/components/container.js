import React from "react"
import { Link } from "gatsby"

const style = {
  margin: "1rem auto",
  maxWidth: "600px",
  padding: "1rem",
  boxShadow: "0px 0px 3px 3px rgba(73,191,157,0.5)",
}

const Container = ({ children }) => (
  <div style={style}>
    <Link to="/" className="icon solid fa-long-arrow-alt-left">
      &nbsp; Go Back
    </Link>
    <hr />
    {children}
  </div>
)

export default Container
