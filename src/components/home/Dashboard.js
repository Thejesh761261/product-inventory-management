import React from 'react';
import '../../App.css';
import stat from '../../assets/home.png';

class Dashboard extends React.Component{
    render()
    {
        return(
             <div>
            <h2 style={{zindex: '3',marginleft:'15%'}} className="he1">Sales Analysis</h2>
            <hr/>
            <img src={stat} alt="img" style={{height:' 80%',width: '80%',marginleft: '15%',margintop: '-5%',zindex: '0'}} />
            </div>
        );
    }

}

export default Dashboard;