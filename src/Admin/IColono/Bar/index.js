import React from 'react';

import Button from '../../Button';

import './css.css';

export default function Bar(props){

    function handleSetColono(){
        props.handleSetColono(0);
    }

    return(
        <div className="Bar-header">
            <Button text="Atras" onClick={handleSetColono}/>
            <div className="text-big bold">{props.nombre}</div>
            <div className="text-big bold margin-medium">{props.numero}</div>
        </div>
    );
}