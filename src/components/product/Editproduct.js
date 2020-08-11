import React from 'react';
import '../../App.css';
import InventoryHeader from '../header/InventoryHeader';
import SideNav from '../sideNavbar/Sidenav';
import Axios from 'axios';

class EditProduct extends React.Component {

    state = { 
        pname:'',
        id:0,
        pcode:'',
        category:'',
        vendor:'',
        price:0.0,
        quantity:0,
        manufacturer:'',
        description:'',
        isSuccess:false
     }
   

     componentDidMount=()=>{
        
        
         console.log(this.props.location.state.product[0])
        //  if(this.props.location.state.product===undefined){
        //     return (<h1>404</h1>)
        // }
        this.setState({
            pname:this.props.location.state.product[0].name,
            id:this.props.location.state.product[0].id,
            pcode:this.props.location.state.product[0].code,
            category:this.props.location.state.product[0].category,
            vendor:this.props.location.state.product[0].vendor,
            price:this.props.location.state.product[0].unitPrice,
            quantity:this.props.location.state.product[0].quantity,
            manufacturer:this.props.location.state.product[0].manufacturer,
            description:this.props.location.state.product[0].description
        },()=>console.log(this.state))         
        
     }
     nameChangeHandler=(e)=>{
         console.log(e.target.value)
        this.setState({pname : e.target.value});
     }

     codeChangeHandler=(e)=>{
        console.log(e.target.value)
        this.setState({pcode : e.target.value});
     }

     categoryChangeHandler=(e)=>{
        this.setState({category : e.target.value});
     }

     vendorChangeHandler=(e)=>{
        this.setState({vendor:e.target.value});
     }

     priceChangeHandler=(e)=>{
       this.setState({price:e.target.value})
     }

     quantityChangeHandler=(e)=>{
        this.setState({quantity:e.target.value})
      }

     manufacturerChangeHandler=(e)=>{
        this.setState({manufacturer:e.target.value})
     }

     descChangeHandler=(e)=>{
        this.setState({description:e.target.value})
     }

     editProduct=(e)=>{
         e.preventDefault();
         console.log(this.state)
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

         Axios.put('http://localhost:3000/products/'+this.state.id,data)
            .then(response=>{
                console.log(response);
                this.setState({isSuccess:true});
            },error=>{
                console.log(error);
            })
     }



    render() { 
        if(this.props.location.state === undefined){
            return (
                <div>
                    <h1>Please navigate from products page!!!! </h1>
                </div>
            )
        }
        return (
    <div>
    <InventoryHeader></InventoryHeader>
    <SideNav></SideNav>
    <h3 className="he1">Edit Product</h3>
    <hr/>
    <div className="c2">
    <form  style={{bottom:'0px'}}>
    <label  ><b>Product Name</b></label>
    <input type="text" placeholder="Enter Productname" name="pname" defaultValue={this.state.pname} required  onChange={this.nameChangeHandler} />
    <label ><b>Product Code</b></label>
    <input type="text" placeholder="Enter ProductCode" name="pcode" value={this.state.pcode} required onChange={this.codeChangeHandler} />
     <label><b>Category</b></label>
    <input type="text" placeholder="Category" name="category" value={this.state.category} required onChange={this.categoryChangeHandler} />
    <label><b>Vendor</b></label>
    <input type="text" placeholder="Enter Vendor name" name="vendor" value={this.state.vendor} required="required" onChange={this.vendorChangeHandler} />
    <label><b>Unit Price</b></label>
    <input type="number" placeholder="Unit Price value" name="uprice" value={this.state.price} required onChange={this.priceChangeHandler} />
    <label><b>Quantity</b></label>
    <input type="number" placeholder="Initial Quantity" name="quantity" value={this.state.quantity} required onChange={this.quantityChangeHandler} />

    <label ><b>Manufacturer</b></label>
    <input type="text" placeholder="Enter Manufacturer name" name="manufacturer" value={this.state.manufacturer} required onChange={this.manufacturerChangeHandler} />

    <label ><b>Description</b></label>
    <input type="text" placeholder="Enter Description" name="desc" value={this.state.description} required onChange={this.descChangeHandler} />
        
    <button type="submit" className="btn btn-success" onClick={this.editProduct}>Edit Product</button>
       {/* <Link to="/products"> <button  className="btn btn-info">Cancel</button></Link> */}
    </form>
    </div>
    <div style={{textAlign:"center"}}>
        { this.state.isSuccess && (<h3 className="alert-sucess" style={{backgroundColor:"green",color:"white"}}>Product edited successfully</h3>) }
    </div>
</div>
          );
    }
}
 
export default EditProduct;