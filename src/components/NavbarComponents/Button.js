import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button(props) {
    return (
        <Link to='sign-up'>
            <button className='btn'>{props.content}</button>
        </Link>
    );
}