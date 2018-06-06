import React, {Component} from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListShelfs extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const {books, onShelfChange} = this.props
    let booksWantToRead = books.filter((book) => book.shelf ==='wantToRead')
    let booksCurrentlyReading = books.filter((book) => book.shelf ==='currentlyReading')
    let booksRead = books.filter((book) => book.shelf ==='read')

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          <BookShelf title="Want to Read" books={booksWantToRead} onShelfChange={onShelfChange}/>
          <BookShelf title="Currently Reading" books={booksCurrentlyReading} onShelfChange={onShelfChange} />
          <BookShelf title="Read" books={booksRead} onShelfChange={onShelfChange}/>
          </div>
        </div>

      </div>
    )
  }
}

export default ListShelfs
