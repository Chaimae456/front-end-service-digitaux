import React,{Component} from "react";
import {Link } from 'react-router-dom'
import {Redirect} from "react-router-dom"



 class Session extends Component{
    constructor(props) {
        super(props)
    
      const email=localStorage.getItem("emailuser");


     let loggedIn =true;
     if(email == null){
         loggedIn = false;
     }
     this.state={
         loggedIn
     }
     }
     
    render() {
        if (this.state.loggedIn === false){
            return <Redirect to="/Login"/>
          }
        return(
            <div>
                 

                <h1> welcome  {localStorage.getItem("emailuser")}</h1>
                <Link  to="/logout">logout</Link>

            </div>
        )
    }
}
export default Session;