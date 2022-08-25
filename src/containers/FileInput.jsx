import React from 'react';


class FileInput extends React.Component{

  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

handleSubmit(event) {
  alert(`O arquivo selecionado - ${this.fileInput.current.files[0].name}`);
  event.preventDefault(); // para não redirecionar nosso form 
}

 render() {

    return (
      <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection:'column'}}>
        <label>
          Upload de arquivo:
          <input type="file" ref={this.fileInput}/>
            Colocar casquinha?
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );  
  }
}

export default FileInput;

