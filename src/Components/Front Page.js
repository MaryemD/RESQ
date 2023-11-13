import  React from 'react';
import Header from './header'
import '../style/FrontPage.css';
import Button from 'react-bootstrap/Button';
import Emergency from '../Assets/EmergencyVall.png';

function FrontPage(props) {
  return (
    <>
        <div className={"full-page"}>
         <Header />
        <div className="btn-container">
            <Button > Log In</Button>
            <Button style={{backgroundColor:"#F66F6F",color:"white"}}> Sign Up</Button>
        </div>
            <div className={"question"}>
                Having A Tough Time?
            </div>
            <div className={"description"}>
                Hold the Emergency <br/>
                Call button to get<br/>
                instant help.
            </div>
            <div className={"Emergency-call"} onClick={(e)=>{e.preventDefault();
            props.setState(1);
            }}>
                <img src={Emergency}  />
            </div>
        </div>
    </>
    );
}

export default FrontPage;