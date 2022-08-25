import React, {useState} from 'react'; // usa um cook para criação de estados 

const ToDoListFunctional = ()=>{

const [items, setItems] = useState([
  'Tomate',
  'Alface',
  'Melacia'
]);

const addItem = (item) => {
  setItems([...items, item]); // junta ou concatena o item com o item em um novo array e seta no state
}

const removeItem = () => {
  setItems([...items.slice(1)])
}

  return (
    <div className='bloco-lista'>
      <p>Minha Lista Funcional</p>
      <ul className='lista-estilizada'>
      {items.map(item => <li>{item}</li>)}
      </ul>
      <button onClick={() => this.addItem('abobora')}>Adicionar Item</button>
      <button onClick={() => this.removeItem()}>Remover Item</button>
    </div>
  );  
  
}

export default ToDoListFunctional;

