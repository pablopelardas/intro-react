import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm(){
    const [newTodoValue, setNewTodovalue] = React.useState('');
    
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (event) => {
        setNewTodovalue(event.target.value);
    }

    const onCancel = () => {
        // TODO
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        // Frena toda la logica por default que tienen los elementos, en el caso del form el reload.
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            {/* Textarea para que tengan mas espacio para escribir y que sea expandible */}
            <textarea
                value = { newTodoValue } 
                onChange= { onChange }
                placeholder='Cortar la cebolla para el almuerzo'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type="button"
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick = {onCancel}
                >
                    Cancelar
                </button>
                <button
                    className='TodoForm-button TodoForm-button--add'
                    type="submit"   
                >
                    Añadir
                </button>
            </div>
        </form>
    );

}

export { TodoForm };