import React from 'react'

export default function MiComponente({rey}) {
  console.log(rey);
  return (
    <h1>Hola {rey} come {rey[1]} reses  al día</h1>
  );  
}


MiComponente.defaultProps={
  reses: "Pocas",
  rey: "Rey Godo"
}