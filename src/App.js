import React, {useState} from "react"
import "./App.css"

const App = () => {
  const [state, changeState] = useState(0)

  return(

    <div class="divElement">
    <p class="para"> Value </p>
    <p class="para-1">{state}</p>
    <button onClick={() => {changeState(state + 1)}}> + </button> 
    <button onClick={() => {changeState(state - 1)}}> - </button>
    </div>

  )
}
export default App;