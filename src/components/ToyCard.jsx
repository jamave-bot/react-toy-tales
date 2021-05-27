import React, { Component } from 'react';

class ToyCard extends Component {
  state={
    likes: this.props.toy.likes
  }

  handleClick = () =>{

    let newLikes = this.state.likes + 1
    this.setState({
      likes: newLikes
    })
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: newLikes
      }),
    })
  }

  handleDelete = () =>{
    this.props.deleteToy(this.props.toy)
    fetch(`http://localhost:3000/toys/${this.props.toy.id}`, {
      method: "DELETE",
    })
  }
  
  render() {
    const {name, image, likes} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} alt={name} className="toy-avatar" />
        <p>{this.state.likes} Likes </p>
        <button className="like-btn" onClick={this.handleClick}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.handleDelete}>Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
