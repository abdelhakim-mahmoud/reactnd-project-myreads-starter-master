import React, { Component } from 'react'
import Books from './Books'

export default class ShelfSearch extends Component {
    render() {
        return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">Results</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                 {
                     this.props.loadSearch ? (
                         this.props.booksFromSearch.map((book)=>(<Books key={book.id}  book={book} changeShelf={this.props.changeShelf}/>))
                     )
                     : 
                     (
                         this.props.booksFromSearch
                     )
                 }
                </ol>
              </div>
            </div>  
    )
       
    }
}