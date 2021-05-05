import React from 'react';

import './Swatch.scss'

export const Swatch = (props) => {
    if (!props.swatch) return null;

    return (
        <span className="product-swatch">
            <img src={props?.swatch} alt="product" onClick={() => props.handleClick(props.index)} />
        </span>
    );
}