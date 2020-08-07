import React from 'react';
import '../../App.css';
import InventoryHeader from '../header/InventoryHeader';
import SideNav from '../sideNavbar/Sidenav';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Products extends React.Component {
    state = { 
        products:[]
     }

     componentDidMount(){
       this.fetchProductDetails();
     }

     fetchProductDetails=()=>{
        axios.get('http://localhost:3000/products')
          .then(response=>{
            console.log(response.data);
            this.setState({products:response.data});
            console.log(this.state.products);
          },error=>{
            console.log(error)
          })
     }

     deleteProduct=(event)=>{
        console.log(event.target.id);
        let id = event.target.id;
        axios.delete('http://localhost:3000/products/'+id)
          .then(response=>{
            console.log("Deletion Success");
            this.fetchProductDetails();
          },error=>{
            console.log("error occurred");
          })
     }

     editHandler=()=>{
       console.log("in edit handler");
      return <Redirect to={{ pathname : "/editProduct" }} />
     }
    render() { 
        return ( 
            <div  >
            
     
        <InventoryHeader></InventoryHeader>
            <SideNav></SideNav>
            <div className="container">
        {/* <h2 style={{zindex: '3',marginleft:'15%'}} className="he1">Product Details</h2>
        <hr></hr> */}
        <div > 
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
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Vendor</th>
                  <th>Price per unit</th>
                  <th>Available Quantity</th>
                  <th></th>
                  <th></th>
                </tr>
                  {this.state.products.map(product=>{
                    return (
                      <tr>
                 
                  <td>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.vendor}</td>
                  <td>${product.unitPrice}</td>
                  <td>{product.quantity}</td>
                  <td><input type="button" id={product.id} value="Edit" className="b1" onClick={this.editHandler} /></td>
                  <td><input type="button" id={product.id} value="Delete" className="b1" onClick={this.deleteProduct} /></td>
                </tr>
                    )
                  })}
                
               
              </table>
            </div>
        </div>
        </div>
     
         );
    }
}
 
export default Products;