import React from "react";

export const HostelContext = React.createContext();


export const HostelProvider = (props) => {

    let [roomDetails, setRoomDetails] = React.useState({
        fname: "",
        sex: "",
        hostelNum: "",
        roomNum: ""
    });

    function setDetails(value, data){
        setRoomDetails({
            ...roomDetails,
            [value]: data
        })
       console.log(roomDetails);
        
    }

    return(
        <HostelContext.Provider value={[roomDetails, setDetails]}>
            {props.children}
        </HostelContext.Provider>
    )
}