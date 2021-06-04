import React,{Component} from 'react'


class Welcome extends Component{

     doThisFun(b) {
        
        console.log('clicked me', b);
      }
    render(){

        
      return(
        
        <div>
           <button onClick = {this.doThisFun.bind(this,'hey man why do not you click me?')}>Click Me</button>
        </div>
       
      )
    }
}
export default Welcome;