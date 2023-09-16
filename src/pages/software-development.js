import * as React from "react"
import { Link } from "gatsby"

const softwareDevelopmentPage = () => {
  return (
    <main >
        <h1>Software Development</h1>
        <Link to="/">Go home</Link>
    </main>
  )
}

export default softwareDevelopmentPage

export const Head = () => <title>Software Development</title>
