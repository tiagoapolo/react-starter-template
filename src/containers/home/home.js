import React from 'react';
import './home.css';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { fetchTodos } from '../../redux/todosReducer/reducer';

export default function Home() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todosReducer.todos);
    const isLoading = useSelector(state => state.todosReducer.isLoading);

    React.useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

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
            </div>
        </div>
    );
}
