import {useState,useEffect} from 'react'
import { Clientes } from '../components/Clientes';

export const Inicio = () => {

    const [clientes, setClientes] = useState([])
    // console.log(clientes)

    const url = 'http://localhost:4000/clientes';


   
        const obtenerClientes = async () => {
            
            const response = await fetch( url )
            const data = await response.json()
            setClientes(data)
        }
        
        useEffect(() => {
            obtenerClientes()
        
        }, []);  
    
    const handleEliminar = async (i) => {
        const confirmar = confirm('¿Estas seguro de eliminar este cliente?')
        if(confirmar){

            try {
                await fetch(`http://localhost:4000/clientes/${i}`, { method: 'DELETE'})
                console.log(i, 'eliminado')
                obtenerClientes()
            } catch (error) {
                console.log(error)
            }
        }
    }
        
    

  return (
    <>
        <h1 className='font-black text-4xl text-blue-900 '>Clientes</h1>
        <p className='mt-3'>Administra tus clientes</p>

        <table className='w-full mt-5 table-auto shadow bg-white'>
            <thead className='bg-blue-800 text-white'>
                <tr>
                    <th className='p-2'>Nombre</th>
                    <th className='p-2'>Contacto</th>
                    <th className='p-2'>Empresa</th>
                    <th className='p-2'>Acciones</th>
                </tr>    
            </thead>

            <tbody >
                {clientes.map(cliente => (
                    <Clientes 
                        key={cliente.id}
                        cliente={cliente}
                        handleEliminar={handleEliminar}
                    />
                ))}
            </tbody>
        </table>

    </>
  )
}
