import React, { useContext } from 'react'
import NumberContext from '../context/NumberContext'

const EvenNumber = () => {
    const {evenNumber, checkEven} = useContext(NumberContext);
const handleChange =(e)=>{
checkEven(e.target.value);
}


  return (
   <>
<input type="number"  className='w-100 my-3' onChange={handleChange}/>
<h1 className='text-center mt-5'>Your Number is</h1>
<h1 className={evenNumber %2===0?"display-1 text-center text-success":"display-1 text-center text-danger"}>{evenNumber %2===0?"Even Number":"Odd Number"}</h1>




  
   </>
  )
}

export default EvenNumber
