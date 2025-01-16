import { useEffect, useRef, useState } from "react"
import './ReactHooks.css'

function ReactHooks (){

    // const[car, setCar] = useState('Ferrari')
    // const[color, setColor] = useState('Red')
    // const[model, setModel] = useState('Rome')
    // const[year, setYear] = useState('2023')

    // const [car, setCar] = useState({
    //     brand: "ferrari",
    //     color: "Red",
    //     model: "Rome",
    //     year: "2023"
    // })

    // const changeColor = () =>{
    //     setCar((prev) =>{
    //         return {...prev, color:"Blue"}
    //     })
    // }

    // const [count, setCount] = useState(0)
    // const value = useRef(0)
    // console.log(value);
    
    // const [value, setValue] = useState(0)

    // useEffect(()=>{
    //     value.current = value.current +1;
    // });
    // const increaseCount  =() =>{
    //     setCount(prev =>prev+1)
    // }
    // const decreaseCount  =() =>{
    //     setCount(prev =>prev-1)
    // }
    const inputEle = useRef();
    const updateDOM = () =>{
        console.log(inputEle.current);
        inputEle.current.style.background = "blue";
        
    }

    return(
        <>
        <div className="body">
        {/* <h1>My {car.brand} </h1>
        <h2>It is {car.color} {car.model} from {car.year}</h2>
        <button onClick={() =>{changeColor()}}>Blue</button> */}
        {/* <h1>My Count: {count}</h1>
        <button onClick={() =>{increaseCOunt()}}>Increase by 4</button> */}
        {/* <h1>I've rendered {count} times!</h1> */}
        {/* <button onClick={() =>{increaseCount()}}>+1</button>
        <h1>{count}</h1>
        <button onClick={() =>{decreaseCount()}}>-1</button>
        <h2>Render count: {value.current} </h2> */}
        <input type="text" ref={inputEle} />
        <button onClick={() =>{updateDOM()}}>Click Me</button>
        </div>
        </>
    )
}
export default ReactHooks