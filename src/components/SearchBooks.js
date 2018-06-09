import React, {Component} from 'react'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import sortBy from 'sort-by';

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onSearchBooks: PropTypes.func.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
      this.setState({ query: query})
      if (query.length > 0) {
        this.props.onSearchBooks(query)
      }
  }

  render() {
    const { books, onShelfChange} = this.props
    const { query} = this.state

    let showingBooks
    if(query) {
      showingBooks =  books
    } else {
      showingBooks = []
    }
     showingBooks.sort(sortBy('title'));


    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
                autoFocus
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ListBooks books={showingBooks} onShelfChange={onShelfChange} />
        </div>
      </div>
    )
  }

}
export default SearchBooks
