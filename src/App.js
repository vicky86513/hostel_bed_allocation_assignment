import React from 'react';
import './App.css';
import socialMediaAuth from './service/auth';
import SignedIn from './SignedIn/SignedIn';
import { googleProvider } from "./config/authMthod";
import glogo from "./Images/g-logo.png";









function App() {

  // const [ user ] = useAuthState(auth);

  let [userData, setUserData] = React.useState(null);
  
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    setUserData(res.email);
    console.log(res);
  }

 
  return (
    
    <div className="App">
      <header>
        <h1>Newton School</h1>
        
      </header>
      <div className="container-div">
        {
          userData ? <SignedIn /> :
          <div id="sign-google">
            <h6>Sign in with Google:</h6>
            <img src={glogo} onClick={() => handleOnClick(googleProvider)} />
          </div> 
          
        }
      </div>
      
    </div>
    
  );
}



export default App;
