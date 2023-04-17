const products = [
  {
    id: "1",
    type: "shampoo",
    title: "Shampoo Supreme",
    description: "verde",
    price: "800",
    pictureUrl: "/img/Shampoo01.jpeg",
  },
  {
    id: "2",
    type: "shampoo",
    title: "Shampoo HyperBlack",
    description: "verde",
    price: "800",
    pictureUrl: "/img/hyperblack.jpeg",
  },
  {
    id: "3",
    type: "shampoo",
    title: "Shampoo Elite",
    description: "verde",
    price: "800",
    pictureUrl: "/img/elite.jpeg",
  },
  {
    id: "4",
    type: "ceras",
    title: "Cera 1",
    description: "verde",
    price: "800",
    pictureUrl: "/img/ilussionwax.jpeg",
  },
  {
    id: "5",
    type: "ceras",
    title: "Cera 2",
    description: "verde",
    price: "800",
    pictureUrl: "/img/watermelon.jpeg",
  },
  {
    id: "6",
    type: "ceras",
    title: "Cera 3",
    description: "verde",
    price: "800",
    pictureUrl: "/img/cherryquick.jpeg",
  },
  {
    id: "7",
    type: "microfibras",
    title: "Microfibra Gris",
    description: "verde",
    price: "800",
    pictureUrl: "/img/microfibragris.jpg",
  },
  {
    id: "8",
    type: "microfibras",
    title: "Microfibra Gris y Rojo",
    description: "verde",
    price: "800",
    pictureUrl: "/img/microfibragrisyrojo.jpg",
  },
  {
    id: "9",
    type: "microfibras",
    title: "Microfibra Azul",
    description: "verde",
    price: "800",
    pictureUrl: "/img/microfibraazul.jpeg",
  },
];

export function getProducts(category = undefined) {
  //si hay category hago esto
  if (category) {
    return new Promise((resolve, reject) => {
      const productsFilter = products.filter(
        (product) => category === product.type
      );

      resolve(productsFilter);
    });
  }
  //sino envio todos los productos

  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

export function getItem(id) {
  return new Promise((resolve, reject) => {
    const productsFilter = products.filter(
      (productoFiltrado) => productoFiltrado.id === id
    ); //filtro con el ID y que me devuelva ese ID product

    resolve(productsFilter[0]);
  });
}
