import React, {useState} from 'react';

import Button from '../../Button';
import StateBDD from '../../StateBDD';

import ApiController from '../../../controller/ApiController';

export default function DatosPagado(props){
    const [estado, setEstado] = useState({estado: '', error:''});

    function handleSetEstado(estado, err){
        if(estado === 'error')
        setEstado({estado: estado, error:err});
        else
        setEstado({estado: estado});
    }

    function handleUpdatePagado(){
        let data = {
            dniBuscado : props.data.cDni,
            newData :{
                pagado: props.data.pagado,
          }
        }
        ApiController.updatePagado(data, handleSetEstado);
      };

    return(
        <div className="contenedor-pagado text-medium">
            <StateBDD estado={estado.estado} error={estado.error} />
            Pagado: $
            <input 
            id="pagado"
            name="pagado"
            className="text-big"
            placeholder="pagado"
            autoComplete="off"
            spellCheck="false"
            type="number" 
            value={props.data.pagado} 
            onChange={props.handleInputChange}
            />
            <Button text="Actualizar Pago" onClick={handleUpdatePagado} />
        </div>
    )
}