import React, {Component} from 'react';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      clock: 1000,
      copo: 'agua'
    }
  }

  componentDidMount(){
    window.setTimeout(() =>{
      this.setState({
        clock: 2000,
        copo:'suco'
    })
  },3000)
  }

  alterarCopo = () =>{
    this.setState({
      copo:"refrigerante",
      clock: 3000
    })
  }

  render() {
    const {clock, copo} = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <h3>teste de render</h3>
        <button onClick={()=>this.alterarCopo()}><h2>{copo}</h2></button>
      </div>
    )
  }
}


export default App;

