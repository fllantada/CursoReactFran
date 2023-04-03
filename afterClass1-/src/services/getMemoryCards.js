async function getMemoryCards(qty) {
  const urlImagenes = [];
  for (let i = 0; i < qty; i++) {
    const respuesta = await fetch("https://picsum.photos/200/200/?random");
    const url = respuesta.url;
    urlImagenes.push(url);
  }

  return urlImagenes;
}

export default getMemoryCards;
