import React, { useState } from 'react'

const Navbar = () => {
    const [count, setCount] =useState(0);
    const array = ["User1", "user2", "user3", "user4"]
    let a = 123;
    let data = "boy";
    const btnClick = () =>{
        console.log("Clciked");
        setCount(count+1);
        
    }
    const getArrayDetails = () =>{
        let a= "Ravi";
    }
    const[c, seta] = useState();
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={() =>{btnClick()}}>click me!</button>
      {array.map((user) =>{return <h1>{user}</h1>})}
      {data === "boy" ? <h1>yes it is boy</h1>: <h1>No, it is not a boy!!</h1>}
      {a}
    </div>
  )
}

export default Navbar
