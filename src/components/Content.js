import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Homepage from './home/Homepage';
import Products from './product/Products';
import Register from './register/Register';
import Login from './login/Login';

class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            {/* Content goes here */}
            <Switch>
                <Route exact path='/' component={Homepage}></Route>    
                <Route path='/products' component={Products}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/login' component={Login}></Route>
            </Switch> 
            </div>
         );
    }
}
 
export default Content;