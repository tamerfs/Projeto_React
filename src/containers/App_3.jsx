import React from 'react';
import Button from '../components/ButtonB';
import InputText from '../components/InputText';
//import {hasCostomer, hasManager} from './Has.jsx'

let hasIntro = true
let hasCostomer = true
let hasManager = false

const App = ()=> {
 
  const renderShowIntro = ()=>{
    if(hasIntro) return(
    <div>
      <h4>Intro inicial com Input text</h4>
    </div>
  )}
  const renderShowHistory = (
  <div><br/>
    Acesse os historicos disponiveis(costumer true)
    <br/>
    <Button onClick={()=> soma (30,40)} name="Botao do cliente -compontent" />
  </div>
  )
  const renderShowManager = (
    <div><br/>
      Gerencie os acessos (manager true)
      <br/>
      <Button onClick={()=> soma (50,60)} name="Botao do gerente -compontent" />
      <br/>
      <InputText/>
    </div>
  )
  const renderShowRegularUser = (
    <div><br/>
      faça login como ADM (manager false)
      <br/>
      <Button onClick={()=> soma (10,20)} name="Botao do funcionario -compontent" />
    </div>
  )

  return (
    <div>
      <h3>teste com babel e webpack</h3>
      {renderShowIntro()}
      {hasCostomer && ( renderShowHistory)}
      {hasManager ? ( renderShowManager):(renderShowRegularUser)}
    </div>
  );
};


function soma(a,b){
  alert(a+b)
}


export default App;

