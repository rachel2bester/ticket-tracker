import React, {useState} from 'react'
import './Counter.scss'

const Counter = () => {

    const [count, setCount] = useState(Math.floor(Math.random()*20));

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count !== 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className="counter">
            <h3 className="counter__heading">Counter</h3>
            <h4 className="counter__count">{count}</h4>
            <div className="counter__buttons">
                <button onClick={handleDecrement} className="counter__buttons__button">-</button>
                <button onClick={handleIncrement} className="counter__buttons__button">+</button>
            </div>
        </div>
    )
}

export default Counter