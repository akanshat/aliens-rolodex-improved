import React from 'react';

import './search-box.styles.css';
//functional component, gets some props and returns some html
//easy to read and easy to test
//these dont have acces to lifecgycle methods
//because we dont always need to use lifecycle methods
export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      type='search'
      placeholder={placeholder}
      //onchange is in jsx not an actual HTML
      //we dont manually touch the dom
      //synthetic events in react- fake event example: onchange
      //we receive that event when dom changes
      onChange={handleChange}
      className='search'
    />
  )
}
