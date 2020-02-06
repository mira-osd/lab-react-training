import React, { Component } from "react"; 

class Random extends Component {
    render() {
    const {min, max} = this.props; 
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    
    return (
    <div className = "random">
    <p>Random value between {min} and {max} => {randomNumber} </p>

    </div>
    )
}

    }

export default Random; 