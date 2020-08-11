import React from 'react';
import '../../App.css';
import InventoryHeader from '../header/InventoryHeader';
import SideNav from '../sideNavbar/Sidenav';
import Axios from 'axios';

class AddProduct extends React.Component {
    state = { 
        pname:'',
        nameError:false,
        pcode:'',
        codeError:false,
        category:'',
        categoryError:false,
        vendor:'',
        vendorError:false,
        price:0.0,
        priceError:false,
        quantity:0,
        quantityError:false,
        manufacturer:'',
        manufacutrerError:false,
        description:'',
        descriptionError:false,
        isSuccess:false,
        categories:[]
     }

     validate(){
         if(this.state.pname===''){
            this.setState({nameError:true})
         }
         if(this.state.pcode===''){
            this.setState({codeError:true})
         }
         if(this.state.category===''){
             this.setState({categoryError:true})
         }
         if(this.state.vendor===''){
            this.setState({vendorError:true})
        }
        if(this.state.price===0.0){
            this.setState({priceError:true})
        }
        if(this.state.quantity===0){
            this.setState({quantityError:true})
        }
        if(this.state.manufacturer===''){
            this.setState({manufacturerError:true})
        }
        if(this.state.description===''){
            this.setState({descriptionError:true})
        }
         
         else{
             return true;
         }
     }

     componentDidMount=()=>{
        Axios.get('http://localhost:3000/products')
            .then(response=>{
                console.log(response);
              response.data.map(p=>{
                  this.state.categories.push(p.category)
              })
             let arr= this.state.categories.filter((value, index, self) => self.indexOf(value) === index)
             this.setState({categories:arr});
              console.log(arr);  

            },error=>{
                console.log(error);
            })
     }

     nameChangeHandler=(e)=>{
        this.setState({pname : e.target.value});
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false})
     }

     codeChangeHandler=(e)=>{
        this.setState({pcode : e.target.value});
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false})
     }

     categoryChangeHandler=(e)=>{
        this.setState({category : e.target.value});
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false})
     }

     vendorChangeHandler=(e)=>{
        this.setState({vendor:e.target.value});
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false})
     }

     priceChangeHandler=(e)=>{
         console.log(e);
       this.setState({price:e.target.value});
       this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false})
     }

     quantityChangeHandler=(e)=>{
        this.setState({quantity:e.target.value});
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false})
      }

     manufacturerChangeHandler=(e)=>{
        this.setState({manufacturer:e.target.value})
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false})
     }

     descChangeHandler=(e)=>{
        this.setState({description:e.target.value})
        this.setState({nameError:false,codeError:false,categoryError:false,vendorError:false,priceError:false,quantityError:false,manufacturerError:false,descriptionError:false})
     }

     addProduct=(e)=>{
         e.preventDefault();
         let res=this.validate();
         console.log(this.state);
         if(res===true){
             res=false;
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
         
     }



    render() { 
        return (
    <div>
    <InventoryHeader></InventoryHeader>
    <SideNav></SideNav>
    <h3 className="he1">Add Product</h3>
    <hr/>
    <div className="c2">

        <form  style={{bottom:'0px'}}>
        <label  htmlFor="pname"><b>Product Name</b></label>
        <input type="text" placeholder="Enter Productname" name="pname" required  onChange={this.nameChangeHandler} />
        {this.state.nameError && (<h5 className="alert alert-danger">Enter valid product name</h5>)}
        <label htmlFor="pcode"><b>Product Code</b></label>
        <input type="text" placeholder="Enter ProductCode" name="pcode" required onChange={this.codeChangeHandler} />
        {this.state.codeError && (<h5 className="alert alert-danger">Enter valid product code</h5>)}
        <label htmlFor="category"><b>Category</b></label>
        <select name="Category" id="category" className="form-control" onChange={this.categoryChangeHandler}>
        {this.state.categories.map((s, i) => (
            <option key={i} defaultValue=' ' value={s}>
            {s}
            </option>
            ))}
        </select><br></br>
        {this.state.categoryError && (<h5 className="alert alert-danger">Enter valid category</h5>)}
        {/* <input type="select" placeholder="Category" name="category" required onChange={this.categoryChangeHandler} /> */}
        <label><b>Vendor</b></label>
        <input type="text" placeholder="Enter Vendor name" name="vendor" required onChange={this.vendorChangeHandler} />
        {this.state.vendorError && (<h5 className="alert alert-danger">Enter valid vendor name</h5>)}
        <label><b>Unit Price</b></label>
        <input type="text" placeholder="Unit Price value" name="uprice" required onChange={this.priceChangeHandler} />
        {this.state.priceError && (<h5 className="alert alert-danger">Enter valid price</h5>)}
        <label><b>Quantity</b></label>
        <input type="text" placeholder="Initial Quantity" name="quantity" required onChange={this.quantityChangeHandler} />

        {this.state.quantityError && (<h5 className="alert alert-danger">Enter valid quantity</h5>)}

        <label ><b>Manufacturer</b></label>
        <input type="text" placeholder="Enter Manufacturer name" name="manufacturer" required onChange={this.manufacturerChangeHandler} />
        {this.state.manufacturerError && (<h5 className="alert alert-danger">Enter valid manufacturer name</h5>)}

        <label ><b>Description</b></label>
        <input type="text" placeholder="Enter Description" name="desc" required onChange={this.descChangeHandler} />
        {this.state.descriptionError && (<h5 className="alert alert-danger">Enter valid product description</h5>)}
            
        <button type="submit" className="l1" onClick={this.addProduct.bind(this)}>Add Product</button>
        </form>
    </div>
    <div style={{textAlign:"center"}}>
             { this.state.isSuccess && (<h3 className="alert-sucess" style={{backgroundColor:"green",color:"white"}}>Product added successfully</h3>) }
         </div>
</div>
          );
    }
}
 
export default AddProduct;