import React from 'react';
import Products from '../product/Products';
import Dashboard from './Dashboard';
import InventoryHeader from '../header/InventoryHeader';
import '../../App.css';

class Homepage extends React.Component {
    state={
        selected:''
    }
    sel(prop,e)
    {  console.log("p"+prop)
        this.setState({selected:prop})
       
    }
    comp()
    {  if(this.state.selected==="dashboard")
        return <Dashboard />
        else if(this.state.selected==="productdetails")
        return <Products />
        // else if (this.state.selected==="news")
        // return <News />
        // else if (this.state.selected==="cotact")
        // return <Contact />
        // else 
        // return <Help />

}
    
render()
{
    return (
        <div>
            <InventoryHeader></InventoryHeader>
            <div className="sidebar">
         <p onClick={this.sel.bind(this,'dashboard')}>Dashboard</p>
            <p onClick={this.sel.bind(this,'productdetails')}>Product Details</p>
            <p onClick={this.sel.bind(this,'news')}>News</p>
            <p onClick={this.sel.bind(this,'contact')}>Contact</p>
            <p onClick={this.sel.bind(this,'help')}>Help</p>
          </div>
        <div className="container">
           {this.comp()}
        </div>
    </div>
       
    )
}
}
 
export default Homepage;