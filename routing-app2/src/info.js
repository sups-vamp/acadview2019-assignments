import React,{Component} from 'react';
import './style2.css';
import Add from './addinfo';
import Info from './dispinfo';
class Person extends Component{
    state={
        infos:[
            {
                name:'Sups',
                bday:'10 june',
                about:'Passionate web designer!'
            }
            
        ]
      }
      addInfo = (info) => { 
        info.id = Math.floor(Math.random() * 10);
        console.log(info.id);
       
        let infos = [info];
    
        this.setState({
          infos: infos
        })
      }
     
    render(){
        return(
            <div class="container-fulid">
            <div class="row">
            <div class="col-md-6"><Add addInfo={this.addInfo}/></div>
                <div class="col-md-6"><Info infos={this.state.infos}/></div>
             </div>   
            </div>
        );
    }
}
export default Person;