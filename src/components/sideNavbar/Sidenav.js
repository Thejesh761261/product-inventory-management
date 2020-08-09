import React from 'react';
import { Link } from 'react-router-dom';

class Sidenav extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="sidebar">
                <Link to="/home"><p >Dashboard</p></Link> 
                <Link to="/products"><p>Product Details</p></Link>
               <Link to="/home"><p >News</p></Link>
               <Link to="/home"><p >Contact</p></Link>
              
             </div>
            
        );
    }
}
 
export default Sidenav;