import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import jwt_decode from "jwt-decode"
function App() {
  function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential)
    console.log(userObject)
  }
  useEffect(()=>{
      /* global google */
    google.accounts.id.initialize({
      client_id: '248425522006-p7oapvl7p3qchflj4et59knl43lb514d.apps.googleusercontent.com',
      callback: handleCredentialResponse

    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
  },[])
  return (
    <div className="App">
      <div id="buttonDiv"></div> 
      <div id="pic"></div> 
    </div>
  );
}

export default App;
