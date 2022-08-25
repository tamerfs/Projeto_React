import React from 'react';
import ButtonA from '../components/ButtonA'
import ButtonB from '../components/ButtonB'
import listCustomer from'../mocks/mock'

const App = ()=> {
  const name = "DIO - evento manipulado"

  const handleClick = (e, id)=>{
    const {value} = e.target
    console.log(value)
    alert(`ID do clinete é ${id} `)
  }

  const handleChange = (e)=>{
    const {value} = e.target
    console.log(value)
  }

  const showEvent = (e)=>{
    console.log("evento clicado")
    console.group(e)
    alert(name)
  }

  const renderCustomers = (customer,index)=>{ 
  return (
    <div  key = { `customer-${customer.id}`}>
      <li>{customer.name}  <ButtonA onClick = {(e)=>handleClick(e, customer.id)}>Deletar Dev</ButtonA> </li>
      {customer.skills.map(renderSkills)}<br/>
    </div>
    )  
  }

  const renderSkills = (skills, index)=>{
    return (
      <div key={`skill-${index}`}>
        <ul>{skills}</ul>
      </div>
    )
  }


  return (
    <div>
      <h3>teste com babel e webpack</h3>
      <ul>
        {listCustomer.map(renderCustomers)}
      </ul>
      <h3>teste com babel e webpack</h3>
      <input onChange={handleChange} />
      <ButtonB name = "Deletar Dev" onClick = {showEvent} />
    </div>
  );
};

export default App;

