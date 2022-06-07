import React from 'react'
import './Counter.scss'

const Counter = (props) => {
    const {count} = props;
    return (
        <div className="counter">
            <h3 classname="counter__heading">Counter</h3>
            <h4 classname="counter__count">{count}</h4>
            <div classname="counter__buttons">
                <button>-</button>
                <button>+</button>
            </div>
            
        </div>
    )
}

export default Counter