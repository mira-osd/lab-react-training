import React, { Component } from 'react'

class DriverCard extends Component {
    render() {  
    
        const {name, img, car} = this.props
    

    return(
        <div>
        <p>{name} <img className="img-driver" src={img} alt=""></img>  {car.model} {car.licensePlate}</p> 
        </div>
    )
    
    }

}

export default DriverCard