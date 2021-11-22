import React from 'react';
import '../App.css';
import './Middle.css';


function Middle() {
  return (

<div className='middle-container'>
  <div className='img-fit'>
  <img className='img' src='/images/har-final.jpg' />
  </div>

  <div className='con'>
        <p className='body-big'>hello</p>
          <p className='body'> I'm Harleen, a senior at Boston University studying Computer Engineering.</p>
          <p className='body'> Some of my interests include cloud based computing, algorithms and app development, but technology is an ever-expanding
          field so I always find myself learning and enjoying new topics from time to time.  
          </p>
          <p className='body'> Thanks for stopping by - feel free to contact me. </p>
          
          </div>  
  </div>
  
  );
}

export default Middle;