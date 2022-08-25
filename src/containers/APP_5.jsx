import React from 'react';
import Button from './ButtonA'



const App = ()=> {

  const name = "DIO"

  const handleChange = (e)=>{
    const {value} = e.target
    console.log(value)
  }

  const showEvent = (e)=>{
    console.log("evento clicado")
    console.group(e)
    alert(name)
  }

  return (
    <div>
      <h3>teste com babel e webpack</h3>
      <input onChange={handleChange} />
      <Button name = "botão exportado" onClick = {showEvent} />
    </div>
  );
};


export default App;

