import React from "react";
import Container from "./components/container/Container";
import getData from "./services/getData";
import getImages from "./services/getImages";
import { useState, useEffect } from "react";
import useImages from "./hooks/useImages";
import Title from "./components/title/Title";
function App() {
  const [images, loading] = useImages(5);
  const audioSlave = "Audio Slave";
  return (
    <>
      <Container loadingProp={loading}>
        <Title text="Mi Web" />
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
