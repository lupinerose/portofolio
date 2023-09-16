import * as React from "react"
import { Link } from "gatsby"

const artAndDesignPage = () => {
  return (
    <main >
        <h1>Art and Design</h1>
        <Link to="/">Go home</Link>
    </main>
  )
}

export default artAndDesignPage

export const Head = () => <title>Art and Design</title>
