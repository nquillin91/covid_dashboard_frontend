import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';
  // schema
//   name: 'Page A',
//   uv: 590,
//   pv: 800,
//   amt: 1400,
//   cnt: 490,

interface Props {
   data: any
}
export default class ScatterChart extends PureComponent<Props> {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div style={{ width: "100%", height: 600 }}>
                <ResponsiveContainer>
                <ComposedChart
          width={500}
          height={400}
          data={this.props.data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="pv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          <Scatter dataKey="cnt" fill="red" />
        </ComposedChart>  
                </ResponsiveContainer>
            </div>
        )
    }
}
