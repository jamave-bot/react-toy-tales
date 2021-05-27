import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    toyArr: [],
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }


  componentDidMount(){
    fetch('http://localhost:3000/toys')
      .then(res=>res.json())
      .then(toyArr=>{
        this.setState({
          toyArr: toyArr
        })
      })
  }

  deleteToy = (toyToDelete) =>{
    let copyToyArray = this.state.toyArr.filter(toy=>{
      return toy.id !== toyToDelete.id
    })
    this.setState({
      toyArr: copyToyArray
    })
  }

  addToy = (toyToAdd)=>{
    let copyToyArr = [...this.state.toyArr, toyToAdd]
    this.setState({
      toyArr: copyToyArr
    })

  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm addToy={this.addToy}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toyArr={this.state.toyArr} deleteToy={this.deleteToy}/>
      </>
    );
  }

}

export default App;
