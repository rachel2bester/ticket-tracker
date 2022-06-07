import React from 'react';
import './Employee.scss';
import Counter from '../Counter/Counter';

const Employee = (props) => {
    const {name, role} = props
    return (
        <div className="employee">
            <h1 className="employee__name">Name: {name}</h1>
            <h2 className="employee__role">Role: {role}</h2>
            <Counter />
        </div>
    )
}

export default Employee;