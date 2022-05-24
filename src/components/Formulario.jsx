import React from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

export const Formulario = () => {
        //navigate  es un hook que nos permite navegar entre rutas
    const navigate = useNavigate()
        //validaciones de los campos del formulario
    const clienteSchema  = Yup.object().shape({
        nombre:Yup.string()
                     .min(3,'El Nombre es muy corto')
                     .max(20,'El Nombre es muy largo')
                     .required('El Nombre del Cliente es Obligatorio'),
         empresa:Yup.string()
                     .required('El Nombre de la empresa es obligatorio'),
         email:Yup.string()
                     .email('Email no válido')
                     .required('El email es obligatorio'),
         telefono:Yup.number()
                     .positive('Número no válido')
                     .integer('Número no válido')
                     .typeError('El Número no es válido')

    })

        //manejo del formulario con formik
    const handleSubmit = async(valores) => {
        try{
            const url = 'http://localhost:4000/clientes'
            const respuesta = await fetch( url, {
  
                method:'POST',
                body:JSON.stringify(valores),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            console.log(respuesta)
            const data = await respuesta.json()
            console.log(data)

            navigate('/clientes')
        } catch(error){
            console.log(error)
        }
    }
    

  return (
      
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar cliente</h1>

        <Formik
            initialValues={{
                nombre: '',
                empresa: '',
                email: '',
                telefono: '',
                notas: '',
            }}
            onSubmit={async (values, {resetForm}) => {
                await handleSubmit(values)
                resetForm()
            }}

            validationSchema={clienteSchema}
         >
              {()=> (

            <Form className='mt-10'>

                <div className='mb-4'>
                    <label 
                        className='text-gray-800'
                        htmlFor='nombre'
                        >Nombre:
                    </label>

                    <Field 
                        id='nombre'
                        type='text'
                        className='mt-2 block w-full p-3 bg-gray-50 first-letter:uppercase'
                        autoComplete='on'
                        placeholder='Nombre del cliente'
                        name='nombre'
                    />

                </div>

                <div className='mb-4'>
                    <label 
                        className='text-gray-800'
                        htmlFor='empresa'
                        >Empresa:
                    </label>

                    <Field 
                        id='empresa'
                        type='text'
                        className='mt-2 block w-full p-3 bg-gray-50'
                        autoComplete='on'
                        placeholder='Empresa del cliente'
                        name='empresa'
                    />
                </div>

                <div className='mb-4'>
                    <label 
                        className='text-gray-800'
                        htmlFor='email'
                        >Email:
                    </label>

                    <Field 
                        id='nombre'
                        type='email'
                        className='mt-2 block w-full p-3 bg-gray-50'
                        autoComplete='on'
                        placeholder='Email del cliente'
                        name='email'
                    />
                </div>

                <div className='mb-4'>
                    <label 
                        className='text-gray-800'
                        htmlFor='telefono'
                        >Telefono:
                    </label>

                    <Field 
                        id='telefono'
                        type='tel'
                        className='mt-2 block w-full p-3 bg-gray-50'
                        autoComplete='on'
                        placeholder='Telefono del cliente'
                        name='telefono'
                    />
                </div>

                <div className='mb-4'>
                    <label 
                        className='text-gray-800'
                        htmlFor='notas'
                        >Notas:
                    </label>

                    <Field 
                        as='textarea'
                        id='notas'
                        type='text'
                        className='mt-2 block w-full p-3 bg-gray-50 h-40'
                        autoComplete='on'
                        placeholder='Notas del cliente'
                        name='notas'
                    />
                </div>

                <input
                    type='submit'
                    value='Agregar cliente'
                    className='mt-5 w-full bg-blue-800 p-3 text-white uppercase hover:bg-blue-700 cursor-pointer'
                />

            </Form>
                )}
        </Formik>
    </div>
  )
}
