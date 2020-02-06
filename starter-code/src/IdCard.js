import React, { Component } from "react";

class IdCard extends Component {
  render() {
 const {lastName, firstName, gender, height, birth, picture} = this.props; 

    return (
        <div className="idCard">

          <div className = "image">
            <img src = {picture} alt="avatar"/>
          </div>

          <div className = "info">
            <p>FirstName{firstName}</p>
            <p>LastName"{lastName}</p>
            <p>Gender{gender}</p>
            <p>Height{height}</p>
            <p>Birth{birth.toUTCString()}</p>
          </div>

        </div>
    );
  }
}

export default IdCard;