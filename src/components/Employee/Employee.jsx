import React from 'react';
import './Employee.scss';
import Counter from '../Counter/Counter';

const Employee = (props) => {
    const {name, role, countStart} = props
    return (
        <div className="employee">
            <h1 className="employee__name">{name}</h1>
            <h2 className="employee__role">{role}</h2>
            <Counter start={countStart}/>
        </div>
    )
}

export default Employee;

