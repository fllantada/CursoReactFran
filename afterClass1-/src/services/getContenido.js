async function getMemoryCards(qty) {
  const urls = [];
  for (let i = 0; i < qty; i++) {
    const respuesta = await fetch("https://picsum.photos/200/200/?random");
    const url = respuesta.url;
    urls.push(url);
  }

  console.log(urls);
  return urls;
}

export default getMemoryCards;
