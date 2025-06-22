import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'


function App() {
  let [count, setCount] = useState(0);
  const IncreaseCount = ()=>{
    if(count >= 10) {
      alert("Count cannot exceed 10");
      return;
    }
    setCount(count + 1);
  }
  const DecreaseCount = ()=>{
    if(count <= 0){
      alert("Count cannot be less than 0");
      return;
    }
    setCount(count - 1);
  }

  return (
    <>
      <div className='flex items-center justify-center text-4xl mb-5'>{count}</div>
      <button onClick={IncreaseCount} className='m-5 bg-black text-white p-4 rounded-md'>Increase Count</button>
      <button onClick={DecreaseCount} className='m-5 bg-black text-white p-4 rounded-md'>Decrease Count</button>
    </>
  )
}

export default App