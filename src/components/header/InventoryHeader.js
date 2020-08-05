import React from 'react';
import '../../App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class InventoryHeader extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
      
      <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor:'lightgray',height:"20%"}}>
    <button className="navbar-brand" style={{height:'50px',border:'none',backgroundColor:'lightgray',float:'left'}}>Inventory Management</button>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="nav navbar-nav"  style={{backgroundColor:'lightgray',border:'none'}}>
              <li>Welcome!!!</li>
                      
                        
            </ul>
    </div>
    <a style={{color:'black',textDecoration:'none',float:'right'}} tabIndex="-1" > Logout</a>
  </nav>
  
  </div>
         );
    }
}
 
export default InventoryHeader;