import React from 'react';
import Button from '../components/ButtonB';
import ComponentA from '../components/ComponentA';
import ComponentB from '../components/ComponentB';


function soma(a,b){
  alert(a+b)
}

function App() {
  
    return (
      <div className="App">
       <h3>Inserindo Components</h3>
        <Button onClick={()=> soma(10,20)} name="Iniciando com React" />
        <ComponentA>
          <ComponentB>
            <Button onClick={()=> soma (30,40)} name="Classes pai e filho" />
          </ComponentB>
        </ComponentA>
        <h4>teste de render</h4>
      </div>
    )
  
}


export default App;

