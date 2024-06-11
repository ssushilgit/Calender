import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const LineChartComponent = () => {

  const data = [
    { name: '' },
    { name: 'Jan', users: 6 },
    { name: 'Feb', users: 1 },
    { name: 'Mar', users: 3 },
    { name: 'Apr', users: 0 },
    { name: 'May', users: 0 },
    { name: 'June', users: 22 },
    { name: 'July', users: 0 },
    { name: 'Aug', users: 0 },
    { name: 'Sep', users: 0 },
    { name: 'Oct', users: 0 },
    { name: 'Nov', users: 0 },
    { name: 'Dec', users: 0 },
  ];


  return (
    <LineChart
      width={450}
      height={250}
      data={data}
      margin={{
        top: 35,
        right: 30,
        left: 5,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="users" stroke="#8884d8"  />

    </LineChart>
  )
}

export default LineChartComponent