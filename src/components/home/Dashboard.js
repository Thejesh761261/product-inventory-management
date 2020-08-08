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
        ],
        categories:[]
    }

    componentDidMount=()=>{
        this.fetchDetails();
    }

    fetchDetails=()=>{
        axios.get('http://localhost:3000/products')
            .then(response=>{
            console.log(response.data);
            this.setState({products:response.data});
            response.data.map(p=>{
                this.state.categories.push(p.category)
            })
           let arr= this.state.categories.filter((value, index, self) => self.indexOf(value) === index)
           console.log(arr);
        //    this.setState({categories:arr});
        arr.map(c=>{
            console.log(c)
            let quantity=[];
            quantity=this.state.products.filter(p=>p.category===c)
            console.log(quantity);
            let temp=0;
            let sum=quantity.map(q=>{
                 temp=q.quantity+temp;
            },0);

            this.state.chart1.push([c,parseInt(temp)]);
        })
        console.log(this.state.chart1)

            // this.setState({products:response.data},()=>{
            //     this.state.products.map(p=>{
            //         this.state.chart1.push([p.category,p.quantity])
            //     })
            // });
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
            <h2 style={{zindex: '3',marginleft:'15%'}} className="he1">Inventory Dashboard</h2>
            <hr/>
            {/* <img src={stat} alt="img" style={{height:' 80%',width: '80%',marginleft: '15%',margintop: '-5%',zindex: '0'}} /> */}
            <div className={"my-pretty-chart-container"}>
        <Chart
          chartType="Bar"
          loader={<div>Loading Chart</div>}
          data={this.state.chart1}
          options={{
            // Material design options
            chart: {
              title: 'Present available quantity ',
              subtitle: 'Present inventory quantity'
            },
          }}
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