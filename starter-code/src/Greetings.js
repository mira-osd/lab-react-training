import React, { Component } from "react";

const dictionary = {
    de : "Hallo", 
    en : "Hello",
    es : "Hola",
    fr : "Salut"
}
 
class Greetings extends Component {
  render() {
 const lang = this.props.lang; //de
 const keys = Object.keys(dictionary)
 const dictionaryItems = keys.map(key => ({key: key, value: dictionary[key]}))

 const greetingMessage = dictionaryItems.find(item => item.key === lang).value

 const firstName = this.props.firstName; 



    return (
        <div className = "greetings">
            <p>{greetingMessage} {firstName}</p>

        </div>
    )
  }
}

    export default Greetings; 