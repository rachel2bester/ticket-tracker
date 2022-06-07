import './App.css';
import Employee from './components/Employee/Employee';
import team from './data/team';
import './App.scss';

function App() {

  const teamJSX = team.map((employee) => {
    return (
      <Employee key={employee.id} name={employee.name} role={employee.role}/>
    )
  })


  return (
    <div className="App">
      
      <h1>Ticket Tracker</h1>
      <div className="employee-container">
        {teamJSX}
      </div>
    </div>
  );
}

export default App;
