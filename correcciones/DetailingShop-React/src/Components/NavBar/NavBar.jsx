import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {


  return (
    <nav className="flex-grow justify-center ">
      <Link to={"/"}>
        <h1 className='text-4xl font-bold uppercase  mt-5 text-center'>Detailing Shop</h1>
      </Link>
      <ul className=' bg-cyan-900 flex justify-center items-center mt-3 '>

        <li className="mr-6">
          <Link to={"/category/shampoo"} className='bg-cyan-900 px-4 py-2 border rounded-md border-x-zinc-500 font-semibold text-white hover:bg-sky-900'>
            Shampoo
          </Link>
        </li>
        <li className="mr-6">
          <Link to={"/category/ceras"} className='bg-cyan-900 px-4 py-2 border rounded-md border-x-zinc-500 font-semibold text-white hover:bg-sky-900'>
            Ceras
          </Link>
        </li>
        <li className="mr-6">
          <Link to={"/category/microfibras"} className='bg-cyan-900 px-4 py-2 border rounded-md border-x-zinc-500 font-semibold text-white hover:bg-sky-900'>
            Microfibras
          </Link>
        </li>
        <li className=" mr-6 "><CartWidget /></li>
      </ul>

    </nav>

  )
}

export default NavBar
