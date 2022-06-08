import Employee from './components/Employee/Employee';
import team from './data/team';
import Counter from './components/Counter/Counter';
import './App.scss';
import React, {useState} from 'react';


function App() {

  const [displayNew, setDisplayNew] = useState(false);

  const handleDisplayNew = () => {
    setDisplayNew(!displayNew);
  }
  
  const teamJSX = team.map((employee) => {
    return (
      <Employee key={employee.id} name={employee.name} role={employee.role}/>
    )
  })

  const create = (
    <form>
      <h2>New Employee</h2>
      <div className="employee">
          <h1 className="employee__name">Name</h1>
          <h2 className="employee__role">Role</h2>
          <Counter/>
      </div>
      
      <button onClick={handleDisplayNew}>Cancel</button>
      <button>Create</button>

    </form>
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
