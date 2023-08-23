import { useState } from "react";
import SignInOTP from "./signOTP";


function ShowAndHidePassword(){
    const handleclick =()=>{
        <SignInOTP />
    }
    return(

        <button className="row" onClick={handleclick}>
           ashdhasdha click
           {<SignInOTP />}
      </button>
      
    )

}
export default ShowAndHidePassword;