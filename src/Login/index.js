import React from 'react';

import StateBDD from '../Admin/StateBDD';
import Button from '../Admin/Button';

import './css.css';

export default function Login(props){

    return(
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                <input 
                type="text" 
                placeholder="Usuario"
                name="user"
                onChange={props.handleInputChange}
                value={props.user.user}
                />
                <input 
                type="password" 
                placeholder="Contraseña"
                name="contraseña"
                onChange={props.handleInputChange}
                value={props.user.contraseña}
                />
                <Button
                text="INGRESAR"
                onClick={props.handleSubmit}
                />
                <StateBDD estado={props.error} error="Usuario o Contraseña incorrectos"/>
                
                </form>
            </div>
        </div>
    )
}