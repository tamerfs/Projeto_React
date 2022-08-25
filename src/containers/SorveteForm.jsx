import React from 'react';


class SorveteForm extends React.Component{

  constructor(props){
    super(props);
    this.state = { 
    sabor: 'Uva',
    casquinha: true,
    guardanapos: 'nao'
  };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.cheched : target.value;
  const name = target.name;

  this.setState({
    [name] : value
  });
}

handleSubmit(event) {
  const { sabor, casquinha, guardanapos } = this.state;
  alert('Seu sabor escolhido foi ' + sabor + ', guardanapos ' + guardanapos +" e casquinha " + casquinha);
  event.preventDefault(); // para não redirecionar nosso form 
}

 render() {

    return (
      <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection:'column'}}>
        <label>
          Escolhe o sabor:
          <select  name="sabor" value={this.state.sabor} onChange={this.handleInputChange}>
            <option value="uva">Uva</option>
            <option value="limao">Limão</option>
            <option value="coco">Coco</option>
            <option value="chocolate">Chocolate</option>
            <option value="morango">Morango</option>
          </select>
        </label>
        <label>
          <input type="checkbox" name="casquinha" checked={this.state.casquinha} onChange={this.handleInputChange}/>
            Colocar casquinha?
        </label>
        <label>
          Guardanapos?
          <div className='radio'>
            <label>            
              <input type="radio" id="guardanapos" name="guardanapos" value="sim"  checked={this.state.guardanapos === 'sim'} onChange={this.handleInputChange} />
                Sim
            </label>
          </div>
          <div>
            <label>            
              <input type="radio" id="guardanapos" name="guardanapos" value="nao"  checked={this.state.guardanapos === 'nao'} onChange={this.handleInputChange} />
                Não
            </label>            
          </div>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );  
  }
}

export default SorveteForm;

