import React from 'react';
import {Link} from 'react-router-dom';

class Sidenav extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="sidebar">
                <Link to="/"><p >Dashboard</p></Link> 
                <Link to="/products"><p>Product Details</p></Link>
               <p >News</p>
               <p >Contact</p>
               <p >Help</p>
             </div>
            
        );
    }
}
 
export default Sidenav;