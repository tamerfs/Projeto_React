import React, {Component} from 'react';

class ToDoListStatefull extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: [
        'Tomate',
        'Alface',
        'Melacia'
      ]
    }
  }

addItem = (item) => {
  this.setState({items: [...this.state.items, item]}); // junta ou concatena o item com o item em um novo array e seta no state
}

removeItem = () => {
  this.setState({ items: [...this.state.items.slice(1)]})
}



 render() {
  const {items} = this.state;

    return (
      <div className='bloco-lista'>
        <p>Minha Lista Statefull</p>
        <ul className='lista-estilizada'>
        {items.map(item => <li>{item}</li>)}
        </ul>
        <button onClick={() => this.addItem('abobora')}>Adicionar Item</button>
        <button onClick={() => this.removeItem()}>Remover Item</button>
      </div>
    );  
  }
}

export default ToDoListStatefull;

