import React from "react";

function ComponenteB(props){

    return ( <div>
        <h4>Componente B</h4>
        {props.children}
   </div>
    )
}

export default ComponenteB