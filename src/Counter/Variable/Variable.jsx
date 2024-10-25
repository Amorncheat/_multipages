import { useState } from 'react';
import './Variable.css';

function Variable({type ,name, value , setValue}) {
    const handleDecrease = () => {
        setValue(type === 'int' ? Math.max(0, value - 1) : value - 1);
    };

    const handleIncrease = () => {
        setValue(type === 'int' ? value + 1 : value + 1);
    };

    return (
        <div className='counter-container'>
         <h3 className='counter-name'>{name || 'Variable'}</h3>
         <button className='btn btn-danger'  onClick={handleDecrease}>&ndash;</button>
         <span className='counter-value'>{type && type === 'int' ? value : value.toFixed(2)}</span>
         <button className='btn btn-success'  onClick={handleIncrease}>+</button>
         </div>
);
}

export default Variable;