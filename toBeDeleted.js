import React, {useState} from 'react'

const App = () => {

    const happy = ":)";
    const sad = ":(";

    const [mood, setMood] = useState(happy)

    const changeMood = () => {
        if (mood === happy) {
            setMood(sad)
        } else {
            setMood(happy)
        }
    }

  return (
    <div>
        <p>{mood}</p>
        <button onClick={changeMood}>Click to change mood</button>

    </div>
  )
}

export default App;