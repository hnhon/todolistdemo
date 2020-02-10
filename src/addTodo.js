import React from 'react';

function AddTodo (props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input value={props.item} onChange={props.onChange}>
            </input>
            <button>
                Add Todo Item
            </button>
        </form>
    )
};

export default AddTodo;