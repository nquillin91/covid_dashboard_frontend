import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
  // scheme
//   name: 'Page G',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100

export default class LineChartComp extends PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{ width: "100%", height: 600 }}>
                <ResponsiveContainer>
                <LineChart
          width={500}
          height={300}
          data={this.props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" name={this.props.uvName} dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" name={this.props.pvName} dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>  
                </ResponsiveContainer>
            </div>
        )
    }
}
