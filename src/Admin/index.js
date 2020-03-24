import React, { useState } from "react";
import IColonos from './IColonos';
import IColono from './IColono';

export default function Admin() {
  const [colono, setColono] = useState(0);

  return (
    <div className="content-admin">
        {colono === 0? //If 'colono' is 0, show all
          <IColonos 
              handleSetColono={setColono}
              />
        ://If 'colono' isn't 0, show all the information about that
            <IColono 
            colono={colono} 
            handleSetColono={setColono}
            />}
    </div>
  );
}
