import React,{useState} from 'react' ;
import axios from 'axios';
import { Form , Button , Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from '../Compenent/Header';




class Register extends Component {
  
  
  const [emailuser ,processEmail] = useState("");
  const [passworduser ,processPassword] =useState("");
  const [nameuser ,processName] =useState("");
  const  loggedIn =false;

const save =() =>{
 var infouser = {
 "name":nameuser,
  "email":emailuser,
  "password":passworduser
 };

 const url = "http://localhost:3000/users";
axios.post(url ,infouser)
const name=localStorage.getItem("emailuser",nameuser)


}

render(){

return(
  
  <>
  <Col >
 
  
  <Header />
  <h2>Auto-layout for flexbox grid columns also means you can set the width</h2>
  <p>Atlassian is a leading provider of collaboration software for teams with products including JIRA, Confluence, HipChat, Bitbucket and Stash.</p>
  </Col>
  <Col>
  <Form className="d-grid gap-2 mt-5">
 
  <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" onChange={obj=>processName(obj.target.value)} placeholder="Enter Name" />

       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" onChange={obj=>processEmail(obj.target.value)} placeholder="Enter email" />

       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" onChange={obj=>processPassword(obj.target.value)} placeholder="Password" />
          </Form.Group>
          <Link to="/Login" >already have an Account ?</Link>
<Button  onClick={save}  variant="success"  >
  Submit
</Button>

       </Form>
       </Col>
      </>

)
}
}

export default  Register ;

{/* <div>
<h1>Add New Users</h1>
<table id="newuser">
 <tr>
  <th>Email</th>
  <td>
    <input type="text" className="inputbox" onChange={obj=>processEmail(obj.target.value)}/>
  </td>
 </tr>
 <tr>
  <th>password</th>
  <td>
    <input type="text" className="inputbox"  onChange={obj=>processPassword(obj.target.value)}/>
  </td>
 </tr>


 <tr>
  <th>
    <button onClick={save}> save users</button>
  </th>
 
  
 </tr>
</table>




 
  


</div> */}