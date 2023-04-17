import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemId } = useParams();

  // CONTINUAR

  return <div>{itemId && <ItemDetail productId={itemId} />}</div>;
}

export default ItemDetailContainer;
