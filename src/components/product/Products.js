import React from 'react';
import '../../App.css';
import InventoryHeader from '../header/InventoryHeader';
import SideNav from '../sideNavbar/Sidenav';
import { Link } from 'react-router-dom';

class Products extends React.Component {
    state = { 
        products:[]
     }
    render() { 
        return ( 
            <div >
            
     
        <InventoryHeader></InventoryHeader>
            <SideNav></SideNav>
            <div className="container">
        {/* <h2 style={{zindex: '3',marginleft:'15%'}} className="he1">Product Details</h2>
        <hr></hr> */}
        <div className="d1">
            <span>
                <h2 className="he1">Product Details</h2>
                <hr></hr>
            </span>
            <span style={{display: 'block',margin: '30px'}}>
                Product search &nbsp;
                <input type="search"  placeholder="Search....." className="search" />
                <Link to="/addProduct"><button className="addB" >Add Product</button></Link>
            </span>
        </div>
        <div className="d1">
            <table>
                <tr>
                  <th>Date</th>
                  <th>Product Name</th>
                  <th>Product Description</th>
                  <th>Category</th>
                  <th>Price per unit</th>
                  <th>Available Quantity</th>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>20-02-2020 05:34</td>
                  <td>Trouser</td>
                  <td>xyz</td>
                  <td>Clothing</td>
                  <td>$150</td>
                  <td>240</td>
                  <td><input type="button" value="Edit" className="b1"/></td>
                  <td><input type="button" value="Delete" className="b1"/></td>
                </tr>
                <tr>
                    <td>20-02-2020 05:34</td>
                    <td>Shoes</td>
                    <td>xyz</td>
                    <td>Footware</td>
                    <td>$150</td>
                    <td>240</td>
                    <td><input type="button" value="Edit" className="b1"/></td>
                    <td><input type="button" value="Delete" className="b1"/></td>
                  </tr>
                  <tr>
                    <td>20-02-2020 05:34</td>
                    <td>Trouser</td>
                    <td>xyz</td>
                    <td>Clothing</td>
                    <td>$150</td>
                    <td>240</td>
                    <td><input type="button" value="Edit" className="b1"/></td>
                    <td><input type="button" value="Delete" className="b1"/></td>
                  </tr>
                  <tr>
                    <td>20-02-2020 05:34</td>
                    <td>Shoes</td>
                    <td>xyz</td>
                    <td>Footware</td>
                    <td>$150</td>
                    <td>240</td>
                    <td><input type="button" value="Edit" className="b1"/></td>
                    <td><input type="button" value="Delete" className="b1"/></td>
                  </tr>
                  <tr>
                    <td>20-02-2020 05:34</td>
                    <td>Trouser</td>
                    <td>xyz</td>
                    <td>Clothing</td>
                    <td>$150</td>
                    <td>240</td>
                    <td><input type="button" value="Edit" className="b1"/></td>
                    <td><input type="button" value="Delete" className="b1"/></td>
                  </tr>
                  <tr>
                    <td>20-02-2020 05:34</td>
                    <td>Trouser</td>
                    <td>xyz</td>
                    <td>Clothing</td>
                    <td>$150</td>
                    <td>240</td>
                    <td><input type="button" value="Edit" className="b1"/></td>
                    <td><input type="button" value="Delete" className="b1"/></td>
                  </tr>
                  <tr>
                    <td>20-02-2020 05:34</td>
                    <td>Trouser</td>
                    <td>xyz</td>
                    <td>Clothing</td>
                    <td>$150</td>
                    <td>240</td>
                    <td><input type="button" value="Edit" className="b1"/></td>
                    <td><input type="button" value="Delete" className="b1"/></td>
                  </tr>
                  <tr>
                    <td>20-02-2020 05:34</td>
                    <td>Trouser</td>
                    <td>xyz</td>
                    <td>Clothing</td>
                    <td>$150</td>
                    <td>240</td>
                    <td><input type="button" value="Edit" className="b1"/></td>
                    <td><input type="button" value="Delete" className="b1"/></td>
                  </tr>
                  <tr>
                    <td>20-02-2020 05:34</td>
                    <td>Trouser</td>
                    <td>xyz</td>
                    <td>Clothing</td>
                    <td>$150</td>
                    <td>240</td>
                    <td><input type="button" value="Edit" className="b1"/></td>
                    <td><input type="button" value="Delete" className="b1"/></td>
                  </tr>
                  <tr>
                    <td>20-02-2020 05:34</td>
                    <td>Trouser</td>
                    <td>xyz</td>
                    <td>Clothing</td>
                    <td>$150</td>
                    <td>240</td>
                    <td><input type="button" value="Edit" className="b1"/></td>
                    <td><input type="button" value="Delete" className="b1"/></td>
                  </tr>
                  <tr>
                    <td>20-02-2020 05:34</td>
                    <td>Trouser</td>
                    <td>xyz</td>
                    <td>Clothing</td>
                    <td>$150</td>
                    <td>240</td>
                    <td><input type="button" value="Edit" className="b1"/></td>
                    <td><input type="button" value="Delete" className="b1"/></td>
                  </tr>
                
               
              </table>
            </div>
        </div>
        </div>
     
         );
    }
}
 
export default Products;