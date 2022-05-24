import {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Spinnerr } from '../components/Spinner'

export const VerCliente = () => {

    const [cliente, setCliente] = useState({})
    const [value, setValue] = useState(false)
    const {nombre, email, telefono, empresa, notas} = cliente

        const navigate = useNavigate() 

        const {id} = useParams()
        console.log(id)

        useEffect(()=> {
                const peticion = async () => {
                    setValue(true)
                    const cliente = await fetch(`http://localhost:4000/clientes/${id}`)
                    const data = await cliente.json()
                    setCliente({})

                    setCliente(data)
                    setValue(false)
                }
             peticion()
          },[])

  return (
      

        <div>
            {Object.keys(cliente).length === 0 ? <p>No hay clientes... </p> : (
            
              value ? <Spinnerr/> 
                :(
                 <>
                    <p className='text-4xl text-gray-600 mt-10'>
                        <span className='text-gray-800 uppercase font-bold'>Cliente:</span>
                        {nombre}
                   </p>

                   <p className='text-2xl text-gray-600 mt-10'>
                        <span className='text-gray-800 uppercase font-bold'>Email:</span>
                        {email}
                   </p>

                   <p className='text-2xl'>
                        <span className='text-gray-800 uppercase font-bold'>Telefono:</span>
                        { telefono }
                   </p>

                    <p className='text-2xl'>
                        <span className='text-gray-800 uppercase font-bold'>Empresa:</span>
                        {empresa}
                    </p>

                    <p className='text-2xl'>
                        <span className='text-gray-800 uppercase font-bold'>Notas:</span>
                        {notas}
                    </p>

                    <button
                        className='mt-7 rounded-md bg-blue-800 text-white py-2 px-4 hover:bg-blue-900'
                        onClick={()=> navigate('/clientes')}
                    >
                      ⇠ Regresar
                    </button>
                </>
               )
            
            ) }
           
        </div>
        

  )
}
