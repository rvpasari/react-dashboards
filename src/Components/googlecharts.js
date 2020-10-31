import React from 'react';
import Chart from "react-google-charts";


class GoogleCharts extends React.Component { 

    constructor(props) { 
        super(props);
        this.state = { 

        };

    }


    render(){
        return ( 
        <div style = {{display: 'flex', maxWidth: 900}}>
            <Chart 
                width={700}
                height={500}
                chartType="BarChart"
                loader={<div>Loading Chart</div>}
                data = {[
                    ["label", "value"], 
                    ["Venezuela",290],
                    ["Saudi",260], 
                    ["Canada",180],                        
                    ["Iran",140],                    
                    ["Russia",115],                       
                    ["UAE",100],                      
                    ["US",30],
                    ["China", 30],
                       
                ]}
                options={{
                    title: "Countries with the most oil reserves",
                    hAxis: {title: "Country", titleTextStyle: { color: '#333'} }, 
                    vAxis: { title: "Reserves (MMbbl)", minValue: 0 }, 
                    chartArea: {width: '50%', height: '70%'},
                    is3D: true, 
                }}
                legendToggle
            /> 

            <Chart 
                width={700}
                height={500}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data = {[
                    ["label", "value"], 
                    ["Venezuela",290],
                    ["Saudi",260], 
                    ["Canada",180],                        
                    ["Iran",140],                    
                    ["Russia",115],                       
                    ["UAE",100],                      
                    ["US",30],
                    ["China", 30],
                       
                ]}
                options={{
                    title: "Countries with the most oil reserves",
                    hAxis: {title: "Country", titleTextStyle: { color: '#333'} }, 
                    vAxis: { title: "Reserves (MMbbl)", minValue: 0 }, 
                    pieSliceText: 'label',
                    slices: { 
                        4: { offset: 0.2 },
                        6: { offset: 0.3 }, 
                    },
                    chartArea: {width: '50%', height: '70%'},
                    is3D: true, 
                }}
                legendToggle
            />   
        </div>
        );
    };

} 


export default GoogleCharts;