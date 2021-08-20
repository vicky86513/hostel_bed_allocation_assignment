import React from 'react';
import { HostelContext } from "../HostelContext/HostelContext";
import HostelSelect from '../HostelSelect/HostelSelect';
import "./ChooseSex.css";
import boy from "../Images/boy.PNG";
import girl from "../Images/girl.PNG";


function ChooseSex(){

    let [roomDetails, setDetails] = React.useContext(HostelContext);
   
    
    return(
        
        <div>
            {

            roomDetails.sex ?
            
            <HostelSelect sex={roomDetails.sex}/>
            
            :
            <div>
                <h1>Choose your Hostel</h1>
                <div className="choose-hostel">
                    <div id="btn-g" onClick={() => setDetails("sex", "G")}>
                        <img src={girl} />
                        <h3>Girls Hostel</h3>
                    </div>
                    <div id="btn-b" onClick={() => setDetails("sex", "B")}>
                        <img src={boy} />
                        <h3>Boys Hostel</h3>
                    </div>
                </div>
            </div>
            }
        </div>
        
    )
}

export default ChooseSex;