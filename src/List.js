import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faTrash} from '@fortawesome/free-solid-svg-icons'

function List (props) {
    const list = (i)=> {
            return (
                    <ul className='list grid' key={i.id}>
                        <p id={i.done === true? "done": "active"}>
                            {i.text}
                        </p> 
                        <i onClick={() => props.onClick(i.id)}>
                        <FontAwesomeIcon icon={faCheck} />
                        </i>
                        <i onClick={() => props.onDelete(i.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                        </i>
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
