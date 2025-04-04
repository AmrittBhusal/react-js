import { useState } from "react"

function App() {
  const[count, setCount] = useState(0);
  return (
    <>
    <div>
      count:{count}
    </div>
    <button onClick={()=>count >= 20 ? setCount(count) : setCount(count + 1)}>Add Value</button>
    <button onClick={()=>count >= 1 ? setCount(count-1): setCount(0)}>Remove</button>
    </>
    
    
  )
}

export default App
