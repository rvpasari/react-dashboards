import logo from './logo.svg';
import './App.css';

import React from "react"; 
import ReactFC from 'react-fusioncharts'; 
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import GoogleCharts from './Components/googlecharts';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartData = [
  {
    label: "Venezuela",
    value: "290"
  },
  {
    label: "Saudi",
    value: "260"
  },
  {
    label: "Canada",
    value: "180"
  },
  {
    label: "Iran",
    value: "140"
  },
  {
    label: "Russia",
    value: "115"
  },
  {
    label: "UAE",
    value: "100"
  },
  {
    label: "US",
    value: "30"
  },
  {
    label: "China",
    value: "30"
  }
];


const chartConfigs = { 

  type: "column2d", 
  width: "700", 
  height: '400',
  dataFormat: "json",
  dataSource: { 
    chart: { 
      caption: "Countries with the most oil reserves", 
      subCaption: "In MMbbl = One Million barrels", 
      xAxisName: "Country", 
      yAxisName: "Reserves (MMbbl)", 
      numberSuffix: "K", 
      theme: "fusion"
    },
    data: chartData
  }
};

class App extends React.Component { 
  render() { 
    //return (<ReactFC {...chartConfigs}/>);
    return (<GoogleCharts />);
  }
}

export default App;

