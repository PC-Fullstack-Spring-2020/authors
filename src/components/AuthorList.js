import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAuthors } from "../actions/authors"

export default props => {
  const [authors, setAuthors] = useState([])

  useEffect(() => {
    getAuthors().then(data => setAuthors(data))
  }, [])

  return (
    <div>
      <h1>Author List</h1>
      <ul>
        {authors.map(author => (
          <li key={"author" + author.id}>
            <Link to={"/author/" + author.id}>{author.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
