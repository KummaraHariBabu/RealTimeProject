import React from 'react'
import tcs from "../../Assets/image/tcs.png";
import infosys from "../../Assets/image/infosys.png";
import adobe from "../../Assets/image/adobe.png";
import microsoft from "../../Assets/image/microsoft.png";
import google from "../../Assets/image/google.png";
import "../../Styles/home/clients.css"

const Clients = () => {
  return (
    <div className="clients-page">
        <h2>Our Alumni Work At These Leading Companies</h2>
        <div className="companies">
            <img src={tcs} alt="" />
            <img src={google} alt="" />
            <img src={microsoft} alt="" />
            <img src={infosys} alt="" />
            <img src={adobe} alt="" />
            <img src={tcs} alt="" />
            <img src={google} alt="" />
            <img src={microsoft} alt="" />
         </div>
    </div>
   )
}

export default Clients