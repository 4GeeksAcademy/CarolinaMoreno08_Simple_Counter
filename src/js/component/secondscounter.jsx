import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) =>{
    
    return (
        <>
            <div class="text-center">
            <div className="bigcounter">
                <span><i class="fa-regular fa-clock"></i></span>
                <span className="digit">{props.digitSix % 10}</span>
                <span className="digit">{props.digitFive % 10}</span>
                <span className="digit">{props.digitFour % 10}</span>
                <span className="digit">{props.digitThree % 10}</span>
                <span className="digit">{props.digitTwo % 10}</span>
                <span className="digit">{props.digitOne % 10}</span>
            </div>
            </div>
        </>
  );
  }
  
  SecondsCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
  };

  export default SecondsCounter