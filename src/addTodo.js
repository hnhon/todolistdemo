import React from 'react';
import './AddTodo.css';

function AddTodo (props) {
    return (
        <form className='form' onSubmit={props.onSubmit}>
            <input placeholder='Enter your todo item' value={props.item.text} onChange={props.onChange} required>
            </input>
            <button>
                Add
            </button>
        </form>
    )
};

export default AddTodo;