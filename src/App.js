import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Kimo from './main/Kimo';
import Search from './main/Search';
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
    search: "",
    booksFromSearch: [],
    loadSearch: false,
  }
componentDidMount(){
  BooksAPI.getAll().then((res) => {
    this.setState({
      books: res
    })
  })
}

changeShelf = async (book, shelf) => {
  await BooksAPI.update(book, shelf);
  await BooksAPI.getAll().then((res) => {
    this.setState({
      books: res,
    });
  });
  this.handleBooksSearch(this.state.search)
};

handleSearch = async (event) => {
  await this.setState({
    search: event.target.value,
  });
  this.handleBooksSearch(this.state.search);
};

handleBooksSearch = async (search) => {
  await BooksAPI.search(search).then((res) => {
    if (res && !res.error) {
      this.setState({
        booksFromSearch: res.map((booksSearch) => {
          this.state.books.forEach((book) => {
            if (booksSearch.id === book.id) booksSearch.shelf = book.shelf
          })
          return booksSearch;
        }),
        loadSearch: true
      });
    } else {
      this.setState({
        booksFromSearch: `No result found for: " ${this.state.search} "`,
        loadSearch: false
      })
    }
  });
};

  render() {
    return (
      <Router>
      <div className="app">
       <Routes>
       <Route path="/" element={<Kimo books={this.state.books} changeShelf={this.changeShelf}/>} ></Route>
       <Route path="/search" element={<Search handleSearch={this.handleSearch} search={this.state.search} booksFromSearch={this.state.booksFromSearch} changeShelf={this.changeShelf} loadSearch={this.state.loadSearch}/>}></Route>
       </Routes>
      </div>
      </Router>
    )
  }
}

export default BooksApp
