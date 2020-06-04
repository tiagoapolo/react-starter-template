import React from 'react';
import './main.css';
import { useDispatch, useSelector } from 'react-redux';
import { TODOS } from '../../redux/todosReducer/types';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function Main() {
    const dispatch = useDispatch();
    const history = useHistory();

    const todos = useSelector(state => state.todosReducer.todos);
    const isLoading = useSelector(state => state.todosReducer.isLoading);

    const fetchTodos = React.useCallback(() => {
        dispatch({
            type: TODOS.REQUEST,
        });
    }, [dispatch]);

    const logout = () => {
        localStorage.removeItem('logged');
        localStorage.removeItem('refresh');
        localStorage.clear();
        history.push('/login');
    };

    React.useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    return (
        <div className='Main'>
            <div className='panel'>
                <h1>Lista</h1>
                <div className='list'>
                    {!isLoading ? null : <CircularProgress size={24} />}
                    {todos.map(todo => (
                        <p key={todo.id}>{todo.title}</p>
                    ))}
                </div>
                <Button variant='contained' color='primary' onClick={logout}>
                    Logout
                </Button>
            </div>
        </div>
    );
}
