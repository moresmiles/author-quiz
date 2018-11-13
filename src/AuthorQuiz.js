import React from 'react';
import Hero from './Hero';
import Turn from './Turn';
import {Link} from 'react-router-dom';
import './AuthorQuiz.css';
import './bootstrap.min.css'

const AuthorQuiz = ({turnData, highlight, onAnswerSelect}) => {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData} highlight={highlight} onAnswerSelect={onAnswerSelect}/>
        <p> <Link to="/add"> Add an Author </Link> </p>
     </div>
    );
  }


export default AuthorQuiz;
