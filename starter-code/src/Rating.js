import React, { Component } from 'react'

class Rating extends Component {
    render() {

    const {oneStar} = this.props;

    if(oneStar === 0) {
        return <img src="/img/dice-empty.png" alt=""></img>
    } else if (oneStar <= 2) {
        return <img src="/img/dice1.png" alt=""></img>
    } else if (oneStar <= 3) {
        return <img src="/img/dice2.png" alt=""></img>
    } else if (oneStar <= 4) {
        return <img src="/img/dice3.png" alt=""></img>
    } else if (oneStar <= 5) {
        return <img src="/img/dice4.png" alt=""></img>
    } else {
        return <img src="/img/dice5.png" alt=""></img>
    }

    return (
        <div className="rating">
        <img src={oneStar} alt=""></img> 
        </div>
    )    
    }
}

export default Rating 