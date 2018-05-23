import React from 'react'
import ListShelfs from './components/ListShelfs'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'
import {Route, Link} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <ListShelfs books={this.state.books}/>
            <div className="open-search">
              <Link to="/search"> Add a book </Link>
            </div>
          </div>
				)} />

        <Route path='/search' render={() => (
          <div>
            <SearchBooks books={this.state.books}/>
          </div>
				)} />
      </div>
    )
  }
}

export default BooksApp
