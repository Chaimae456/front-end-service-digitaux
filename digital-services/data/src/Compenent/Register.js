import React,{Component} from 'react' ;
import axios from 'axios';
import { Form , Button , Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Compenent/Header';
import { Link,Redirect } from 'react-router-dom';






class AddUser extends Component {






   constructor(props) {
   super(props)
let loggedIn =false;

 this.state = {
   name:'',
   email:'',
   password:'',
    loggedIn
  
  }
  this.onChange = this.onChange.bind(this)
  this.SubmitForm = this.SubmitForm.bind(this)
}





  onChange(e){
    this.setState({
     [e.target.name]:e.target.value

    })

  }
  
  SubmitForm(e){
 e.preventDefault()
 const{name,email,password}=this.state
 
if(email !==''){
     localStorage.setItem("token","data")
     localStorage.setItem("emailuser",email)
  const url = "http://localhost:8000/users";
axios.post(url ,this.state={
name,password,email
})

this.setState({
loggedIn:true
})
}else{
  console.log("error")
}


  }



 
render(){
 if (this.state.loggedIn){
    return <Redirect to="/session"/>
  }
return(
  
  <>
  <Col >

  
  <Header />
  <h2>Auto-layout for flexbox grid columns also means you can set the width</h2>
  <p>Atlassian is a leading provider of collaboration software for teams with products including JIRA, Confluence, HipChat, Bitbucket and Stash.</p>
  </Col>
  <Col>
  <Form className="d-grid gap-2 mt-5" onSubmit={this.SubmitForm}>
 
  <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" name="name" onChange={this.onChange} value={this.state.name}  placeholder="Enter Name" required />

       </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" name="email" onChange={this.onChange} value={this.state.email} placeholder="Enter email" required />

       </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" name="password" onChange={this.onChange} value={this.state.password} placeholder="Password" required />
          </Form.Group>
          <Link to="/Login" >already have an Account ?</Link>
<Button  variant="success" type="submit" >
  Submit
</Button>

       </Form>
       </Col>
      </>

)
}
}
export default AddUser;

