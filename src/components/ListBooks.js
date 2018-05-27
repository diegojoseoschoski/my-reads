import React, {Component} from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const {books, onShelfChange} = this.props
    return (
      <ol className="books-grid">
        {books.map((book) => (

          <li key={book.id}>
            <Book
             title={book.title}
             authors={book.authors}
             coverUrl={book.imageLinks}
             shelf={book.shelf}
             onShelfChange={onShelfChange}
            />
          </li>
        ))}
      </ol>
    )
  }
}
export default ListBooks
