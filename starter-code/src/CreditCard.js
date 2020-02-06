import React, { Component } from 'react' 

class CreditCard extends Component {
    render() {
        const {type, number, expirationMonth, expirationYear, bank, owner, backgroundColor, color} = this.props

        const cardStyle = {
            color: `${color}`, 
            backgroundColor: `${backgroundColor}`,
            width: "25%",
            borderRadius: "15px",
            padding: '20px'
        }

    return(
    
        <div className="creditcard" style={cardStyle}>
            <img src = {type} alt="type card" width="50px"/>

            <p>{number}</p>
            <p>Expires {expirationMonth}/{expirationYear}    {bank}</p>
            <p>{owner}</p>   
        </div>
    )    
    }

}

export default CreditCard; 