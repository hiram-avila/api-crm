import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export const EditarCliente = () => {

  const [cliente, setCliente] = useState('')

  const { nombre, email, telefono, empresa, notas } = cliente;
  // console.log(nombre)

  const { id } = useParams()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    useEffect(() => {
      const editarClientes = async (cliente) => {
        const response = await fetch(`http://localhost:4000/clientes/${id}`, {
          method: 'PUT',
          body: JSON.stringify(cliente),
          headers: {
            'Content-Type': 'application/json'
          },
        })
        
        const data = await response.json()
        setCliente(data)
      }
      editarClientes()
    }, [])
  }
  console.log(nombre)
  

 


  return (

    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
      <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Editar cliente</h1>

      <form onSubmit={handleSubmit} className='mt-10'>
        <div className='mb-4'>

          <input
            className='mt-2 block w-full p-3 bg-gray-50'
            type="text" value={email}
            onChange={(e) =>
            setCliente(e.target.value)}
            name='email'
          />
          <input className='mt-2 block w-full p-3 bg-gray-50' type="text" value={nombre} onChange={(e) => setCliente(e.target.value)} name='nombre'/>
          <input className='mt-2 block w-full p-3 bg-gray-50' type="text" value={telefono} onChange={(e) => setCliente(e.target.value)} />
          <input className='mt-2 block w-full p-3 bg-gray-50' type="text" value={empresa} onChange={(e) => setCliente(e.target.value)} />
          <input className='mt-2 block w-full p-3 bg-gray-50' type="text" value={notas} onChange={(e) => setCliente(e.target.value)} />

          <button className='mt-5 w-full bg-blue-800 p-3 text-white uppercase hover:bg-blue-700 cursor-pointer'>
            Editar Cliente y actualizar
          </button>

        </div>
      </form>

    </div>
  )
}
