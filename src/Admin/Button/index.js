import React from 'react';

import './css.css';

export default function Button(props) {

  return (
    <div className="content-button no-selec" onClick={props.onClick}>
      {props.text}
    </div>
  );

}