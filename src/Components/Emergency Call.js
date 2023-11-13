import  React from 'react';
import "../style/Emergency Call.css";
import { AiOutlineArrowLeft }  from  'react-icons/ai'
import Button from 'react-bootstrap/Button';

function EmergencyCall(props){
    return(
        <>
        <div className="big-container">
            <AiOutlineArrowLeft className={"fleche"}
                onClick={(e)=>{
                    e.preventDefault();
                    props.setState(0)
                }}></AiOutlineArrowLeft>
            <div className={"first-question"}>
                First of all ! <br/>
                do you want to call an ambulance ?
            </div>
            <div className="btn-container">
                <Button style={{borderRadius:"2vw",fontSize:"15px",fontWeight:"1000",color:"rgba(237, 38, 71, 1)"}} > Call 190</Button>
                <Button style={{borderRadius:"2vw",fontSize:"15px",fontWeight:"1000",color:"rgba(237, 38, 71, 1)"}}  > Call 198</Button>
            </div>
            <div className={"first-question"} style={{marginTop:"0vh"}}>
                OR
            </div>
            <div className="btn-container" style={{marginTop:"0",height:"20vh"}}>
            <Button style={{borderRadius:"2vw",fontSize:"15px",fontWeight:"1000",color:"rgba(237, 38, 71, 1)"}}
            onClick={(e)=>{e.preventDefault()
            props.setState(2);
            }}
            > Get Emergency Aid</Button>
            </div>
        </div>
        </>
    );
}
export default EmergencyCall