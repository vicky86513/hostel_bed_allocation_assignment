import React from 'react';
import ChooseSex from '../ChooseSex/ChooseSex';
import { HostelProvider, HostelContext } from "../HostelContext/HostelContext";
import "./SignedIn.css";


function SignedIn(){
    let [roomBooked, setRoomBooked] = React.useState(JSON.parse(localStorage.getItem("roomBooking")) || null);
    

    return(
        <HostelProvider>
        {
            roomBooked ? <RoomBooking values={roomBooked}/> : <ChooseSex />

        }
        </HostelProvider>
    )
}

function RoomBooking(props){
    let [roomDetails, setDetails] = React.useContext(HostelContext);
    return(
        <div className="room-booked-div">
            <h1>Welcome </h1>
            <h5>You have already booked a room</h5>
            <h3>Your room details are as follows:</h3>
            <h5>Hostel No. <span>{[props.values.sex, props.values.hostelNum].join("")}</span></h5>
            <h5>Room No. <span>{props.values.roomNum}</span></h5>
        </div>
    )
}

export default SignedIn;