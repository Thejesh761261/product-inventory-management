import React from 'react';
import '../../App.css';
import InventoryHeader from '../header/InventoryHeader';
import SideNav from '../sideNavbar/Sidenav';
import Axios from 'axios';

class AddProduct extends React.Component {
    state = { 
        pname:'',
        pcode:'',
        category:'',
        vendor:'',
        price:0.0,
        quantity:0,
        manufacturer:'',
        description:'',
        isSuccess:false
     }

     nameChangeHandler=(e)=>{
        this.setState({pname : e.target.value});
     }

     codeChangeHandler=(e)=>{
        this.setState({pcode : e.target.value});
     }

     categoryChangeHandler=(e)=>{
        this.setState({category : e.target.value});
     }

     vendorChangeHandler=(e)=>{
        this.setState({vendor:e.target.value});
     }

     priceChangeHandler=(e)=>{
         console.log(e);
       this.setState({price:e.target.value});
     }

     quantityChangeHandler=(e)=>{
        this.setState({quantity:e.target.value});
      }

     manufacturerChangeHandler=(e)=>{
        this.setState({manufacturer:e.target.value})
     }

     descChangeHandler=(e)=>{
        this.setState({description:e.target.value})
     }

     addProduct=(e)=>{
         e.preventDefault();
         console.log(this.state);
         let data={
             "code":this.state.pcode,
             "name":this.state.pname,
             "category":this.state.category,
             "vendor":this.state.vendor,
             "unitPrice":parseFloat(this.state.price),
             "manufacturer":this.state.manufacturer,
             "description":this.state.description,
             "quantity":parseInt(this.state.quantity)
         }

         console.log(data);

         Axios.post('http://localhost:3000/products',data)
            .then(response=>{
                console.log(response);
                this.setState({isSuccess:true});
            },error=>{
                console.log(error);
            })
     }



    render() { 
        return (
    <div>
    <InventoryHeader></InventoryHeader>
    <SideNav></SideNav>
    <h3 className="he1">Add Product</h3>
    <hr/>
    <div style={{textAlign:"center"}}>
        { this.state.isSuccess && (<h3 className="alert-sucess" style={{backgroundColor:"green",color:"white"}}>Product edited successfully</h3>) }
    </div>
   
    <div className="c2">
    <form  style={{bottom:'0px'}}>
    <label  ><b>Product Name</b></label>
    <input type="text" placeholder="Enter Productname" name="pname" required  onChange={this.nameChangeHandler} />
    <label ><b>Product Code</b></label>
    <input type="text" placeholder="Enter ProductCode" name="pcode" required onChange={this.codeChangeHandler} />
     <label><b>Category</b></label>
    <input type="text" placeholder="Category" name="category" required onChange={this.categoryChangeHandler} />
    <label><b>Vendor</b></label>
    <input type="text" placeholder="Enter Vendor name" name="vendor" required onChange={this.vendorChangeHandler} />
    <label><b>Unit Price</b></label>
    <input type="text" placeholder="Unit Price value" name="uprice" required onChange={this.priceChangeHandler} />
    <label><b>Quantity</b></label>
    <input type="text" placeholder="Initial Quantity" name="quantity" required onChange={this.quantityChangeHandler} />

    <label ><b>Manufacturer</b></label>
    <input type="text" placeholder="Enter Manufacturer name" name="manufacturer" required onChange={this.manufacturerChangeHandler} />

    <label ><b>Description</b></label>
    <input type="text" placeholder="Enter Description" name="desc" required onChange={this.descChangeHandler} />
        
    <button type="submit" className="l1" onClick={this.addProduct.bind(this)}>Add Product</button>
    </form>
    </div>
   
</div>
          );
    }
}
 
export default AddProduct;