import React, { Component } from 'react';
import IdCard from "./IdCard.js"; 
import Greetings from "./Greetings.js"
import Random from "./Random.js"
import BoxColor from "./BoxColor.js"
import CreditCard from "./CreditCard.js"
import Rating from "./Rating.js"
import DriverCard from "./DriverCard.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>IdCard</h1>
        {/* TODO: Use the IdCard component */}
        <IdCard 
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
<IdCard 
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>




  <h1>Greetings</h1>
  {/* TODO: Use the Greetings component */}
    <Greetings lang="de" firstName="Ludwig"></Greetings>
    <Greetings lang="fr" firstName="François"></Greetings>

    <h1>Random</h1>
    <Random min={1} max={6}/>
    <Random min={1} max={100}/>

    <h1>Box Color</h1>
    <BoxColor r={255} g={0} b={0}/>
    <BoxColor r={128} g={255} b={0} />

    <h1>Credit Card</h1> 
    <div className="creditcard-container">
    <CreditCard 
      type="/img/visa.png"
      number="0123456789018845"
      expirationMonth={3}
      expirationYear={21}
      bank="BNP"
      owner="Maxence Bouret"
      backgroundColor="#11aa99"
      color="white" />

    <CreditCard 
      type="/img/master-card.svg"
      number="0123456789010995"
      expirationMonth={3}
      expirationYear={21}
      bank="N26"
      owner="Maxence Bouret"
      backgroundColor="#eeeeee"
      color="#222222" />
    <CreditCard 
      type="/img/visa.png"
      number="0123456789016984"
      expirationMonth={12}
      expirationYear={19}
      bank="Name of the Bank"
      owner="Firstname Lastname"
      backgroundColor="#ddbb55"
      color="white" />
      </div>

    <h1>Rating</h1>
    <Rating/>

    <h2>Driver Card</h2>
    <DriverCard 
      name="Travis Kalanick"
      img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
      car={{
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
      }} />
    <DriverCard 
      name="Dara Khosrowshahi"
      img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
      car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
      }} />
   


      </div>
    );
  }
}

export default App;
