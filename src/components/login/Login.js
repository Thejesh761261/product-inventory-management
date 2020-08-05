import React from 'react';
import Header from '../header/Header';
import '../../App.css';
import { Redirect } from 'react-router-dom';

class Login extends React.Component{
    state={
        uname:'',
        pwd:'',
        loginSuccess:false,
    }
    handleUserNameChange(e)
    {
  this.setState({uname:e.target.value})
    }
    handlePasswordChange(e)
    {
        this.setState({pwd:e.target.value})
    }
    submit(e)
    {
    this.setState({loginSuccess:true})
    }
render()
{
    if (this.state.loginSuccess){
        this.setState({ loginSuccess: false });
        return <Redirect to={{ pathname : "/" , state : {
            isLoggedIn : true
        }}} />

    }
  
    return (
<div>
<div>
  <Header></Header>
  </div >
<div className="container c1" style={{width:'30%',align:'center'}}>

<h2 className="he1">User Login</h2>
<hr/>
<form onSubmit={this.submit.bind(this)}>
    <label htmlFor="uname"><b>Username</b></label><br/>
 <input type="text" className="inp" placeholder="Enter Username" name="uname" required onChange={this.handleUserNameChange.bind(this)}/><br/>

<label htmlFor="password"><b>Password</b></label><br/>
 <input type="password" className="inp" placeholder="Enter Password" name="password" required onChange={this.handlePasswordChange.bind(this)}/><br/>

 <label>
 <input type="checkbox" checked="checked" name="remember"/> Remember me
 </label><br />

 <button type="submit" className="l1">Login</button>


 <div className="f1" style={{backgroundcolor:"#f1f1f1"}}>
 <span className="fpwd">Forgot <a href="#">password?</a></span>
 </div>   
  </form>

</div> 
</div>     
    )
}

}

export default Login;