const getImages = async (qty) => {
  let url = [];

  for (let i = 0; i < qty; i++) {
    const response = await fetch(`https://picsum.photos/200/200/?random`);
    url.push(response.url);
  }
  return url;
};

export default getImages;
