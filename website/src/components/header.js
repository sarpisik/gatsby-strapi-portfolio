import React, { Fragment } from "react"

const Header = () => (
  <Fragment>
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar">
          <img src="images/avatar.jpg" alt="" />
        </a>
        <h1>
          <strong>I am Sarp IŞIK</strong>,
          <br />
          Full Stack Web Developer.
        </h1>
      </div>
      <footer id="footer" className="social-icons">
        <div className="inner">
          <ul className="icons">
            <li>
              <a href="#" className="icon brands fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/sarpisik"
                className="icon brands fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-dribbble">
                <span className="label">Dribbble</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon solid fa-envelope">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </header>
  </Fragment>
)

export default Header
