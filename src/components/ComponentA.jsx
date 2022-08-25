import React from "react";

function ComponenteA(props){

   return (
    <div>
         <h4>Componente A</h4>
         <div>{props.children}</div>
    </div>
    )
}

export default ComponenteA