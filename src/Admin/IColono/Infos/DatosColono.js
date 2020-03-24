import React, {useState} from 'react';

import Button from '../../Button';
import StateBDD from '../../StateBDD';

import ApiController from '../../../controller/ApiController';

export default function DatosColono(props){

    const [verDatos, setVerDatos] = useState(false);

    function handleSetVerDatos(){
        setVerDatos(!verDatos);
    }

    const [editarDatos, setEditarDatos] = useState(false);

    function handleEditarDatos(){
        setEditarDatos(!editarDatos);
    }

    const [estado, setEstado] = useState({estado: '', error:''});

    function handleSetEstado(estado, err){
        if(estado === 'error')
        setEstado({estado: estado, error:err});
        else
        setEstado({estado: estado});
    }

    function handleUpdateDatosInsc(){
        let data = {
            dniBuscado : props.data.cDni,
            newData :{
              cNombre: props.data.cNombre,
              cApellido: props.data.cApellido,
              cSexo: props.data.cSexo,
              cFecha: props.data.cFecha,
              cDomicilio: props.data.cDomicilio,
              cSocio: props.data.cSocio,
              cNumSocio: props.data.cNumSocio
          }
        }
        ApiController.updateDatosInsc(data, handleSetEstado);
      };

    return(
        <div className="contenedor-datos">
            <div 
            className="text-big bold title-datos no-selec"
            onClick={handleSetVerDatos}>
                Datos de {props.data.cNombre}
            </div>
            {verDatos === true && 
            <div className="content-datos-colono">
               <div className="info">
                <div className="txt">Nombre</div>
                <input
                    name="cNombre"
                    className="input text-medium"
                    type="text"
                    placeholder="NOMBRE"
                    value={props.data.cNombre}
                    onChange={props.handleInputChange}
                    required
                    autoComplete="off"
                    spellCheck="false"
                    disabled={!editarDatos}
                />

                <div className="txt">Apellido</div>
                <input
                    name="cApellido"
                    className="input text-medium"
                    type="text"
                    placeholder="APELLIDO"
                    value={props.data.cApellido}
                    onChange={props.handleInputChange}
                    required
                    autoComplete="off"
                    spellCheck="false"
                    disabled={!editarDatos}
                />
                </div>

                <div className="info">
                <div className="txt">Fecha de nacimiento</div>
                <input
                    id="cFecha"
                    className="input text-medium"
                    type="date"
                    name="cFecha"
                    min="2008-01-01"
                    max="2016-01-01"
                    value={props.data.cFecha}
                    onChange={props.handleInputChange}
                    disabled={!editarDatos}
                />
                </div>

                <div className="info">
                <div className="sel">
                    <input
                    type="radio"
                    name="cSexo"
                    onChange={props.handleInputChange}
                    value="H"
                    disabled={!editarDatos}
                    checked={props.data.cSexo==="H"}
                    />
                    Hombre
                </div>
                <div className="sel">
                    <input
                    type="radio"
                    name="cSexo"
                    onChange={props.handleInputChange}
                    value="M"
                    disabled={!editarDatos}
                    checked={props.data.cSexo==="M"}
                    />
                    Mujer
                </div>
                </div>

                <div className="info">
                <div className="txt">DNI</div>
                <input
                    id="cDni"
                    className="input text-medium"
                    type="number"
                    name="cDni"
                    placeholder="DNI"
                    value={props.data.cDni}
                    onChange={props.handleInputChange}
                    disabled
                />
                </div>

                <div className="info">
                <div className="txt">Domicilio</div>
                <input
                    id="cDomicilio"
                    className="input text-medium"
                    type="text"
                    name="cDomicilio"
                    placeholder="DOMICILIO"
                    value={props.data.cDomicilio}
                    onChange={props.handleInputChange}
                    autoComplete="off"
                    spellCheck="false"
                    disabled={!editarDatos}
                />
                </div>

                <div className="info">
                <div className="sel">
                    <input
                    type="radio"
                    name="cSocio"
                    value="S"
                    onChange={props.handleInputChange}
                    checked={props.data.cSocio==="S"}
                    disabled={!editarDatos}
                    />
                    Socio
                </div>
                <div className="sel">
                    <input
                    type="radio"
                    name="cSocio"
                    value="N"
                    onChange={props.handleInputChange}
                    checked={props.data.cSocio==="N"}
                    disabled={!editarDatos}
                    />
                    NO Socio
                </div>

                {props.data.cSocio==='S'?(<input
                    id="cNumSocio"
                    className="input text-medium"
                    type="number"
                    name="cNumSocio"
                    placeholder="NUMERO DE SOCIO"
                    value={props.data.cNumSocio}
                    onChange={props.handleInputChange}
                    disabled={!editarDatos}
                />):''}

                    <StateBDD estado={estado.estado} error={estado.error}/>
                </div> 
                {editarDatos?
                    <div className="botones">
                        <Button text="Guardar" onClick={handleUpdateDatosInsc} />
                        <Button text="Cancelar" onClick={handleEditarDatos}/>
                    </div>
                :
                    <Button text="Editar" onClick={handleEditarDatos}/>}
            </div>}
        </div>
    );
}