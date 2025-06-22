import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

function App() {
  const [bgColor, setColor] = useState('white');
  return (
    <>
      <div className='w-full h-screen flex items-center justify-center' style={{backgroundColor: bgColor}}>
        <div className='bg-white h-10 rounded-lg flex items-center justify-center p-4 absolute bottom-10'>
          <button onClick={()=>setColor('red')} className='bg-red-600 rounded-lg p-1 m-2 '>red</button>
          <button onClick={()=>setColor('blue')} className='bg-blue-600 rounded-lg p-1 m-2'>blue</button>
          <button onClick={()=>setColor('green')} className='bg-green-600 rounded-lg p-1 m-2'>green</button>
          <button onClick={()=>setColor('yellow')} className='bg-yellow-400 rounded-lg p-1 m-2'>yellow</button>
          
        </div>
      </div>
    </>
  )
}

export default App
