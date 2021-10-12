import './css/App.css';
import React from 'react';
import Menu from './components/menu'
import Principal from './components/login/principal';

class App extends React.Component {
  constructor(props){
  super(props);
  this.state={
    usuario: false,
    id:'0'
  }
  }

  log=(user)=>{
    this.setState({id: user.idUsuario, usuario:true});
  }

  render(){
    return (
      this.state.usuario ? <div><Principal id={this.state.id}/></div> : <div><Menu log={this.log} /></div>
    );  
  } 
}


export default App;
