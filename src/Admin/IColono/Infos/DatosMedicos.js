import React, {useState} from 'react';

import Button from '../../Button';
import StateBDD from '../../StateBDD';

import ApiController from '../../../controller/ApiController';

export default function DatosMedicos(props){

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

    function handleUpdateDatosMed(){
        let data = {
            dniBuscado : props.data.cDni,
            newData :{
                cCeliaco: props.data.cCeliaco,
                cRespiratoria: props.data.cRespiratoria,
                cERespiratoria: props.data.cERespiratoria,
                cCorazon: props.data.cCorazon,
                cECorazon: props.data.cECorazon,
                cHeridas: props.data.cHeridas,
                cEHeridas: props.data.cEHeridas,
          }
        }
        ApiController.updateDatosMed(data, handleSetEstado);
      };

    
    return(
        <div className="contenedor-datos">
            <div 
            className="text-big bold title-datos no-selec"
            onClick={handleSetVerDatos}>
                Datos Médicos
            </div>
            {verDatos === true && 
            <div className="content-datos-colono">
               <div className="info">
                        <div className="txt">¿Padece celiaquía?</div>
                        <div className="sel">
                            <input
                            type="radio"
                            name="cCeliaco"
                            value="S"
                            onChange={props.handleInputChange}
                            disabled={!editarDatos}
                            checked={props.data.cCeliaco==="S"}
                            />
                            SI
                        </div>
                        <div className="sel">
                            <input
                            type="radio"
                            name="cCeliaco"
                            value="N"
                            onChange={props.handleInputChange}
                            disabled={!editarDatos}
                            checked={props.data.cCeliaco==="N"}
                            />
                            NO
                        </div>
                        </div>

                        <div className="info">
                        <div className="txt">¿Padece asma o alguna enfermedad respiratoria?</div>
                        
                        <div className="sel">
                            <input
                            type="radio"
                            name="cRespiratoria"
                            value="S"
                            onChange={props.handleInputChange}
                            disabled={!editarDatos}
                            checked={props.data.cRespiratoria==="S"}
                            />
                            SI
                        </div>
                        <div className="sel">
                            <input
                            type="radio"
                            name="cRespiratoria"
                            value="N"
                            onChange={props.handleInputChange}
                            disabled={!editarDatos}
                            checked={props.data.cRespiratoria==="N"}
                            />
                            NO
                        </div>
                        {props.data.cRespiratoria === "S"?(
                        <textarea
                            name="cERespiratoria"
                            className="input"
                            type="text"
                            value={props.data.cERespiratoria}
                            onChange={props.handleInputChange}
                            autoComplete="off"
                            spellCheck="false"
                            disabled={!editarDatos}
                            placeholder="DESCRIPCIÓN DE LA ENFERMEDAD"
                        />
                        ):''}
                        </div>

                        <div className="info">
                        <div className="txt">¿Padece de algún problema de corazón?</div>
                        <div className="sel">
                            <input
                            type="radio"
                            name="cCorazon"
                            value="S"
                            onChange={props.handleInputChange}
                            disabled={!editarDatos}
                            checked={props.data.cCorazon==="S"}
                            />
                            SI
                        </div>
                        <div className="sel">
                            <input
                            type="radio"
                            name="cCorazon"
                            value="N"
                            onChange={props.handleInputChange}
                            disabled={!editarDatos}
                            checked={props.data.cCorazon==="N"}
                            />
                            NO
                        </div>
                        {props.data.cCorazon === "S"?(
                        <textarea
                            name="cECorazon"
                            className="input"
                            type="text"
                            value={props.data.cECorazon}
                            onChange={props.handleInputChange}
                            autoComplete="off"
                            spellCheck="false"
                            disabled={!editarDatos}
                            placeholder="DESCRIPCIÓN DEL PROBLEMA"
                        />
                        ):''}
                        </div>
                        <div className="info">
                        <div className="txt">¿Es posible aplicarle una pomada o desinfectante de heridas?</div>
                        <div className="sel">
                            <input
                            type="radio"
                            name="cHeridas"
                            value="S"
                            onChange={props.handleInputChange}
                            disabled={!editarDatos}
                            checked={props.data.cHeridas==="S"}
                            />
                            SI
                        </div>
                        <div className="sel">
                            <input
                            type="radio"
                            name="cHeridas"
                            value="N"
                            onChange={props.handleInputChange}
                            disabled={!editarDatos}
                            checked={props.data.cHeridas==="N"}
                            />
                            NO
                        </div>
                        {props.data.cHeridas === "N"?(
                        <textarea
                            name="cEHeridas"
                            className="input"
                            type="text"
                            value={props.data.cEHeridas}
                            onChange={props.handleInputChange}
                            autoComplete="off"
                            spellCheck="false"
                            disabled={!editarDatos}
                            placeholder="DESCRIPCIÓN DEL MOTIVO"
                        />
                        ):''}
                    </div>
                    <StateBDD estado={estado.estado} error={estado.error}/>
                {editarDatos?
                    <div className="botones">
                        <Button text="Guardar" onClick={handleUpdateDatosMed} />
                        <Button text="Cancelar" onClick={handleEditarDatos}/>
                    </div>
                :
                    <Button text="Editar" onClick={handleEditarDatos}/>}
            </div>}
        </div>
    );
}