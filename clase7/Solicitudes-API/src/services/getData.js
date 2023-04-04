const getData = async (height, width) => {
  let url = "";

  const response = await fetch(
    `https://picsum.photos/${height}/${width}/?random`
  );
  url = response.url;
  return url;
};

export default getData;
