import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Homepage from './home/Homepage';
import Products from './product/Products';
import Register from './register/Register';
import Login from './login/Login';
import AddProduct from './product/AddProduct';
import EditProduct from './product/Editproduct';

class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            {/* Content goes here */}
            <Switch>
                <Route exact path='/' component={Login}></Route>    
                <Route path='/products' component={Products}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/addProduct' component={AddProduct}></Route>
                <Route path='/editProduct' component={EditProduct}></Route>
                <Route path='/home' component={Homepage}></Route>
            </Switch> 
            </div>
         );
    }
}
 
export default Content;