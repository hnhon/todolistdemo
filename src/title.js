import React from 'react';
import './Title.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Title () {
    return (
        <header className='title'>
            Todo List App
            <div id='description'>
                <p>with React</p>
                <a href='https://github.com/hnhon' rel="noopener noreferrer" target="_blank">Project Repo</a>
                <p>Contact <a href='https://linkedin.com/in/hiunamhon' rel="noopener noreferrer" target="_blank" id='social'> <FontAwesomeIcon icon={faLinkedin} /></a></p>  
            </div>
        </header>
    )
};

export default Title;