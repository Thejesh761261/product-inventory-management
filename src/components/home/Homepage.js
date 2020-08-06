import React from 'react';
import Products from '../product/Products';
import Dashboard from './Dashboard';
import InventoryHeader from '../header/InventoryHeader';
import SideNav from '../sideNavbar/Sidenav';
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
            <SideNav></SideNav>
        <div className="container">
           {/* {this.comp()} */}
           <Dashboard></Dashboard>
        </div>
    </div>
       
    )
}
}
 
export default Homepage;