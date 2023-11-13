import React from "react";
import "../style/Age.css";
import Button from 'react-bootstrap/Button';

function Age(props) {
  return( <>

      <div className="big-container" style={{backgroundColor:"white"}}>
          <div className="select-age">
              Please select the range of age:
          </div>
          <div className="btn-container" style={{height:"70vh"}}>
              <Button style={{borderRadius:"2vw",fontSize:"15px",fontWeight:"1000",color:"rgba(237, 38, 71, 1)"}}>0-16</Button>
              <Button style={{borderRadius:"2vw",fontSize:"15px",fontWeight:"1000",color:"rgba(237, 38, 71, 1)"}}>17-35</Button>
              <Button style={{borderRadius:"2vw",fontSize:"15px",fontWeight:"1000",color:"rgba(237, 38, 71, 1)"}}>36-60</Button>
              <Button style={{borderRadius:"2vw",fontSize:"15px",fontWeight:"1000",color:"rgba(237, 38, 71, 1)"}}>60-80</Button>
              <Button style={{borderRadius:"2vw",fontSize:"15px",fontWeight:"1000",color:"rgba(237, 38, 71, 1)"}}>+80</Button>
          </div>
      </div>

  </>);
}

export default Age;