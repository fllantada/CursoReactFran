async function getContenido() {
  //throw new Error("10");

  // return contenido
  //return ["Acerca de mi", "Educacion"];

  // return new Promise((resolve, reject) => {
  //   // busco el libro

  //   // el libro existe ?   resolve (contenido del libro)

  //   // el libro no existe reject (no lo encontre macho)

  //   resolve([
  //     {
  //       titulo: "Acerca de mi",
  //       parrafos: [
  //         "Soy un desarrollador web full stack",
  //         "Me gusta el futbol",
  //         "soy de argentina",
  //       ],
  //     },
  //     {
  //       titulo: "Educacion",
  //       parrafos: [
  //         "Esdudie numerosos cursos de desarrollo web",
  //         "Hice 2 años de ingenieria en sistemas",
  //       ],
  //     },
  //   ]);
  //   resolve("No se pudo obtener el contenido del libro");
  // });

  const contenidoLibro = [
    {
      titulo: "Acerca de mi",
      parrafos: [
        "Soy un desarrollador web full stack",
        "Me gusta el futbol",
        "soy de argentina",
      ],
    },
    {
      titulo: "Educacion",
      parrafos: [
        "Esdudie numerosos cursos de desarrollo web",
        "Hice 2 años de ingenieria en sistemas",
      ],
    },
  ];

  return contenidoLibro;
}

export default getContenido;
