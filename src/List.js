import React from 'react';
import './List.css';

function List (props) {

    if (props.filter==='All') {
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
    } else if (props.filter==='Active') {
        let newList = props.items.filter(
            (item)=>{
                return item.done === false;
            }
        );
        return (
            <div>
                {
                    newList.map(
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
    } else {
        let newList = props.items.filter(
            (item)=>{
                return item.done === true;
            }
        );
        return (
            <div>
                {
                    newList.map(
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
    }
};

export default List; 
