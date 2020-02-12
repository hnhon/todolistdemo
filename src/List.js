import React from 'react';
import './List.css';

function List (props) {
    return (
        <div>
            {
                props.items.map(
                    (i) => {
                        return (
                                <ul className='list' key={i.id} style={{
                                    textDecoration: i.done
                                      ? "line-through"
                                      : ""
                                  }}>
                                    <p>{i.text}</p>
                                    <input type='checkbox' onClick={() => props.onClick(i.id)}></input>
                                    <i></i>
                                </ul>
                        )
                    }
                )
            }
        </div>
    );
};

export default List; 
