import React from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1 className="text-2xl font-bold camelCase  mt-5 text-center">
        {greeting}
      </h1>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;
