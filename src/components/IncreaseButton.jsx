import React, { useContext } from 'react'
import NumberContext from '../context/NumberContext'

const IncreaseButton = () => {

const{increaseNumber} = useContext(NumberContext);



  return (
    <button className="btn btn-success rounded-0 w-100 my-3" onClick={increaseNumber}>Increase</button>
  )
}

export default IncreaseButton
