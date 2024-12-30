// import React from 'react'

// const FirstComponent = ({data, fn}) => {
//   return (
//     <div>
//         <button onClick={() =>{fn(10)}}>Set 10</button>
//       <h1>{data}</h1>
//     </div>
//   )
// }



// export default FirstComponent

// import { useRef, useState } from "react";
// import FirstComponent from "./components/FirstComponent";

// const App = () => {
//   let a = "Hello!";
//   // let array = ["user1", "user2", "user3", "user4"];
//   // let data = "Girl"
//   const btnClick =() =>{
//     console.log("Clicked");
//     setb(b+1);
//   }
//   const[b, setb] = useState(0);
//   const inputRef = useRef(null);
//   const[data, setData]  = useState([]);
//   return(
//     <div>
//       {/* <h1>{a}</h1>
//       {array.map((user) =>{ return <h1>{user}</h1>})}
//       {data === "Boy" ? <h1>Boy</h1>: <h1>Girl</h1>} */}
//       {/* <h1>{b}</h1> */}
//       {/* <button onClick={() =>{btnClick()}}>Click me</button> */}
//       <input ref={inputRef} type="text" className="text" />
//       <button onClick={() =>{setData([...data, inputRef.current.value])}}>Submit</button>
//       {data.map((item, index) =>{return <h2 key={index}>{item}</h2> })}
//       {/* <FirstComponent data={b} fn={setb} />   */}
//     </div>
//   )
// }

// export default App
