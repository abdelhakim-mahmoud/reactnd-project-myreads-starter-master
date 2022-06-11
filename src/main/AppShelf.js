import React from 'react'

import Books from './Books';
const AppShelf = ({section, books , category, changeShelf}) => {
const bookCategory = books.filter((book) => book.shelf === category)
    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{section}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">       
            {bookCategory.map((books) => (
               <Books key={books.id} book={books} changeShelf={changeShelf}></Books>
            ))}
          </ol>
        </div>
      </div>
    )
}

export default AppShelf