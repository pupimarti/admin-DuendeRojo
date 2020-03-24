import React, { useState, useEffect } from "react";
import Table from "./Table";
import Searcher from "./Searcher";
import Button from "../Button";
import Select from "./MultipleSelect";
import StateBDD from "../StateBDD"; 
/* 
import ReactToExcel from 'react-html-table-to-excel'; */


import "./css.css";


import ApiController from '../../controller/ApiController';

function createData(item) 
{
  return { 
    numero: item.numero,
    cNombre: item.cNombre,
    cApellido: item.cApellido,
    cSocio: item.cSocio,
    cNumSocio: item.cNumSocio,
    pagado: item.pagado
  };
}

export default function Admin(props) {
  const [search, setSearch] = useState({search:'', filter:[]},);
  const [data, setData] = useState([]);
  const [estado, setEstado] = useState({estado: '', error:''});

  function handleSetEstado(estado, err){
    if(estado === 'error')
      setEstado({estado: estado, error:err});
    else
      setEstado({estado: estado});
  }

  const handleInputChangeFilter = event => {
    event.persist();
    var filter = [];
    for(var i = 0; i < event.target.length; i++){
     if(event.target[i].selected)
      filter.push(event.target[i].value);
    }
    setSearch({...search, [event.target.name]:filter});
  };

  const handleClearFilter = event => {
    event.persist();
    setSearch({...search, filter:[]});
  };

  const handleInputChange = event => {
    event.persist();
    setSearch({...search, [event.target.name]:event.target.value.toUpperCase()});
  };

  //transformo los datos recibidos de la BD al formato de la tabla
  function okBusqueda(newData)
  {
    var i,newArray = [];
    for (i = 0; i < newData.length; i++) {
      newArray.push(createData(newData[i]));
    }
    setData(newArray);
  }

  useEffect(() => {
      //Leo los contactos de la API BD
      cargarColonos()}, []);

  function cargarColonos(){
    setData({});
    ApiController.getColonos(okBusqueda, handleSetEstado);
  }

  if(estado.estado === 'cargando' || estado.estado === 'error')
    return <StateBDD estado={estado.estado} error={estado.error}/>
  else
  {
  return (
    <div className="content-admin">
      <div className="header">
        <Searcher 
        search={search} 
        handleInputChange={handleInputChange} />

        <Button text="Actualizar" onClick={cargarColonos}/>
      </div>
      <Table 
      search={search} 
      data={data} 
      handleSetColono={props.handleSetColono}
      />
      <div className="footer">
        <Select
        handleInputChange={handleInputChangeFilter} 
        search={search}/>
        <Button text="Limpiar Filtros" onClick={handleClearFilter}/>
{/*         <ReactToExcel
        table="table-excel" 
        filename="colonos"
        sheet="sheet 1"
        buttonText="Exportar Excel"
        className="content-button"
        /> */}
      </div>
    </div>
  );
}
}
