import axios from "axios"

export function getAuthors() {
  return new Promise((resolve, reject) => {
    axios
      .get("/authors")
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}

export function getAuthor(id) {
  return new Promise((resolve, reject) => {
    axios
      .get(`/authors/${id}?_embed=books`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject()
      })
  })
}
