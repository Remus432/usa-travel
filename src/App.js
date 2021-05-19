import React from "react"
import Eagle from "./img/eagle.png"
import Star from "./img/star.svg"
import Map from "./img/USA.png"
// Tennesse Files
import tnFlag from "./img/tennesse/Tennesse_flag.png"
import tnMap from "./img/tennesse/Tennesse_map.svg"
import tnBg from "./img/tennesse/Tennesse_background.png"
// Texas Files
import txFlag from "./img/texas/Texas_flag.png"
import txMap from "./img/texas/Texas_map.svg"
import txBg from "./img/texas/Texas_background.png"
// Mississippi Files
import msFlag from "./img/mississippi/Mississippi_flag.png"
import msMap from "./img/mississippi/Misssissippi_map.svg"
import msBg from "./img/mississippi/Mississippi_background.png"
// louisiana Files
import luFlag from "./img/louisiana/Louisiana_flag.png"
import luMap from "./img/louisiana/Louisiana_map.svg"
import luBg from "./img/louisiana/Louisiana_background.png"
// State Card Template
import Card from "./components/Card"

function App() {
  return (
    <div className="main">
      <div className="main__headline">
        <h1 className="main__headline-text">TRAVEL TO AMERICA</h1>
        <img className="main__headline-img" src={Eagle} alt="Flying Eagle" />
      </div>
      <div className="main__stars">
        <img className="main__stars-img" src={Star} alt="Star" />
        <img className="main__stars-img" src={Star} alt="Star" />
        <img className="main__stars-img" src={Star} alt="Star" />
        <img className="main__stars-img" src={Star} alt="Star" />
      </div>
      <img className="main__map" src={Map} alt="USA Map" />
      <div className="main__states">
        <Card flag={tnFlag} map={tnMap} bg={tnBg} state="Tennesse" motto="Agriculture and Commerce" area="109,247" capital="Nashville" population="6,829,174" />
        <Card flag={txFlag} map={txMap} bg={txBg} state="Texas" motto="Friendship" area="695,662" capital="Austin" population="28,995,881" /> 
        <Card flag={msFlag} map={msMap} bg={msBg} state="Mississippi" motto="Virtute et Armis" area="125,460" capital="Jackson" population="2,976,149" /> 
        <Card flag={luFlag} map={luMap} bg={luBg} state="Louisiana" motto="Union, Justice and Confidence" area="135,651" capital="Baton Rouge" population="4,648,794" /> 
      </div>
    </div>
  );
}

export default App;
