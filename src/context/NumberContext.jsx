import { createContext, useReducer } from "react";
import NumberReducer from "./NumberReducer";

const NumberContext = createContext()

export const NumberProvider = ({children})=>{

const initialState ={
    number:0,
    evenNumber:2,
};




const[state, dispatch] = useReducer(NumberReducer, initialState)


const increaseNumber =()=>{
    dispatch({
        type:"INCREASE_NUMBER",
    })
}
const decreaseNumber =()=>{
    dispatch({
        type:"DECREASE_NUMBER",
    })
}
const checkEven =(num)=>{
    dispatch({
        type:"CHECK_EVEN",
        payload: parseInt(num),
    })
}


    return(
        <NumberContext.Provider value={{...state,increaseNumber, decreaseNumber,  checkEven}}>
            {children}
        </NumberContext.Provider>
    )
}

export default NumberContext