import React,{Component} from "react";
import {Link } from 'react-router-dom'



 class Session extends Component{
    constructor(props) {
        super(props)
     
     const token = localStorage.removeItem("emailuser");
     

     
     }
    render() {
        return(
            <div>
                <h1>You have been looged out !! </h1>
               <Link to="/Login">Try to login </Link>

            </div>
        )
    }
}
export default Session;