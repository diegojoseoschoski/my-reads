import React from 'react'
import ListShelfs from './components/ListShelfs'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'

class BooksApp extends React.Component {

  constructor(props) {
    super(props);
    this.handleSearchBooks = this.handleSearchBooks.bind(this)
  }

  state = {
    showSearchPage: false,
    books: [],
    searchBooksList: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }


  handleSearchBooks(query) {
    BooksAPI.search(query).then((searchBooksList) => {
        if (query.length > 0) {
          if (searchBooksList.error) {
            this.setState({ searchBooksList: [] })
          } else {
            let bookFound
            searchBooksList.forEach((bookSearch) => {
              bookFound = this.state.books.find((book)=> book.id === bookSearch.id)
              if (bookFound) {
                bookSearch.shelf = bookFound.shelf;
              } else {
                bookSearch.shelf ='None'
              }
            })
            this.setState({searchBooksList})
          }

        } else {
            this.setState({ searchBooksList: []})
        }
    })
  }

  onShelfChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <ListShelfs books={this.state.books} onShelfChange={this.onShelfChange}/>
            <div className="open-search">
              <Link to="/search"> Add a book </Link>
            </div>
          </div>
				)} />

        <Route path='/search' render={() => (
          <div>
            <SearchBooks books={this.state.searchBooksList} onSearchBooks={this.handleSearchBooks}/>
          </div>
				)} />
      </div>
    )
  }
}

export default BooksApp
