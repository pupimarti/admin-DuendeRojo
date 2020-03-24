import {Component} from 'react';

const url ="http://localhost:8080/apiColonia/";
const urlGetColonos="listaColonos";
const urlGetColonoById="listaColonos/idBusqueda";
const urlUpdatePagado='/updatePagado/Colono';
const urlUpdateDatosInsc='/updateDatosInsc/Colono';
const urlUpdateDatosTutor='/updateDatosTutor/Colono';
const urlUpdateDatosMed='/updateDatosMed/Colono';
const urlDeleteContacto='/deleteContacto/Contacto';


class ApiController extends Component
{
   
    getColonos(okBusqueda, handleInputState)
    {
        handleInputState('cargando');
        const endpoint = `${url}${urlGetColonos}`;
       fetch(endpoint)
       .then ((response) => {
            return response.json();
        }).then (responseData => {
            okBusqueda(responseData);
            handleInputState('');
        })
        .catch((err) => {
            handleInputState('error', err);
        });
    }

    getColonoById(data, okBusqueda, handleInputState)
    {
        handleInputState('cargando');
        const endpoint = `${url}${urlGetColonoById}`;
       fetch(endpoint,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{ 'Content-Type': 'application/json'},
            body: JSON.stringify(data) // data can be `string` or {object}!
        })
        .then ((response) => {
            console.log("responseByID",response);
            return response.json();
        })    
        .then(responseData => {
                console.log("responseByIDJson",responseData[0]);
                okBusqueda(responseData[0]);
                handleInputState('cargoDatos', '');
        })
        .catch((err) => {
            handleInputState('error', err);
            console.log(err);
        });
    }
    updatePagado(data, handleInputState)
    {
        handleInputState('cargando');
        const endpoint =`${url}${urlUpdatePagado}`;
        fetch(endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            handleInputState('actualizado');
        })
        .catch((err) => {
            handleInputState('error', err);
            console.log(err);
        })
        
    }
    updateDatosInsc(data, handleInputState)
    {
        handleInputState('cargando');
        const endpoint = `${url}${urlUpdateDatosInsc}`;
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            handleInputState('actualizado');
        })
        .catch((err) => {
            handleInputState('error');
            console.log(err);
        })
    }
    updateDatosTutor(data, handleInputState)
    {
        handleInputState('cargando');
        const endpoint = `${url}${urlUpdateDatosTutor}`;
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            handleInputState('actualizado');
        })
        .catch((err) => {
            handleInputState('error', err);
            console.log(err);
        })
    }
    updateDatosMed(data, handleInputState)
    {
        handleInputState('cargando');
        const endpoint = `${url}${urlUpdateDatosMed}`;
            fetch (endpoint,{
            method:'POST',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            handleInputState('actualizado');
        })
        .catch((err) => {
            handleInputState('error', err);
            console.log(err);
        })
    }
    deleteContacto(data)
    {
        console.log("elimino contacto",data);
        const endpoint = `${url}${urlDeleteContacto}`;
        console.log("Guardando");
            fetch (endpoint,{
            method:'DELETE',
            mode:"cors",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        }).then ((response) => {
            console.log("response");
            console.log(response);
            return response.json();
        })
        
    }
}
export default new ApiController();