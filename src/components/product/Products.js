import React from 'react';
import '../../App.css';
import InventoryHeader from '../header/InventoryHeader';
import SideNav from '../sideNavbar/Sidenav';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from "react-router-dom";

class Products extends React.Component {
    state = { 
        products:[],
        tempProducts:[],
        editId:0,
        editClicked:false,
        searchValue:''
     }

     componentDidMount(){
       this.fetchProductDetails();
     }

     fetchProductDetails=()=>{
        axios.get('http://localhost:3000/products')
          .then(response=>{
            console.log(response.data);
            this.setState({products:response.data});
            this.setState({tempProducts:response.data});
            console.log(this.state.tempProducts);
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

     editHandler=(e)=>{
       console.log("in edit handler");
       this.setState({editId:e.target.id});
      this.setState({editClicked:true})
     }

     search=(e)=>{
        let value=e.target.value;
        if(value==''){
          this.fetchProductDetails();
          
        }
        else{
        this.setState({searchValue: value});
        let searchProd=this.state.tempProducts.filter(p=>{
          return p.name.toLowerCase().match(value.toLowerCase())||p.vendor.toLowerCase().match(value.toLowerCase())||p.category.toLowerCase().match(value.toLowerCase());
        })
        this.setState({products:searchProd});
      }

     }

    render() { 

      if(this.state.editClicked){
        this.setState({editClicked:false})
        console.log()
        return <Redirect to={{pathname:"/editProduct" ,state:{
          product:this.state.products.filter(p=>p.id==this.state.editId)
        }}}></Redirect>
      }
        return ( 
            <div  >
            
     
        <InventoryHeader></InventoryHeader>
            <SideNav></SideNav>
            <div className="container">
        <div > 
            <span>
                <h2 className="he1">Product Details</h2>
                <hr></hr>
            </span>
            <span style={{display: 'block',margin: '30px'}}>
                Product search &nbsp;
                <input type="search"  placeholder="Search....."  className="search" onChange={this.search} />
                <button className="btn btn-info">Toggle View</button>
                <Link to="/addProduct"><button className="addB" >Add Product</button></Link>
            </span>
        </div>
        <div className="d1">
            <table>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Manufacturer</th>
                  <th>Category</th>
                  <th>Vendor</th>
                  <th>Price per unit</th>
                  <th>Available Quantity</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  {this.state.products.map(product=>{
                    return (
                      <tr>
                 
                  <td>{product.name}</td>
                  <td>{product.manufacturer}</td>
                  <td>{product.category}</td>
                  <td>{product.vendor}</td>
                  <td>${product.unitPrice}</td>
                  <td>{product.quantity}</td>
                  <td><input type="button" id={product.id} value="Edit" className="b1" onClick={this.editHandler} /></td>
                  <td><input type="button" id={product.id} value="Delete" className="b1" onClick={this.deleteProduct} /></td>
                </tr>
             
                    )
                  })}
                
                </tbody>
              </table>
            </div>
        </div>
        </div>
     
         );
    }
}
 
export default Products;