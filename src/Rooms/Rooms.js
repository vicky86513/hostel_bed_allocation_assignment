import React from "react";
import { HostelContext } from "../HostelContext/HostelContext";
import "./Rooms.css";

function Rooms(){

    let [roomDetails, setDetails] = React.useContext(HostelContext);

    let [btnVisibile,  setVisiblity] = React.useState("hidden");
    let [roomNum, setRoomNum] = React.useState(null);
    let [showPopUp, setShowPopUp] = React.useState(false);

    async function setVisible(e){
        await setRoomNum(e);
        
        setVisiblity("visible");
        console.log(roomNum);
    }

    async function popUpShow(){
        await setDetails("roomNum", roomNum);
        await localStorage.setItem("roomBooking", JSON.stringify(roomDetails));
        showPopUpOrNot();

    }

    function showPopUpOrNot(){
        setShowPopUp(!showPopUp);
    }
    
    

    return(
        <div id="floor-div">
            <div>
                <label id="floor-label">Choose a Floor</label>
                <select id="select-tag">
                    <option value="1st Florr">1st Floor</option>
                    <option value="2nd Florr">2nd Floor</option>
                    <option value="3rd Florr">3rd Floor</option>
                    <option value="4th Florr">4th Floor</option>
                    <option value="5th Florr">5th Floor</option>
                </select>
            </div>
            <div className="room-num-div">
                <button className="room-btn" onClick={() => setVisible(1)}>1</button>
                <button className="room-btn" onClick={() => setVisible(2)}>2</button>
                <button className="room-btn" onClick={() => setVisible(3)}>3</button>
                <button className="room-btn" onClick={() => setVisible(4)}>4</button>
                <button className="room-btn" onClick={() => setVisible(5)}>5</button>
                <button className="room-btn" onClick={() => setVisible(6)}>6</button>
                <button className="room-btn" onClick={() => setVisible(7)}>7</button>
                <button className="room-btn" onClick={() => setVisible(8)}>8</button>
                <button className="room-btn" onClick={() => setVisible(9)}>9</button>
                <button className="room-btn" onClick={() => setVisible(10)}>10</button>

            </div>
            <div className="book-btn">
                <button id="book-room-btn" onClick={popUpShow} style={{visibility: `${btnVisibile}`}}>Book Room</button>
            </div>
            {
               showPopUp ? <PopUp details={roomDetails} showPop={showPopUpOrNot}/> : null 
            }
           
            
        </div>
    )
}

function PopUp(props){

    
    return(
        
        <div className='popup'>
            <div className='popup_inner'>
            <button id="popup-btn" onClick={props.showPop}>x</button>
                <div id="popup-success">

                    
                    <h1>Success</h1>
                    <h2>Your room has been booked successfully.</h2>
                    <h3>Your room details are as follows:</h3>
                    <h5>Hostel No. <span>{[props.details.sex, props.details.hostelNum].join("")}</span></h5>
                    <h5>Room No. <span>{props.details.roomNum}</span></h5>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Rooms;