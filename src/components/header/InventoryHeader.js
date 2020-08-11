import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

class InventoryHeader extends React.Component {
    state = {  }

    logoutHandler=()=>{
      sessionStorage.setItem("loggedInUser","");
    }
    render() { 
        return ( 
            <div className="inventoryHeader">
      
      <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor:'lightgray'}}>
          <b className="navbar-brand">Inventory Management</b>
          <p style={{marginTop:"1%"}}><i>Welcome {sessionStorage.getItem('loggedInUser')}!!!</i></p>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav"  style={{backgroundColor:'lightgray',border:'none',color:"black"}}>
            {/* <li className="nav-item">Dashboard</li>
            <li className="nav-item">Products</li> */}
                                              
          </ul>
          </div>
          <Link to="/"><p style={{color:'black',textDecoration:'none',float:'right'}} tabIndex="-1" onClick={this.logoutHandler}> Logout</p></Link>
  </nav>
  
  </div>
         );
    }
}
 
export default InventoryHeader;