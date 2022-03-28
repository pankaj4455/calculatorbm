import { useState } from "react";
import "./App.css";

export default function App() {

  const [weight,setWeight]=useState('');
  const [height,setHeight]=useState('');
  const [bmi,setBmi]=useState('');
  
  const inputWeight=(e)=>{
   // console.log(e.target.value);
    setWeight(e.target.value);

  }
  const inputHeight=(e)=>{
  
    setHeight(e.target.value);
  }
  const myFun=()=>{
    let bm=(weight / Math.pow( (height/100), 2 )).toFixed(1);
    
     if( bm >= 18.5 && bm <= 24.9 ){

      setBmi("Normal weight and you are healthy person" +" "+bm);
  }
  else if(bm < 18.5){
    setBmi("underweight" +" "+bm);
}
else if( bm >= 25 && bm <= 29.9 ){
  setBmi("overweight" +" "+bm);
}
else{
  setBmi("obses");
  
}


    
  }
  const resFun=()=>{
  setWeight('');
  setHeight('');
  setBmi();
    
  }
 
  return (
<>
<div className="div_1">
<h3>BMI calculator means Body mass index</h3>
<input type="text" placeholder="weight in kg" onChange={inputWeight} value={weight}/>
<input type="text" placeholder="height in cm" onChange={inputHeight} value={height}/><br/>
<button onClick={myFun}>submit</button><br/>
<button onClick={resFun}>reset</button>
<h2>{bmi} </h2>
</div>
</>
  );
}




