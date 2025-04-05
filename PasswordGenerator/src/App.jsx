import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'


function App() {
  const[length , setlength] = useState(17);
  const[numbers, setNumbers] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
  
  const copyPasswordToClickboard = useCallback(()=>{
      passwordRef.current.select()
      window.navigator.clipboard.writeText(password)
  },[password])

  const PasswordGenerator = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pss = ""
    if(numbers) str+="0123456789"
    if(character) str+="!@#$%^&*(){}][|"
    for (let i = 0; i < length; i++) {
      let randomPswd = Math.floor(Math.random() * str.length + 1)
      pss += str.charAt(randomPswd)
    }
    setPassword(pss)

  },[length,numbers,character,setPassword])
  
  useEffect(()=>{
    PasswordGenerator()
  }, [length,numbers, character,PasswordGenerator])
  

  return (
    <>
      <div className='max-w-[600px] bg-gray-700 h-auto m-auto text-white mt-11 rounded-2xl text-center'>
        <div className='pt-5'>
          <h1 className='text-2xl '>Password generator</h1>
        </div> 
        <div className='w-full mt-5 flex '>
            <input 
              className='w-[500px] h-10 ml-5 bg-amber-50 text-black outline-none rounded-l-[7px]' 
              type="text"
              value={password}
              placeholder='Password' 
              readOnly
              ref={passwordRef}
            />
          <div className='bg-blue-600 px-3  rounded-r-[7px]'>
            <button 
              onClick={copyPasswordToClickboard}
              className='text-[20px] mt-1'>
                copy
            </button>
          </div>
        </div>
        <div className='w-full flex gap-5 justify-center text-orange-500 mt-5'>
            <input 
              type="range" 
              id="range" 
              min={6}
              max={100}
              value={length}
              onChange={(e)=>{setlength(e.target.value)}}
            />
            <p>length: {length}</p>
            <div>
              <input 
                type="checkbox" 
                defaultChecked = {numbers}
                id='inputNumber'
                onChange={()=> {setCharacter((prev) => !prev)}}
               />
              <label >Numbers</label>
            </div>
            <div>
              <input 
                type="checkbox" 
                defaultChecked = {character}
                id="inputChar"
                onChange={()=> {setCharacter((prev) => !prev)}}
              />
              <label >Character</label>
            </div>
        </div>
      </div>

    </>
  )
}

export default App
