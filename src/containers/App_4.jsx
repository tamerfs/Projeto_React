import React from 'react';
import Button from '../components/ButtonB';
import InputText from '../components/InputText';


const listCustomer = [{
  id: 1,
  name: "João Pedro",
  skills: ["html", "css", "php"]
},{
  id: 2,
  name: "Paulo Thiago",
  skills: ["react","javascript","node"]
},{
  id: 3,
  name: "Jose Alfeu",
  skills: ["java", "spring",  "kotlin", "maven"]
},{
  id: 4,
  name: "Mateus Iago",
  skills: ["python","sql","Go","Flutter"]
},
]

const App = ()=> {
 
  const renderCustomers = (customer,index)=>{ // uso o index como key quando n tiver algo como o ID que seria unico
  return (
    <div  key = { `customer-${customer.id}`}>
      <li>{customer.name}</li>
      {customer.skills.map(renderSkills)}<br/>
    </div>
    )  
  }

  const renderSkills = (skills, index) =>{
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

    </div>
  );
};


export default App;

