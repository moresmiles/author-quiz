import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Route} from 'react-router-dom';
import AuthorQuiz from './AuthorQuiz';
import AddAuthorForm from './AddAuthorForm';
import {shuffle, sample} from 'underscore';

const authors =[
    {
    name: 'Mark Twain',
    imageUrl:'images/authors/marktwain.jpg',
    imageSource:'Wikimedia Commons',
    books: ['The Adventures of Huckleberry Finn']
    },
    {
    name: 'Joseph Conrad',
    imageUrl:'images/authors/josephconrad.jpeg',
    imageSource:'Wikimedia Commons',
    books: ['Heart of darkness']
    },
    {
    name: 'J K Rowling',
    imageUrl:'images/authors/jkrowling.jpeg',
    imageSource:'Wikimedia Commons',
    imageAttribution:'Daniel Ogren',
    books: ['Harry Porter and sorcerers stone']
    },
    {
    name: 'Stephen King',
    imageUrl:'images/authors/stephenking.jpeg',
    imageSource:'Wikimedia Commons',
    imageAttribution:'Pingiun',
    books: ['The shining', 'IT']
    },
    {
    name: 'Charlse Dickens',
    imageUrl:'images/authors/charlesdickens.jpeg',
    imageSource:'Wikimedia Commons',
    books: ['David Copperfield', 'A Tale of Two Cities']
    },
    {
    name: 'William Shakespear',
    imageUrl:'images/authors/williamshakespear.jpeg',
    imageSource:'Wikimedia Commons',
    books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
]

const getTurnData = (authors) => {
  const allBooks = authors.reduce((p,c,i) => {
    return p.concat(c.books)
  }, [])
  const fourRandomBooks = shuffle(allBooks).slice(0,4)
  const answer = sample(fourRandomBooks);
  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
      author.books.some((title) =>
      title === answer))
    }
}

const onAnswerSelect = (answer) => {
  const isCorrect = state.turnData.author.books.some((book) => book === answer)
  state.highlight = isCorrect? 'correct' : 'wrong';
  render();
}

  const state = {
    turnData: getTurnData(authors),
    highlight: ''
  };

const App = () => {
  return <AuthorQuiz {...state} onAnswerSelect={onAnswerSelect} />
}

const AuthorWrapper = withRouter(({history}) => {
  return <AddAuthorForm onAddAuthor={(author) => {
    authors.push(author);
    history.push('/');
  }} />
})

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <>
        <Route exact path="/" component={App} />
        <Route path="add" component={AddAuthorForm} />
        <Route path="/add" component={AuthorWrapper} />
      </>
  </BrowserRouter>,
    document.getElementById('root'));
}

render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
