import React, {Component} from 'react'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }
  render() {
    const {title, books} = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ListBooks books={books} />
        </div>
      </div>
    )
  }
}
export default BookShelf