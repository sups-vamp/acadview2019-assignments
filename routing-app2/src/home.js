import React,{Component} from 'react';
import './style.css';
class Home extends Component{
  constructor()
  {
    super();
    this.state={
      pictures:[]
    };
  }
  componentDidMount()
  {
    fetch('https://randomuser.me/api/?results=100')
    .then(results=>{
      return results.json();
    }).then(data=>{
      let pictures=data.results.map((pic)=>{
        return(
          <div key={pic.results}>
          <img src={pic.picture.large}/></div>
        )
      })
      this.setState({pictures:pictures});
    })
  }
  render(){
    return(
      <div className="container-fluid">
        <div className="parallax">
          <div class="text">
            Random User Generator
          </div>
        </div>   
        <div class="pictures">
          {this.state.pictures}
          </div>
      </div>
    )
  }
}

export default Home;