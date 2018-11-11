import React, { Component } from 'react';
import Hero from './Hero'
import './AuthorQuiz.css';
import './bootstrap.min.css'

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
     </div>
    );
  }
}

export default AuthorQuiz;
