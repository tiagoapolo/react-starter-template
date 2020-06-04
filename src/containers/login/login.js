import React from 'react';
import './login.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { login } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const history = useHistory();

    const [email, setEmailValue] = React.useState('');
    const [password, setPassValue] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const auth = async e => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await login(email, password);
            const refresh = response.data.refreshToken;
            const token = {
                auth: response.data.auth,
                token: response.data.token,
                email: response.data.email,
            };

            Promise.resolve(JSON.stringify(token))
                .then(jsonStr => {
                    localStorage.setItem('logged', jsonStr);
                    localStorage.setItem('refresh', refresh);
                    return;
                })
                .then(() => {
                    setTimeout(() => history.push('/main'), 1000);
                    setTimeout(() => setLoading(false), 1000);
                });
        } catch (error) {
            toast.error(error.response.data.text);
            setLoading(false);
        }
    };

    return (
        <div className='Login'>
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <form className='combo' onSubmit={auth} noValidate autoComplete='on'>
                <div>
                    <TextField
                        label='Email'
                        id='email'
                        name='email'
                        type='email'
                        variant='outlined'
                        value={email}
                        onChange={e => setEmailValue(e.target.value)}
                        fullWidth={true}
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
                        value={password}
                        onChange={e => setPassValue(e.target.value)}
                    />
                </div>
                <div className='actions'>
                    <Button variant='contained' color='primary' type='submit' disabled={loading}>
                        {!loading ? 'Login' : <CircularProgress size={24} />}
                    </Button>
                    <Button variant='outlined' color='primary' onClick={() => history.push('/signup')}>
                        Cadastre-se
                    </Button>
                </div>
            </form>
        </div>
    );
}
