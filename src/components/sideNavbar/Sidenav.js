import React from 'react';
import { Link } from 'react-router-dom';

class Sidenav extends React.Component {
    state = {  }
    render() { 
        return (  
            <div className="sidebar">
                <Link to="/"><p >Dashboard</p></Link> 
                <Link to="/products"><p>Product Details</p></Link>
               <Link to=""><p >News</p></Link>
               <Link to=""><p >Contact</p></Link>
              
             </div>
            
        );
    }
}
 
export default Sidenav;