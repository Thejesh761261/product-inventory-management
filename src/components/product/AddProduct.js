import React from 'react';
import '../../App.css';
import InventoryHeader from '../header/InventoryHeader';
import SideNav from '../sideNavbar/Sidenav';

class AddProduct extends React.Component {
    state = {  }
    render() { 
        return (
    <div>
    <InventoryHeader></InventoryHeader>
    <SideNav></SideNav>
    <h3 className="he1">Add Product</h3>
    <hr/>
    <div className="c2">
    <form  style={{bottom:'0px'}}>
    <label  ><b>Product Name</b></label>
    <input type="text" placeholder="Enter Productname" name="pname" required  />
    <label ><b>Product Code</b></label>
    <input type="text" placeholder="Enter ProductCode" name="lname" required />
     <label><b>Category</b></label>
    <input type="text" placeholder="Category" name="category" required />
    <label><b>Vendor</b></label>
    <input type="text" placeholder="Enter Vendor name" name="vendor" required />
    <label><b>Unit Price</b></label>
    <input type="number" placeholder="Unit Price value" name="uprice" required />

    <label ><b>Manufacturer</b></label>
    <input type="text" placeholder="Enter Manufacturer name" name="manufacturer" required />

    <label ><b>Description</b></label>
    <input type="text" placeholder="Enter Description" name="desc" required />
        
    <button type="submit" className="l1">Add Product</button>
    </form>
    </div>
</div>
          );
    }
}
 
export default AddProduct;