import React from 'react'
import './Counter.scss'

const Counter = (props) => {
    const {count} = props;
    return (
        <div className="counter">
            <h3 className="counter__heading">Counter</h3>
            <h4 className="counter__count">{count}</h4>
            <div className="counter__buttons">
                <button className="counter__buttons__button">-</button>
                <button className="counter__buttons__button">+</button>
            </div>
        </div>
    )
}

export default Counter