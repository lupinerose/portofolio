import * as React from "react"
import { Link } from "gatsby"

const aboutPage = () => {
  return (
    <main>
        <h1>About</h1>
        <Link to="/">Go home</Link>
    </main>
  )
}

export default aboutPage

export const Head = () => <title>About</title>
