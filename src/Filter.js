import React from 'react';
import './Filter.css';

function Filter (props) {
    return (
        <div className='viewButton '>
            <button className={(props.filter==='All')? 'active': 'inactive' } onClick={()=>{props.changeView('All')}}>All</button>
            <button className={(props.filter==='Active')? 'active': 'inactive' } onClick={()=>{props.changeView('Active')}}>Active</button>
            <button className={(props.filter==='Completed')? 'active': 'inactive' } onClick={()=>{props.changeView('Completed')}}>Completed</button>
        </div>
    )
};

export default Filter;