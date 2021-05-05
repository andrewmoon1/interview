import React from 'react';
import classNames from 'classnames';

import './Swatch.scss'

export const Swatch = (props) => {
    if (!props.swatchUrl) return null;

    const selectedClass = classNames({'product-swatch--current': props.isCurrent})
    console.log(selectedClass, 'what')
    return (
        <span className="product-swatch">
            <img 
                className={selectedClass} 
                src={props.swatchUrl} 
                alt="product" 
                onClick={() => props.handleClick(props.index)} 
            />
        </span>
    );
}