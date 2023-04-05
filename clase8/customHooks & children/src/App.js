import React from "react";
import Container from "./components/container/Container";
import getData from "./services/getData";
import getImages from "./services/getImages";
import { useState, useEffect } from "react";

function App() {
  const [foto, setFoto] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    getData(600, 600).then((data) => {
      setFoto(data);
    });

    getImages(10).then((data) => {
      setImages(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Container>
        <h1>Solicitud de servicios</h1>
        <input type="text" placeholder="Escribí algo acá..." />
        {/* <img src={foto} /> */}
        {images &&
          images.map((image, index) => {
            return <img key={index} src={image} />;
          })}
      </Container>
    </>
  );
}

export default App;
