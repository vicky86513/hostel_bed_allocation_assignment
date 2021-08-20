import React from "react";
import { HostelContext } from "../HostelContext/HostelContext";
import Rooms from "../Rooms/Rooms";
import "./HostelSelect.css";

function HostelSelect(props){
    let hostel = props.sex;
    
    let [roomDetails, setDetails] = React.useContext(HostelContext);

    let [showRooms, setShowRooms] = React.useState(false);

    // React.useEffect(() => {
    //     setShowRooms(true);
    // }, [roomDetails.hostelNum]);

    function setHostelNum(e){
       
        
       
        setDetails("hostelNum", e); 
        setShowRooms(true);
        
    }

    return(
        <div>
            
            {

                showRooms ?
                <div>
                    <Rooms />
                </div>
                :
                <div>
                    <h2>Choose a Hostel</h2>
                <div className="hostel-num-div">
                    <button onClick={() => setHostelNum(1)}>{hostel}1</button>
                    <button onClick={() => setHostelNum(2)}>{hostel}2</button>
                    <button onClick={() => setHostelNum(3)}>{hostel}3</button>
                    <button onClick={() => setHostelNum(4)}>{hostel}4</button>
                    <button onClick={() => setHostelNum(5)}>{hostel}5</button>
                    <button onClick={() => setHostelNum(6)}>{hostel}6</button>
                </div>
                </div>
            }
        </div>
    )
}

export default HostelSelect;