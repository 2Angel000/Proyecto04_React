import React from 'react'

export default function Cena({nombre, color, precio, setTotal}) {
  
    const ruta="https://www.html6.es/img/rey_";
    const imagen = `${ruta}${nombre.toLowerCase()}.png`;

    const comprar =(elemento)=>{
        setTotal((eTotal)=> eTotal+precio);
        elemento.target.parentNode.parentNode.parentNode.style.display="none";
    };

    return (
    <>
    <div className='rey' style={{backgroundColor: color}}>
        <h1>{nombre}</h1>
        <img src={imagen} alt="Rey_Godo" />
        <div className='titulo'>Precio:</div>
        <div className='precio'>{precio} MXN
            <div>
                <button onClick={comprar}>Comprar</button>
            </div>
        </div>
    </div>
    </>
  )
}
