//informacion externa a mi componente
import axios from "axios";

function getRandomImages(qty) {
  //feetch random images from an API
  //return an array of images
  const images = [];

  for (let i = 0; i < qty; i++) {
    ß;
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        console.log(response.data.message);
        images.push(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default getContenido;
