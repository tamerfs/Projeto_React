import React from 'react';
import items from '../components/Items';

const ToDoListStateless = ({items})=>(

  <div className='bloco-lista'>
    <p>Minha Lista Stateless</p>
    <ul className='lista-estilizada'>
    {items.map(item => <li>{item}</li>)}
    </ul>
  </div>
);  

export default ToDoListStateless;