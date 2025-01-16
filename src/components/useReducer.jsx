import React, { useReducer } from 'react'

const useReducers = () => {
  const initialState = {count: 0}
 const reducer = (state, action) =>{
    switch (action.type) {
      case 'increase':
        return {count: state.count +1}
        case 'decrease':
          return {count: state.count -1}
          case 'input':
            return {count: action.payload}
      default:{
        return state;
      }
        break;
    }
  }
   const[state, dispatch] = useReducer(reducer, initialState)
  // const[count, setCount] = useState(0)
  return (
    <div>
      <h1>Count functionality using react</h1>
      <h2>Count: {state.count}</h2>
      <button onClick={()=>{dispatch({type: 'increase'})}}>Increase</button>
      <button onClick={()=>{dispatch({type: 'decrease'})}}>Decrease</button> <br />
      <input value={state.count} type="number" onChange={(e) =>{dispatch({type: 'input', payload: e.target.value})}} />
    </div>
  )
}

export default useReducers
