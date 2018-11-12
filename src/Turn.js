import React from 'react';
import Book from './Book';

const Turn = ({author, books, highlight}) => {
  const highlightColor = (highlight) => {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight]
  }
  
  return (
    <div className="row turn" style={{backgroundColor: highlightColor(highlight)}}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorImage" alt="Author"/>
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} />)}
      </div>
    </div>
  )
}

export default Turn;
