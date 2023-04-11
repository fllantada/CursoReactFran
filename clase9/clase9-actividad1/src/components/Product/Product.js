import { useParams } from "react-router-dom";

function Product(props) {
  //esto reciba informacion por url
  const { idProducto } = useParams();

  console.log(idProducto);

  return <h1>Product {idProducto}</h1>;
}

export default Product;
