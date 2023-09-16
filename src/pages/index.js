import * as React from "react"
import bgRemy from "./../../public/images/remy.png"
import { Link } from "gatsby"

const heroStyles = {
  borderRadius: "50%",
  maxWidth: "500px",
  display: "block",
  marginTop: "5%",
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%"
}
const pageStyles = {
  color: "#232129",
  padding: 96,
  textAlign: "center",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  // maxWidth: 320,
}
// const headingAccentStyles = {
//   color: "#663399",
// }
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  // maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "About",
    url: "/about/",
    description:
      "A little bit about me and my professional interests.",
    color: "#0D96F2",
  },
  {
    text: "Technical Writing",
    url: "/technical-writing/",
    description:
      "Some of my work in technical writing and software documentation.",
    color: "#E95800",
  },
  {
    text: "Software Development",
    url: "/software-development",
    description:
      "Software development projects that I have worked on.",
    color: "#1099A8",
  },
  {
    text: "Art and Design",
    url: "/art-and-design/",
    description:
      "Digital art and design I make with Procreate, Figma, and Adobe Illustrator.",
    color: "#BC027F",
  }
]

const IndexPage = () => {
  return (
    <React.Fragment>
      <img alt="remy" src={bgRemy} style={heroStyles}></img>
      <main style={pageStyles} >
        <ul style={listStyles}>
          {links.map(link => (
            <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
              <span>
                <Link
                  style={linkStyle}
                  to={link.url}
                >
                  {link.text}
                </Link>
                {/* <p style={descriptionStyle}>{link.description}</p> */}
              </span>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  )
}

export default IndexPage

export const Head = () => <title>Remy's Portfolio</title>
