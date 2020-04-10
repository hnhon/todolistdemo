import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Title () {
    return (
        <header className='title'>
            <h1>Todo List App</h1> 
            <p>with React</p>
            <a href='https://github.com/hnhon' rel="noopener noreferrer" target="_blank" id='repo'>Project Repo</a>
            <p>Contact <a href='https://linkedin.com/in/hiunamhon' rel="noopener noreferrer" target="_blank" id='social'> <FontAwesomeIcon icon={faLinkedin} /></a></p>  
        </header>
    )
};

export default Title;