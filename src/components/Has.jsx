import React from "react";


let hasCostomer
let hasManager 

if (document.getElementById("checkM").checked) {
  hasManager = true
  hasManager = false
  console.log(hasCostomer, hasManager)
} else { 
  hasManager = false
  hasCostomer = true
  console.log(hasCostomer, hasManager)
}
  

console.log(hasCostomer, hasManager)

  export {hasCostomer,hasManager};
