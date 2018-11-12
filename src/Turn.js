import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const Turn = ({author, books, highlight, onAnswerSelect}) => {
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
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelect}/>)}
      </div>
    </div>
  )
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
}

export default Turn;
