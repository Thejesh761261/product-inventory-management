  
import React from 'react';
import '../../App.css';
import Header from '../header/Header';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


const SIGNUP_SUCCESS = "Signup successful."

const SIGNUP_ERROR = "Please try again later."

function passwordValidate(pass) {
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})");
    if (strongRegex.test(pass)) {
        return false;
    }
    else {
        return true;
    }
}

function validate(state) {
    const errors = [];
  
    if (state.firstName === "") {

        errors.push("First name is required")
    }
    if (state.lastName === "") {

        errors.push("Last name is required")
    }
    if (state.dob === "" || state.dob === '0001-01-01') {

        errors.push("DOB is required")
    }
    if (state.mobile === "") {

        errors.push("Mobile Number is required")
    }
    if (state.email.length < 5) {

        errors.push("Email should be at least 5 charcters long");
    }
    if (state.email.split("").filter(x => x === "@").length !== 1) {

        errors.push("Email should contain a @");
    }
    if (state.email.indexOf(".") === -1) {

        errors.push("Email should contain at least one dot");
    }

    if (state.password.length < 6 || passwordValidate(state.password)) {

        errors.push("Password should be at least 6 characters long");
    }

    return errors;
}
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            hiddenPassword: true,
            signupSuccess: false,
            signupError: false,
            firstName: '',
            lastName: '',
            dob: '',
            mobile: '',
            confirmpassword:'',
            error:false,
            errors:[]
        }

    }
    handleEmailChange = (eve) => {
        this.setState({ email: eve.target.value });
    }
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }
    handleConfirmPasswordChange = (e) => {
        this.setState({ confirmpassword: e.target.value });
    }
    handleFirstNameChange = (e) => {
        if (e.target.value.match("^[A-Za-z]*$") != null) {
            this.setState({ firstName: e.target.value })
        }
        else {
            this.setState({ error: 'Enter a valid firstname' })
        }

    }
    handleLastNameChange = (ev) => {
        if (ev.target.value.match("^[A-Za-z]*$") != null) {
            this.setState({ lastName: ev.target.value })
        }
    }
    handleDobChange = (e) => {
        this.setState({ dob: e.target.value })
    }
    handleMobileChange = (event) => {
        this.setState({ mobile: event.target.value })
    }
    togglePassword = (e) => {
        this.setState({ hiddenPassword: !this.state.hiddenPassword });
    }
     
        handleSubmit(event)
        {
            event.preventDefault();
            const errors=validate(this.state);
            this.setState({errors:errors});
            if(errors.length>0){
                console.log("errors")
                console.log(errors);
                this.setState({error:true});
            }else{
                console.log("success")
                this.setState({signupSuccess:true})
                let data={
                    "email":this.state.email,
                    "password":this.state.password,
                    "name":this.state.firstName+" "+this.state.lastName,
                    "dob":this.state.dob,
                    "phone":this.state.phone
    
                };
                console.log(data);
                axios.post('http://localhost:3000/login',data)
                    .then(resp=>{
                        console.log(resp);
                        return <Redirect to={{
                            pathname: "/", state: {
                                isLoggedIn: true
                            }
                        }} />
                    },error=>{
                        console.log("error");
                        console.log(error);
                    })
            }
          
        }

    

    render() {


        return (<React.Fragment>
    <Header></Header>
    <div className="container c1" style={{width:'30%',align:'center'}}>

    <h3 className="he1">User Signup</h3>
    <hr/>
    <form onSubmit={this.handleSubmit.bind(this)}  style={{bottom:'0px'}} noValidate>
    <label htmlFor="fname" ><b>First Name</b></label>
    <input type="text" placeholder="Enter Firstname" name="fname" required  onChange={this.handleFirstNameChange.bind(this) }/>
    <label htmlFor="lname"><b>Last Name</b></label>
    <input type="text" placeholder="Enter Lastname" name="lname" required onChange={this.handleLastNameChange.bind(this) }/>
     <label htmlFor="email"><b>Email</b></label>
    <input type="email" placeholder="This will be your Username" name="uname" required onChange={this.handleLastNameChange.bind(this) }/>

    <label htmlFor="dob"><b>Date Of Birth</b></label>
    <input type="date" placeholder="Enter Username" name="dob" required onChange={this.handleDobChange.bind(this) }/>

    <label htmlFor="pno"><b>Phone Number</b></label>
    <input type="number" placeholder="Enter 10 digit phone number" name="pno" minLength="10" maxLength="10" required onChange={this.handleMobileChange.bind(this) }/>

    <label htmlFor="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" required onChange={this.handlePasswordChange.bind(this) } />

    <label htmlFor="conpwd"><b>Confirm Password</b></label>
    <input type="password" placeholder="Re-enter Password" name="conpwd" required onChange={this.handleConfirmPasswordChange.bind(this) } />

    {/* <label>
        <input type="checkbox" checked="checked" name="remember" required /> I accept the <a href="#">terms and conditions</a>
      </label> */}

        {this.state.error===true && (<div className="alert-danger">{this.state.errors}</div>)}
        {this.state.signupSuccess===true && (<div className="alert alert-success">Signup Success! Please Login</div>)}
    <button type="submit" className="l1">Signup</button>
    </form>
</div>
</React.Fragment>
            
        );
           
    }
}

export default Register;