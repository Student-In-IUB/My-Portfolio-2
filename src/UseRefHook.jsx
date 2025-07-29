import React, { useRef, useState } from 'react'

const UseRefHook = () => {
  const observer = useRef()
  const shakeel = useRef()
  const sadiq = useRef()
  const [value, setValue] = useState("")
  
  const changeColor = () => {
    const data1 = shakeel.current.value;
    sadiq.current.style.backgroundColor = data1
  }
  
  const handleChange = () => {
    console.log("Hello from Button");
    observer.current.style.border = "12px double green"
    const data = observer.current.value
    setValue(data)
  }

  return (
    <div className='h-[50vh]'>
      <input 
        ref={observer} 
        type="text" 
        className='m-12 border-2 border-purple-700' 
        placeholder='Enter Your Name' 
      />
      
      <button onClick={handleChange} className='px-6 py-2 bg-black text-white'>
        Click Here
      </button>
      <br />

      <input 
        ref={shakeel} 
        type="text" 
        className='m-12 border-2 border-purple-700' 
        placeholder='Enter Your color' 
      />

      <button onClick={changeColor} className='px-6 py-2 bg-black text-white'>
        Change Color
      </button>
      <br />
      
      <div 
        className="w-2xl justify-center bg-blue-400 text-white p-4 rounded shadow-md text-center" 
        ref={sadiq}
      >
        Myself Muhammad Sadiq Hussain
      </div>

      <h1 className='text-3xl'>{value}</h1>
    </div>
  )
}

export default UseRefHook