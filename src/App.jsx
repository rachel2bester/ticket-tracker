import Employee from './components/Employee/Employee';
import team from './data/team';
import Counter from './components/Counter/Counter';
import './App.scss';
import React, {useState} from 'react';


function App() {

  const [displayNew, setDisplayNew] = useState(false);

  const [teamJSX, setTeamJSX] = useState(
    team.map((employee) => {
      return (
        <Employee key={employee.id} name={employee.name} role={employee.role}/>
      )
    })
  );
  

  const handleDisplayNew = () => {
    setDisplayNew(!displayNew);
  }

  
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [count, setCount] = useState(0);


  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  }
  const handleCountChange = (event) => {
    setCount(event.target.value);
  }

  const generateNewEmployee = () => {
    const newTeamJSX = [...teamJSX];
    newTeamJSX.unshift(<Employee key={maxKey(team)+1} name={name} role={role} countStart={count}/>)
    setTeamJSX(newTeamJSX);
    setDisplayNew(!displayNew);
    setName("");
    setRole("");
    setCount("");
  }

  const maxKey = (team) => {
    return team.reduce((max, current) => ( current.id > max ? max = current.id : ""))
  }


  const create = (<>
      <h2>New Employee</h2>

      <div className='new-employee'>
        <div className='new-employee__form'>
          <label htmlFor="name">Name</label>
          <input id="name" onChange={handleNameChange} type="text" />
          <label htmlFor="role">Role</label>
          <input id="role" onChange={handleRoleChange} type="text" />
          <label htmlFor="counter">Counter</label>
          <input id="counter" onChange={handleCountChange} type="number" />
        </div>

        <div className="employee new-employee__card">
            <h1 className="employee__name">{name}</h1>
            <h2 className="employee__role">{role}</h2>
            <div className="counter">
            <h3 className="counter__heading">Counter</h3>
            <h4 className="counter__count">{count}</h4>
            <div className="counter__buttons">
                <button className="counter__buttons__button">-</button>
                <button className="counter__buttons__button">+</button>
            </div>
        </div>
        </div>
      </div>

      <div>
          <button onClick={handleDisplayNew}>Cancel</button>
          <button onClick={generateNewEmployee}>Create</button>
      </div>
    </>
    )


  return (
    <div className="App">
      <h1>Ticket Tracker</h1>
      
     {displayNew ? create : <button onClick={handleDisplayNew}>Create New Employee</button>}
      
      <div className="employee-container">
        {teamJSX}
      </div>
    </div>
  );
}

export default App;
