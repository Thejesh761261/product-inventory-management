import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

class Header extends React.Component {
    render() { 
        const menuitem = {
            color:"red",
            display:'inline',
            padding: '10px',
            margin: '5px'
            
        }


        return (  
            <div>
            <nav className="navbar navbar-expand-sm navbar-light" style={{backgroundColor:'lightgray'}}>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul style={{listStyleType:'none'}}>
                    <li style={menuitem}>
                        <Link to="/" style={{ textDecoration:'none'}}>Home</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/register" style={{ textDecoration:'none'}}>Register</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/login" style={{ textDecoration:'none'}}>Login</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/products" style={{ textDecoration:'none'}}>News</Link>
                    </li>
                    <li style={menuitem}>
                        <Link to="/products" style={{ textDecoration:'none'}}>About</Link>
                    </li>
                </ul>
                </div>          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
                <a style={{color:'black',textDecoration:'none'}} tabIndex="-1" >Inventory Management</a>
            </nav>
            </div>

        );
    }
}
 
export default Header;