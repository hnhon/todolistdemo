import React from 'react';

function AddTodo (props) {
    return (
        <form className='form' onSubmit={props.onSubmit}>
            <input placeholder='Todo Item' value={props.item.text} onChange={props.onChange} required>
            </input>
            <button id='addtodo'>
                Add
            </button>
        </form>
    )
};

export default AddTodo;