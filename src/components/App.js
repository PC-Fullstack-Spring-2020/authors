import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import AuthorList from "./AuthorList"
import AuthorView from "./AuthorView"

export default props => {
  return (
    <Router>
      <div className="wrapper">
        <Route path="/" exact component={AuthorList} />
        <Route path="/author/:id" component={AuthorView} />
      </div>
    </Router>
  )
}
