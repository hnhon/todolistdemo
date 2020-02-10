import React from 'react';

function List (props) {
    return (
        <ul>
            {
                props.items.map(
                (i, index) => {
                return(
                <div>
                    <li key={index}>{i}<button onClick={()=>i.strike()}>Finish</button></li>
                </div>
                )
                }
                )
            }
        </ul>
    );
};

export default List; 
