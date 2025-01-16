import React from 'react'

const CallBackComp = () => {
    console.log("Component Render");
    
  return (
    <div>
      <h1>Count Header</h1>
    </div>
  )
}

export default React.memo(CallBackComp)
