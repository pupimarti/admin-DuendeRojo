import React from 'react';

export default function MultipleSelect(props){
    return(
        <select 
        className="content-select" 
        multiple 
        name="filter"
        onChange={props.handleInputChange} 
        value={props.search.filter}>
            <option value="SOCIOS">Socios</option>
            <option value="NOSOCIOS">No socios</option>
            <option value="FALTAPAGO">Falta Pagar</option>
            <option value="PAGOCOMPLETO">Pago completo</option>
        </select>
    );
}