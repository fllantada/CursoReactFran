function Pagina({ contenido }) {
  console.log("Desde mi componente pagina mis props son", contenido);
  //JSX

  //map usandolo aca
  // tengo un objeto que tiene una propiedad que es un array
  // quiero un arreglo [p1,p2,p3]

  const parrafos = contenido.parrafos.map((parrafo) => {
    return parrafo.toUpperCase();
    console.log(contenido.parrafo);
  });

  return (
    <div>
      <div>
        <h1>{contenido.titulo}</h1>
      </div>
      {parrafos.map((parrafo) => {
        return <p>{parrafo}</p>;
      })}
    </div>
  );
}

export default Pagina;
