import React ,{ useState } from "react";

function App(){
  const[count,Setcount]=useState(0)

  return(
    <div>
      <h1>counts calculators</h1>
      <p>welcome, {count}</p>
      <button onClick={() => Setcount(count+1)}>increase</button>
      <button onClick={() => Setcount(count-1)}>decrease</button>
      <button onClick={() => Setcount(100)}>reset</button>
    </div>
  );
}
export default App;