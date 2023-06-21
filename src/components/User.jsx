import React from 'react'
// respond to user interaction - event listener, event handlaer
//btn.addEventListener('click, eventHandler)


const User = () => {
    const handleClick = () => {
        console.log("user clicked");
    };
    const handleClick2 = (name) =>{
        console.log(name +" Clicked");
};
  return (
      <div>
          <button onClick={handleClick}>click me</button>
          <button onClick={()=> handleClick2('AYO')}>click again</button>
    </div>
  )
}

export default User