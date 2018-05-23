import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }

  render() {
    const {books} = this.props
    return (
      <ol className="books-grid">
        {books.map((book) => (
          <li key={book.id}>
            <Book
             title={book.title}
             authors={book.authors}
             coverUrl={book.imageLinks}
             shelf={book.shelf}/>
          </li>
        ))}
      </ol>
    )
  }
}
export default ListBooks
