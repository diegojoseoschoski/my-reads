import React, {Component} from 'react'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by'

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }
  updateQuery = (query) => {
      this.setState({ query: query})
  }

  render() {
    const { books} = this.props
    const { query} = this.state

    let showingBooks
    if(query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingBooks = books.filter((book) => match.test(book.title))
    } else {
      showingBooks = books
    }

    showingBooks.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ListBooks books={books}  />
        </div>
      </div>
    )
  }

}
export default SearchBooks
