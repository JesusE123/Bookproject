import React from 'react'
import useForm from '../../hooks/useForm'
import ButtonR from '../Button/Button'
import Form from '../Form/Form'
import Inputs from '../Inputs/Inputs'
const FormLogin = () => {

    const { datos, handleSubmit, handleChange, login } = useForm()
    return (
            <Form Submit={handleSubmit}>
                <Inputs
                    type='text'
                    placeholder='User'
                    change={handleChange}
                    name='username'
                />

                <Inputs
                    type='password'
                    placeholder='password'
                    change={handleChange}
                    name='password'
                />

                <ButtonR />
            </Form>
    )
}

export default FormLogin