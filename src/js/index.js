//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
import PropTypes from "prop-types";

function SimpleCounter(props){

    return (
        <div class="">
                <div class="position-absolute">
                    <img src="https://imagizer.imageshack.com/img923/41/j5nap6.png" className="position-absolute" alt="Stop Watch image"></img>
                
                    <div className= "bigCounter position-relative">
                        <div className="four e-hours">{props.digiFour}</div>
                        <div className="three hours">{props.digiThree}</div>
                        <div className="two minute">{props.digiTwo}</div>
                        <div className="one sec">{props.digiOne}</div>
                    </div> 
                </div>
        
        </div>
        
        
    );
    
};

SimpleCounter.propTypes ={
    digiFour: PropTypes.number,
    digiThree: PropTypes.number,
    digiTwo: PropTypes.number,
    digiOne: PropTypes.number
 };

let counter = 0;
setInterval (function(){
    const four = Math.floor(counter/10000)
    const three = Math.floor(counter/3600)
    const two = Math.floor(counter/59)
    const one = Math.floor(counter/1)

    console.log(counter)
    counter++





ReactDOM.render(
    <SimpleCounter digiOne={"0"+one} digiTwo={two} digiThree={three} digiFour={four} />,
    document.querySelector("#app")
    
);
}, 1000);
export default SimpleCounter;