import React from 'react';


class NameForm extends React.Component{

  constructor(props){
    super(props);
    this.state = { value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(event) {
  this.setState({ value: event.target.value }); // junta ou concatena o item com o item em um novo array e seta no state
}

handleSubmit(event) {
  alert('O nome enviado foi: '+ this.state.value)
  event.preventDefault();
}

 render() {

    return (
      <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection:'column'}}>
        <label>
          Nome:
          <input type="text"value={this.state.value} onChange={this.handleChange}/>
        </label>        
        <input type="submit" value="Submit" />
      </form>
    );  
  }
}

export default NameForm;

