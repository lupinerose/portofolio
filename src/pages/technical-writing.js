import * as React from "react"
import { Link } from "gatsby"

const technicalWritingPage = () => {
  return (
    <main >
        <h1>Technical Writing</h1>
        <Link to="/">Go home</Link>
    </main>
  )
}

export default technicalWritingPage

export const Head = () => <title>Technical Writing</title>
