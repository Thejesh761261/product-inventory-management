import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

class InventoryHeader extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="inventoryHeader">
      
      <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor:'lightgray',height:"20%"}}>
    <button className="navbar-brand" style={{height:'50px',border:'none',backgroundColor:'lightgray',float:'left'}}>Inventory Management</button>
    <button className="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="nav navbar-nav"  style={{backgroundColor:'lightgray',border:'none'}}>
        <li>Welcome {sessionStorage.getItem('loggedInUser')}!!!</li>
                      
                        
            </ul>
    </div>
    <Link to="/login" ><p style={{color:'black',textDecoration:'none',float:'right'}} tabIndex="-1" > Logout</p></Link>
  </nav>
  
  </div>
         );
    }
}
 
export default InventoryHeader;