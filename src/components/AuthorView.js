import React, { useEffect, useState } from "react"
import { getAuthor } from "../actions/authors"

export default props => {
  const [author, setAuthor] = useState({})
  const [books, setBooks] = useState([])

  useEffect(() => {
    getAuthor(props.match.params.id).then(author => {
      setAuthor(author)
      setBooks(author.books)
    })
  }, [props.match.params])

  return (
    <div>
      <h1>Author View</h1>
      <h3>{author.name}</h3>
      <ul>
        {books.map(book => (
          <li key={"book" + book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  )
}
