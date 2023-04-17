import React from 'react'
import { Link } from 'react-router-dom'

function Item({  product, onSelect }) {

  function handleSelect() {
    onSelect(product.id);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-16 mb-10 mx-16 ">
      <img className="w-full" src={product.pictureUrl} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 font-semibold text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-600 font-medium text-base">${product.price}</p>
        <Link onClick={handleSelect} to={`/item/${product.id}`} className="mt-4 bg-cyan-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Ver detalles</Link>
        
      </div>
    </div>
  )
}


export default Item
