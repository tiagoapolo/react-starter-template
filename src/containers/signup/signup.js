import React from 'react';
import './signup.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { register } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { Formik } from 'formik';
import { toast } from 'react-toastify';

export default function Signup() {
    const history = useHistory();

    const handleFormSubmit = (values, { setSubmitting }) => {
        const { name, email, password } = values;
        register(name, email, password)
            .then(response => {
                toast.success('Usuário criado com sucesso!');
                setTimeout(() => setSubmitting(false), 2000);
                setTimeout(() => history.push('/login'), 300);
            })
            .catch(err => {
                setSubmitting(false);
                toast.error(err.response.data.message || 'Não foi possível cadastrar o seu usuário');
            });
    };

    const validateForm = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Obrigatório';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Email inválido';
        }

        if (!values.name) {
            errors.name = 'Obrigatório';
        }

        if (!values.password) {
            errors.password = 'Obrigatório';
        }

        return errors;
    };

    return (
        <div className='Signup'>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validate={validateForm}
                onSubmit={handleFormSubmit}
            >
                {({ values, errors, submitForm, handleChange, handleSubmit, isSubmitting }) => (
                    <form className='combo' onSubmit={handleSubmit} noValidate autoComplete='on'>
                        <div>
                            <TextField
                                label='Nome'
                                id='name'
                                name='name'
                                type='text'
                                variant='outlined'
                                value={values.name}
                                onChange={handleChange}
                                fullWidth={true}
                                error={!!errors.name}
                                helperText={!errors.name ? null : errors.name}
                            />
                        </div>
                        <div>
                            <TextField
                                label='Email'
                                id='email'
                                name='email'
                                type='email'
                                variant='outlined'
                                fullWidth={true}
                                value={values.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={!errors.email ? null : errors.email}
                            />
                        </div>
                        <div>
                            <TextField
                                label='Senha'
                                id='password'
                                name='password'
                                type='password'
                                variant='outlined'
                                fullWidth={true}
                                value={values.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={!errors.password ? null : errors.password}
                            />
                        </div>
                        <div className='actions'>
                            <Button
                                variant='contained'
                                color='primary'
                                type='submit'
                                disabled={isSubmitting}
                                onClick={() => submitForm()}
                            >
                                {!isSubmitting ? 'Criar conta' : <CircularProgress size={24} />}
                            </Button>
                            <Button variant='contained' color='secondary' onClick={() => history.push('/login')}>
                                Cancelar
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}
