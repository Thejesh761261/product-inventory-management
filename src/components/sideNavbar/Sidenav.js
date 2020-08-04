import React from 'react';

class Sidenav extends React.Component {
    state = {  }
    render() { 
        return (  
            <div style={{float:"left"}}>Sidenav
            <h2>{this.props.data}</h2>
            </div>
            
        );
    }
}
 
export default Sidenav;