import React from 'react'
import { useState } from 'react'

function ItemCount({ stock, initial, onAdd }) {
    const [quantity, setQuantity] = useState(initial)

    function Agregar() {
        if (quantity < stock) {
            setQuantity(quantity + 1)
            console.log("hola me sume")
        }

    }

    function Quitar() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
           console.log("hola me reste")
        }
    }







    return (
        <div className='Counter'>
            <ul className='flex justify-center items-center mt-3 py-20 px-28'>
                <li className='w-1/2'><button className='bg-cyan-900 rounded-md  font-semibold text-white hover:bg-sky-900 px-4 py-3 text-5xl' onClick={Quitar}>-</button></li>
                <h4 className='Number'>{quantity}</h4>
                <li><button className='bg-cyan-900 rounded-md font-semibold text-white hover:bg-sky-900 px-4 py-3 text-5xl' onClick={Agregar}>+</button></li>
            </ul>
            <li className="flex justify-center items-center mt-3"><button className='bg-slate-500 p-3 rounded-md font-semibold text-white uppercase' onClick={() => onAdd (quantity)} disabled={!stock}>
                Agregar al carrito
            </button></li>
        </div>
    )
}

export default ItemCount

