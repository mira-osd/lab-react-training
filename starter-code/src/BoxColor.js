import React, { Component } from "react"; 

class BoxColor extends Component {
    render() {
        const {r, g, b} = this.props;
  
        const styles = {
            margin: '20px',
            width: '250px',
            height: '250px',
            backgroundColor: `rgb(${r}, ${g}, ${b} )`,
            color: 'white',
            fontSize: '20px', 
            textAlign: 'center'
        }

    return (
        <div className="styles" style={styles}>
        <p>rgb({r}, {g}, {b})</p>
        </div>
    )    
    }

}

export default BoxColor; 