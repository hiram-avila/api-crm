import {useNavigate} from 'react-router-dom'

export const Clientes = ({ cliente, handleEliminar }) => {
    const { nombre, email, telefono, empresa, id } = cliente
    const navigate = useNavigate()

    return (
        <tr className='border hover:bg-gray-50'>
            <td className='p-3'>{nombre}</td>
            <td className='p-3'>
                <p><span className="text-gray-800 uppercase font-bold">Email:</span>{email}</p>
                <p><span className="text-gray-800 uppercase font-bold">Tel:</span>{telefono}</p>
            </td>
            <td className='p-3'>{empresa}</td>
            <td className='p-3'>

                    <button 
                        type="button"
                        className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs rounded"
                        onClick={() => navigate(`/clientes/${id}`)}
                    >  
                        ver
                    </button>

                    <button 
                        type="button"
                        className="bg-blue-500 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3 rounded"
                        onClick={() => navigate(`/clientes/editar/${id}`)}
                    >
                        Editar
                    </button>

                    <button 
                        type="button"
                        className="bg-red-500 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3 rounded"
                        onClick={()=>handleEliminar(id)}
                    >
                        Eliminar
                    </button>
            </td>
        </tr>
    )
}



