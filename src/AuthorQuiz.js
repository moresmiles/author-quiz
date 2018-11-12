import React from 'react';
import Hero from './Hero';
import Turn from './Turn';
import './AuthorQuiz.css';
import './bootstrap.min.css'

const AuthorQuiz = ({turnData}) => {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn {...turnData}/>
     </div>
    );
  }


export default AuthorQuiz;
