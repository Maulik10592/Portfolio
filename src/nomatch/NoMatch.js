import React from 'react';
import './NoMatch.css';

function NoMatch() {
  return (
    <div className='Outerbox'>
      <div className='Page404'>
        <div className="noise"></div>
        <div className="overlay"></div>
        <div className="terminal">
          <h1>Error <span className="errorcode">404</span></h1>
          <p className="output">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
          <p className="output">Please try to <a href="/">return the homepage</a>.</p>
          <p className="output">Good luck.</p>
        </div>
      </div>
    </div>
  );
}
  
export default NoMatch;