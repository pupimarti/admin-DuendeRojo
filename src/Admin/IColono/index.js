import React, {useState, useEffect} from 'react';

import Bar from './Bar';
import DatosColono from './Infos/DatosColono';
import DatosMedicos from './Infos/DatosMedicos';
import DatosTutor from './Infos/DatosTutor';
import DatosPagado from './Infos/DatosPagado';
import StateBDD from '../StateBDD';
 
import './css.css';

import ApiController from '../../controller/ApiController';

export default function InfoInscripto(props){
    const [data, setData] = useState({});
    const [estado, setEstado] = useState({estado: '', error:''});

    function handleSetEstado(estado, err){
        if(estado === 'error')
        setEstado({estado: estado, error:err});
        else
        setEstado({estado: estado});
    }

    //transformo los datos recibidos de la BD al formato de la tabla
    function okBusqueda(inscripto)
    {
        setData({
            numero: inscripto.numero,
            pagado: inscripto.pagado,
            cNombre: inscripto.cNombre,
            cApellido: inscripto.cApellido,
            cSexo: inscripto.cSexo,
            cFecha: inscripto.cFecha,
            cDni: inscripto.cDni,
            cDomicilio: inscripto.cDomicilio,
            cSocio: inscripto.cSocio,
            cNumSocio: inscripto.cNumSocio,
            pNombre: inscripto.pNombre,
            pApellido: inscripto.pApellido,
            pTel: inscripto.pTel,
            pCel: inscripto.pCel,
            pWhapp: inscripto.pWhapp,
            cCeliaco: inscripto.cCeliaco,
            cRespiratoria: inscripto.cRespiratoria,
            cERespiratoria: inscripto.cERespiratoria,
            cCorazon: inscripto.cCorazon,
            cECorazon: inscripto.cECorazon,
            cHeridas: inscripto.cHeridas,
            cEHeridas: inscripto.cEHeridas
        });
    }

    useEffect(() => {
        let dataD = {
            dniBuscado: props.colono,
        }
        //Leo los contactos de la API BD
        ApiController.getColonoById(dataD, okBusqueda, handleSetEstado)
    }, [])

    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        setData({...data, [name]: value.toUpperCase()});
    }

    if(estado.estado === 'cargando' || estado.estado === 'error')
        return <StateBDD estado={estado.estado} error={estado.error}/>
      else
      {
    return(
        <div className="InfoInscripto-content">
            <Bar 
            nombre={data.cNombre}
            numero={data.numero}
            handleSetColono={props.handleSetColono}
            />
            <DatosColono        
            data={data}
            handleInputChange={handleInputChange}
            />
            <DatosTutor 
            data={data} 
            handleInputChange={handleInputChange}
            />
            <DatosMedicos 
            data={data} 
            handleInputChange={handleInputChange}
            />
            <DatosPagado 
            data={data} 
            handleInputChange={handleInputChange}
            />
        </div>
    );
    }
    }