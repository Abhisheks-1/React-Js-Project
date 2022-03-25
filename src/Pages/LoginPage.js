import React from 'react'
import { Link } from 'react-router-dom'
import shopgirl from "../assets/ShoppingGirl.jpeg"
import log from "../assets/LOGO.jpeg"
import google from "../assets/gogface.png"

import '../App.css'

export default function SignInPage() {

    return (
        
        <div className="text-center auto">
        
            <img src={shopgirl} align="left" alt="pic" width={500} height={750} />
            <img src={log} id='logo' />
            <h2  style={{fontFamily: "Microsoft Sans Serif",color:"Black",position: "absolute",right:"40%",fontSize:"35px",top:"3%"}}><b>Sign In</b></h2>
            <br></br>
            <img src={google} style={{position: "absolute",left:"52%",top:"80px" }} width={400} height={100}/>
            <br></br>
            <form style={{position:"absolute",right:"18.5%",top:"29%"}}>
                <p>
                    <label style={{fontFamily: "Microsoft Sans Serif",color:"Black",fontSize:"17px",marginBottom:"15px",fontWeight:"100"}}><b>Username</b></label><br/>
                    <input type="text" name="first_name" required style={{width:"350px",marginTop:"-10px"}} />
                </p>
                <p>
                    <label style={{fontFamily: "Microsoft Sans Serif",color:"Black",fontSize:"17px",marginTop:"15px",fontWeight:"100"}}><b>Password</b></label>
                    <br/>
                    <input type="password" name="password" required style={{width:"350px",marginTop:"10px"}}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit" style={{fontFamily: "Microsoft Sans Serif",background:"darkorange",width:"350px",fontSize:"17px",marginTop:"18px"}}>Login</button>
                </p>
            </form>
                <p>
                    <Link to="/register" style={{fontFamily: "Microsoft Sans Serif",color:"olivedrab", position: "absolute",right:"39.3%",top:"65%"}}>Forget password?</Link>
                    <Link to='/registerpage' style={{fontFamily: "Microsoft Sans Serif",color:"olivedrab", position: "absolute",right:"18.5%",top:"65%"}}>Sign up!</Link>
                </p>
                {/* <p style={{fontFamily: "Gilroy"}}><Link to="/">Back to Homepage</Link></p> */}
                <p style={{fontFamily: "Microsoft Sans Serif",color:"Black",position: "absolute",top:"70%",right:"32%",fontSize:"18px"}}><b>OR</b></p>
                <p style={{fontFamily: "Candara Light ",color:"Black",position: "absolute",top:"75%",right:"27%",fontSize:"24px"}}>Login With OTP</p>
                <input type="text" name="first_name" required style={{width:"400px",background:"gainsboro",position:"absolute",top:"83%",right:"18.5%",name:"Enter phone number"}} />
        </div>
    );
}