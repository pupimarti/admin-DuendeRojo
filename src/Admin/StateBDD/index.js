import React from 'react';

import Cargando from './Cargando';

export default function StateBDD(props){
    if(props.estado === 'cargando'){
        return <div className="content-stateBDD">
                <Cargando />
            </div>
    }
    else if(props.estado === 'error'){
        return(
        <div className="content-stateBDD">
            <p className="text-medium"><strong>Error:</strong> {props.error}</p>
        </div>
        )
    } 
    else if(props.estado === 'actualizado'){
        return(
            <div className="content-stateBDD">
                <strong className="text-medium">Actualizado con éxito</strong>
            </div>
        )
    }
    else{
        return null;
    }
}