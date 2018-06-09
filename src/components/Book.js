import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  state = {
   shelf: ''
  }

  constructor(props) {
     super(props)
     this.state = { shelf: props.book.shelf }
   }

  static propTypes = {
   onShelfChange: PropTypes.func.isRequired,
     book: PropTypes.shape({
       title: PropTypes.string.isRequired,
       authors: PropTypes.array,
       imageLinks: PropTypes.object
     })
   }

  changeShelf = (event) => {
     const shelf = event.target.value
     let changedBook = this.props.book

     changedBook.shelf = shelf
     this.setState({ shelf })
     this.props.onShelfChange(changedBook)
   }

  render() {
    const {book} = this.props
    return (
      <div className="book">
        <div className="book-top">
          {book.imageLinks &&  book.imageLinks.thumbnail && book.imageLinks.thumbnail.length > 0? (
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          ) : (
              <p> No Cover </p>
          )}

          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={this.changeShelf} >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="None">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}
export default Book
