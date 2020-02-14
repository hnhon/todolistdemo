import React from 'react';
import './List.css';

function List (props) {
    const list = (i)=> {
            return (
                    <ul className='list' key={i.id}>
                        <p id={i.done === true? "done": "active"}>
                            {i.text}
                        </p>
                        <input type='checkbox' onClick={() => props.onClick(i.id)}></input>
                        <i onClick={() => props.onDelete(i.id)}>Delete</i>
                    </ul>
            )
    }

    if (props.filter==='All') {
        return (
            <div>
                {
                    props.items.map(i => list(i))
                }
            </div>
        );
    } else if (props.filter==='Active') {
        let newList = props.items.filter(
            item => {return item.done === false;}
        );

        return (
            <div>
                {
                    newList.map(i =>list(i))
                }
            </div>
        );
    } else {
        let newList = props.items.filter(
            item => {return item.done === true;}
        );

        return (
            <div>
                {
                    newList.map(i => list(i))
                }
            </div>
        );
    }
};

export default List; 
