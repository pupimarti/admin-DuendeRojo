import React, {useState} from 'react';

import Button from '../../Button';
import StateBDD from '../../StateBDD';

import ApiController from '../../../controller/ApiController';

export default function DatosTutor(props){

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

    function handleUpdateDatosTutor(){
        let data = {
            dniBuscado : props.data.cDni,
            newData :{
                pNombre: props.data.pNombre,
                pApellido: props.data.pApellido,
                pTel: props.data.pTel,
                pCel: props.data.pCel,
                pWhapp: props.data.pWhapp,
          }
        }
        ApiController.updateDatosTutor(data, handleSetEstado);
      };

      
    return(
        <div className="contenedor-datos">
            <div 
            className="text-big bold title-datos no-selec"
            onClick={handleSetVerDatos}>
                Datos del Tutor
            </div>
            {verDatos === true && 
            <div className="content-datos-colono">
               <div className="info">
                <div className="txt">Nombre</div>
                <input
                    name="pNombre"
                    className="input text-medium"
                    type="text"
                    placeholder="NOMBRE"
                    value={props.data.pNombre}
                    onChange={props.handleInputChange}
                    required
                    autoComplete="off"
                    spellCheck="false"
                    disabled={!editarDatos}
                />

                <div className="txt">Apellido</div>
                <input
                    name="pApellido"
                    className="input text-medium"
                    type="text"
                    placeholder="APELLIDO"
                    value={props.data.pApellido}
                    onChange={props.handleInputChange}
                    required
                    autoComplete="off"
                    spellCheck="false"
                    disabled={!editarDatos}
                />
                </div>

                <div className="info">
                <div className="txt">Numero de Telefono Fijo</div>
                <input
                    id="pTel"
                    className="input text-medium"
                    type="number"
                    name="pTel"
                    placeholder="Telefono"
                    value={props.data.pTel}
                    onChange={props.handleInputChange}
                    
                    autoComplete="off"
                    spellCheck="false"
                    disabled={!editarDatos}
                />
                </div>

                <div className="info">
                <div className="txt">Numero de Celular</div>
                <input
                    id="pCel"
                    className="input text-medium"
                    type="number"
                    name="pCel"
                    placeholder="Celular"
                    value={props.data.pCel}
                    onChange={props.handleInputChange}
                    autoComplete="off"
                    spellCheck="false"
                    disabled={!editarDatos}
                />
                </div>

                <div className="info">
                <div className="txt">Grupo de Whatsapp</div>
                <div className="sel">
                    <input
                    type="radio"
                    name="pWhapp"
                    onChange={props.handleInputChange}
                    value="SW"
                    disabled={!editarDatos}
                    checked={props.data.pWhapp==="SW"}
                    />
                    SI
                </div>
                <div className="sel">
                    <input
                    type="radio"
                    name="pWhapp"
                    onChange={props.handleInputChange}
                    value="NW"
                    disabled={!editarDatos}
                    checked={props.data.pWhapp==="NW"}
                    />
                    NO
                </div>
                </div>
                <StateBDD estado={estado.estado} error={estado.error} />
                {editarDatos?
                    <div className="botones">
                        <Button text="Guardar" onClick={handleUpdateDatosTutor} />
                        <Button text="Cancelar" onClick={handleEditarDatos}/>
                    </div>
                :
                    <Button text="Editar" onClick={handleEditarDatos}/>}
            </div>}
        </div>
    );
}