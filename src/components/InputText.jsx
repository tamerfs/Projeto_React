import React from "react";

function InputText(){

  return (
    <div>
        <label for="name">Input de texto importado:</label><br/>
        <input type="text" id="name" name="name" required minLength="4" maxLength="8" size="10"/>
    </div>
  );
}



export default InputText;