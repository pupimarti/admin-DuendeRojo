import React from "react";

import Row from "./Row.js";
import RowHeader from "./RowHead.js";

import "./css.css";

export default function Table(props) {

  function filtroBusqueda(inscripto){
    if (
      inscripto.cNombre.indexOf(props.search.search) === -1 &&
      inscripto.cApellido.indexOf(props.search.search) === -1 &&
      inscripto.numero.indexOf(props.search.search) === -1
    ) 
      return false;
    return true;
  }

  function filtro(inscripto){
    if(filtroBusqueda(inscripto)){
      var bandera = true;
      var i = 0;
      while(i < props.search.filter.length){
        if(props.search.filter[i] === "SOCIOS" && inscripto.cNumSocio==="")
          bandera = false;
        if(props.search.filter[i] === "NOSOCIOS" && inscripto.cNumSocio!=="")
          bandera = false;
        if(props.search.filter[i] === "FALTAPAGO" && inscripto.pagado >= 5000)
          bandera = false;
        if(props.search.filter[i] === "PAGOCOMPLETO" && inscripto.pagado < 5000)
          bandera = false;
          i++;
      }
      return bandera;
    }
  return false;
  }
  const rows = [];
  if(props.data.length > 0){
    props.data.forEach(inscripto => {
      if (filtro(inscripto) === true){
      rows.push(
        <Row
          key={inscripto.numero}
          id={inscripto.numero}
          nombre={inscripto.cNombre}
          apellido={inscripto.cApellido}
          pagado={inscripto.pagado}
          socio={inscripto.cNumSocio===""?"NO":inscripto.cNumSocio}
          handleSetColono={props.handleSetColono}
        />
      );
    }});
  }

  return (
    <div className="scroll-table">
      <table id="table-excel" className="content-table">
        <RowHeader />
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
