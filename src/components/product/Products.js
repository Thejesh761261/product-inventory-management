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
        multiSearchProducts:[],
        editId:0,
        editClicked:false,
        searchValue:'',
        tableView:true,
        categories:[],
        manufacturer:[],
        products1:[]
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
            this.setState({multiSearchProducts:response.data});
            this.getCategories();
            this.getManufacturers();
            console.log(this.state.tempProducts);
          },error=>{
            console.log(error)
          })
     }

     getCategories(){
        this.state.products.map(p=>this.state.categories.push(p.category));
        let arr= this.state.categories.filter((value, index, self) => self.indexOf(value) === index)
        this.setState({categories:arr});
        console.log(arr);  
     }

     getManufacturers(){
      this.state.products.map(p=>this.state.manufacturer.push(p.manufacturer));
      let arr= this.state.manufacturer.filter((value, index, self) => self.indexOf(value) === index)
      this.setState({manufacturer:arr});
      console.log(arr);  
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

     toggleHandler=(e)=>{

      this.setState({tableView:!(this.state.tableView)});

     }

     editHandler=(e)=>{
       console.log("in edit handler");
       this.setState({editId:e.target.id});
      this.setState({editClicked:true})
     }

     categoryChangeHandler=(e)=>{
      document.getElementById("manufacturer").value="Choose Manufacturer";
      let value = e.target.value;
      if(value==="Choose Category"){
        this.fetchProductDetails();
      }else{
        let searchProd=this.state.multiSearchProducts.filter(p=>{
          return p.category.toLowerCase().match(value.toLowerCase());
        })
        // this.setState({multiSearchProducts:searchProd},()=>console.log(this.state.multiSearchProducts))
        this.setState({products:searchProd});
        this.setState({products1:searchProd});
      }

     }

     manufacturerChangeHandler=(e)=>{
      let value = e.target.value;
      let fullProducts = this.state.products1;
      console.log(fullProducts);
      if(value==="Choose Manufacturer"){
        this.fetchProductDetails();
      }else{
        let searchProd=fullProducts.filter(p=>{
          return p.manufacturer.toLowerCase().match(value.toLowerCase());
        })
        // this.setState({multiSearchProducts:searchProd})
        this.setState({products:searchProd},()=>console.log(this.state.products));
      }
     }

     search=(e)=>{
      document.getElementById("manufacturer").value="Choose Manufacturer";
      document.getElementById("category").value="Choose Category";
        let value=e.target.value;
        if(value==''){
          this.fetchProductDetails();
          
        }
        else{
        this.setState({searchValue: value});
        let searchProd=this.state.tempProducts.filter(p=>{
          return p.name.toLowerCase().match(value.toLowerCase())||p.vendor.toLowerCase().match(value.toLowerCase())||p.category.toLowerCase().match(value.toLowerCase())||p.manufacturer.toLowerCase().match(value.toLowerCase());
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
          
            <div style={{overflowY: "auto"}}>
     
        <InventoryHeader></InventoryHeader>
            <SideNav></SideNav>
            
               <div className="" style={{marginLeft:"16%",marginRight:"2%",marginTop:"1%"}}>
               <div > 
                   <span>
                       <h2 className="he1">Product Details</h2>
                       <hr></hr>
                   </span>
                  
                   <span style={{display: 'inline block',margin: '3rem'}}>
                   
                       Product search &nbsp;
                       <input type="search"  placeholder="Search....."  className="search" onChange={this.search} />&nbsp;
                       <select name="Category" id="category" className="form-control" style={{width:"15rem",display:"inline"}} onChange={this.categoryChangeHandler}>
                       <option value="Choose Category">Choose Category</option>
                          {this.state.categories.map((s, i) => (
                              <option key={i} defaultValue='' value={s}>
                              {s}
                              </option>
                              ))}
                          </select>&nbsp;
                       <select name="Manufacturer" id="manufacturer" className="form-control" style={{width:"15rem",display:"inline"}} onChange={this.manufacturerChangeHandler}>
                       <option value="Choose Manufacturer">Choose Manufacturer</option>
                          {this.state.manufacturer.map((s, i) => (
                              <option key={i} defaultValue='' value={s}>
                              {s}
                              </option>
                              ))}
                          </select>
                          
                       <button className="btn btn-info" style={{marginLeft:"2rem"}} onClick={this.toggleHandler}>Toggle View</button>

                       <Link to="/addProduct"><button className="addB" >Add Product</button></Link>
                   </span>
               </div>
              {this.state.tableView && (
               <div className="d1">
                   <table>
                     <thead>
                       <tr>
                         <th>Product Name</th>
                         <th>Manufacturer</th>
                         <th>Category</th>
                         <th>Vendor</th>
                         <th>Price per unit</th>
                         <th>Available Stock</th>
                         {/* <th>Size</th> */}
                         <th>Color</th>
                         <th></th>
                         <th></th>
                       </tr>
                     </thead>
                     <tbody>
                         {this.state.products.map(product=>{
                           return (
                             <tr>
                                <td>{product.name.toUpperCase()}</td>
                                <td>{product.manufacturer.toUpperCase()}</td>
                                <td>{product.category.toUpperCase()}</td>
                                <td>{product.vendor.toUpperCase()}</td>
                                <td>${product.unitPrice}</td>
                                <td>{product.quantity}</td>
                                {/* <td>{product.size}</td> */}
                                <td><div style={{backgroundColor:product.color,borderRadius:"50%",height:"1rem",width:"1rem"}}></div></td>
                                <td><input type="button" id={product.id} value="Edit" className="b1" onClick={this.editHandler} /></td>
                                <td><input type="button" id={product.id} value="Delete" className="b1" onClick={this.deleteProduct} /></td>
                       </tr>
                    
                           )
                         })}
                       
                       </tbody>
                     </table>
                   </div>
                     )}
               </div>
          
           {!this.state.tableView && (
             
              <div className="container cards" >
              {this.state.products.map(product=>
                 (
                  
                    <div className="card" style={{boxShadow: "0px 10px 30px 0px rgba(153,153,153,0.4)"}}>
                      {/* <img class="card-img-top" src="..." alt="Card image cap"></img> */}
                      <div className="card-body">
                        {/* <h5 class="card-title">Card title</h5> */}
                        <p className="card-text"><b>Name:</b> {product.name.toUpperCase()}</p>
                        <p className="card-text"><b>Manufacturer:</b> {product.manufacturer.toUpperCase()}</p>
                        <p className="card-text"><b>Category:</b> {product.category.toUpperCase()}</p>
                        <p className="card-text"><b>Vendor: </b>{product.vendor.toUpperCase()}</p>
                        <p className="card-text"><b>Price:</b> ${product.unitPrice}</p>
                        <p className="card-text"><b>Quantity: </b>{product.quantity}</p>
                        <p className="card-text"><b>Color: </b>{product.color}</p>
                        <button className="btn btn-success b1" style={{ margin:"2rem"}} id={product.id} value="Edit" onClick={this.editHandler}>Edit</button>
                        <button className="btn btn-success b1" id={product.id} value="Delete" onClick={this.deleteProduct}>Delete</button>
                      </div>
                  </div>
                 
                 )
              )}
               </div>
      
           )}
        </div>
       
          
     
         );
    }
}
 
export default Products;