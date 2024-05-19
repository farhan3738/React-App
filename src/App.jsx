import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const styling = { margin: "6px" , padding: "5px"  }
  function incrementHandler() {
    setCounter(++counter)
  }
  function decrementHandler() {
    if (Counter > 0)setCounter(--counter)
      else alert("Counter can't be negative , zero is the limit")
  }
  function resetHandler() {
    setCounter(0)
  }
  return (
    <>
      <div>
      {/* Display the count value */}
      <h1>Count: {count}</h1>

      {/* Increment button */}
      <button onClick={() => setCount(count + 1)}>Increment</button>

      {/* Decrement button */}
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        Decrement
      </button>

      {/* Reset button */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
    </>
  )
}

export default App
