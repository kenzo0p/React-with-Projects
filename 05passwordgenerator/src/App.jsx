import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  //ref hook
  const PasswordRef = useRef(null);
  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklimnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789"
    if (charsAllowed) str += "!@#$%^&*()_+-=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);

    }
    setPassword(pass);
  }, [length, numberAllowed, charsAllowed, setPassword])


  const copyPasswordToClipBoard = useCallback(() => {
    PasswordRef.current?.select();
    // PasswordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    PasswordGenerator()
  }, [length, numberAllowed, charsAllowed, PasswordGenerator])

  return (
    <>
      <div className='w-full max-w-md  mx-auto shadow-md py-3 rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
        <h1 className='text-4xl text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={PasswordRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-300' onClick={copyPasswordToClipBoard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input onChange={(e) => { setLength(e.target.value) }} type="range" min={8} max={100} value={length} className='cursor-pointer' />
            <label>Length :{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => { setNumberAllowed((prev) => !prev) }} />
            <label>numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charsAllowed} id='characterInput' onChange={() => { setCharAllowed((prev) => !prev) }} />
            <label >Character</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
