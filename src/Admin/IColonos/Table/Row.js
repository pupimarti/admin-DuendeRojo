import React from 'react';

export default function Row(props) {

  function setColono(){
    props.handleSetColono(props.id);
  }
  return (
        <tr onClick={setColono}>
          <td>{props.id}</td>
          <td>{props.apellido}, {props.nombre}</td>
          <td>${props.pagado}</td>
          <td>{props.socio}</td>
        </tr>
  );
}

