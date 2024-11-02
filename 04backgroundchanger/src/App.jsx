import { useState } from 'react'
function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}
        >
          <div className='fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2'>
            <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
              {/* directly writing of the setColor will create a infinite loop and rendering issue sp that onclick demands function */}
              <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-full text-white bg-red-600 shadow-lg'>Red</button> 
              <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-full text-white bg-green-600 shadow-lg'>green</button>
              <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white bg-blue-600 shadow-lg'>blue</button>
              <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white bg-yellow-600 shadow-lg'>yellow</button>
              <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white bg-pink-600 shadow-lg'>pink</button>
            </div>
          </div>
        </div>
  )
}

export default App
