import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  const showToys = ()=>{
    return props.toyArr.map(toy=>{
      return <ToyCard toy={toy} key={toy.id} deleteToy={props.deleteToy}/>
    })
  }

  return(
    <div id="toy-collection">
      {showToys()}
    </div>
  );
}

export default ToyContainer;
