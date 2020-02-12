import React from 'react';
import './List.css';

function List (props) {
    return (
        <div>
            {
                props.items.map(
                    (i) => {
                        return (
                                <ul className='list' key={i.id}>
                                    <p style={{
                                    textDecoration: i.done
                                      ? "line-through"
                                      : ""
                                    }}>{i.text}</p>
                                    <input type='checkbox' onClick={() => props.onClick(i.id)}></input>
                                    <i onClick={() => props.onDelete(i.id)}>Delete</i>
                                </ul>
                        )
                    }
                )
            }
        </div>
    );
};

export default List; 
