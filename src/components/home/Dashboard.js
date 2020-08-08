import React from 'react';
import '../../App.css';
import stat from '../../assets/home.png';
import Chart from 'react-google-charts';
import axios from 'axios';

class Dashboard extends React.Component{

    state={
        products:[],
        chart1:[
            ["category","quantity"]
        ]
    }

    componentDidMount=()=>{
        this.fetchDetails();
    }

    fetchDetails=()=>{
        axios.get('http://localhost:3000/products')
            .then(response=>{
            console.log(response.data);
            this.setState({products:response.data},()=>{
                this.state.products.map(p=>{
                    this.state.chart1.push([p.category,p.quantity])
                })
            });
            console.log(this.state.chart1);
            console.log(this.state.products);
            },error=>{
            console.log(error)
        })
    }

    render()
    {
        return(
             <div>
            <h2 style={{zindex: '3',marginleft:'15%'}} className="he1">Sales Analysis</h2>
            <hr/>
            <img src={stat} alt="img" style={{height:' 80%',width: '80%',marginleft: '15%',margintop: '-5%',zindex: '0'}} />
            <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="Bar"
          data={this.state.chart1}
          width="100%"
          height="400px"
          legendToggle
        />
      </div>
            </div>
        );
    }

}

export default Dashboard;