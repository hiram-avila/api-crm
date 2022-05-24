import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export const Layout = () => {
    useLocation()

    console.log(useLocation().pathname)


  return (
    <div className='md:flex md:min-h-screen'>

        <div className='md:w-1/4 bg-blue-900 px-5 py-10'>
            <h2 className='text-4xl font-black text-center text-white'>CRM - CLIENTES </h2>
            
            <nav className='mt-10'>
                <Link 
                    className='text-white text-2xl block mt-2 hover:text-blue-300'
                    to='/clientes'
                    >Clientes
                </Link>

                <Link 
                    className='text-white text-2xl block mt-2 hover:text-blue-300'
                    to='/clientes/nuevo'
                    >Nuevo clientes
                </Link>
            </nav>
        </div>
        

        <div className='md:w-3/4 p-10 md:h-screen overflow-scroll overflow-x-hidden'>
            <Outlet />
        </div>




    </div>
  )
}
