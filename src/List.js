import React from 'react';

function List (props) {
    return (
        <div>
            {
                props.items.map(
                    (i) => {
                        return (
                                <li key={i.id} style={{
                                    textDecoration: i.done
                                      ? "line-through"
                                      : ""
                                  }}>
                                    {i.text}
                                    <input type='checkbox' onClick={() => props.onClick(i.id)}></input>
                                </li>
                        )
                    }
                )
            }
        </div>
    );
};

export default List; 
