
import React from 'react';



function Hello(){

  function doThis(a){

       console.log('button is clicked' , a);
  }

    return(
         
    <div>
        <button onClick = {doThis.bind(this,'hey man you can click me if you would like')}>Click Me</button>
    </div>
        
    );

}
export default Hello;