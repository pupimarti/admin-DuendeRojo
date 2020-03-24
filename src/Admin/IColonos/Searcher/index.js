import React from 'react';

import './css.css'

export default function Searcher(props) {
  return (
      <input 
      className="content-searcher"
      type="text" 
      name="search" 
      placeholder="Busca.."
      onChange={props.handleInputChange} 
      value={props.search.search} 
      autoComplete="off"
      spellCheck="false"
      />
  );
}

