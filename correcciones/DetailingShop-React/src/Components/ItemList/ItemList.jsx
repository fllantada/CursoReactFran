import { useEffect, useState } from "react";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProducts } from "../Service/service";
import { useParams } from "react-router-dom";

function ItemList() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts(categoryId).then((data) => setProducts(data));
  }, [categoryId]);

  function handleSelectProduct(productId) {
    console.log(productId);
    setSelectedProductId(productId);
  }

  return (
    <div>
      {selectedProductId ? (
        <ItemDetail productId={selectedProductId} />
      ) : (
        products &&
        products.map((product) => (
          <Item
            key={product.id}
            product={product}
            onSelect={handleSelectProduct}
          />
        ))
      )}
    </div>
  );
}

export default ItemList;
