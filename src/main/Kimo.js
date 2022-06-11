import React from 'react'

import{
    Link
  } from "react-router-dom";
import AppShelf from './AppShelf';

const Kimo = ({books,changeShelf}) => {
    return(
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>           
           <AppShelf section='Currently reading' books={books} category="currentlyReading" changeShelf={changeShelf}></AppShelf>
           <AppShelf section='Wants to read' books={books} category="wantToRead" changeShelf={changeShelf}></AppShelf>
           <AppShelf section='Read' books={books} category="read" changeShelf={changeShelf}></AppShelf>         
          </div>
        </div>
        <div className="open-search">
        <Link to="/search" className="open-serch__but">Add a book</Link>        
        </div>
      </div>
    )
}

export default Kimo