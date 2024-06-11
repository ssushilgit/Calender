import React from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BarGraphComponent = () => {
    const data = [
       
        { name: 'Jan', events: 1 },
        { name: 'Feb', events: 0 },
        { name: 'Mar', events: 0 },
        { name: 'Apr', events: 0 },
        { name: 'May', events: 0 },
        { name: 'June', events: 22 },
        { name: 'July', events: 2 },
        { name: 'Aug', events: 2 },
        { name: 'Sep', events: 4 },
        { name: 'Oct', events: 4 },
        { name: 'Nov', events: 3 },
        { name: 'Dec', events: 3 },
      ];
  return (
    <BarChart
          width={1000}
          height={300}
          data={data}
          margin={{
            top: 25,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="events" fill="#8884d8" activeBar={<Rectangle fill="skyblue" stroke="blue" />} />
        
        </BarChart>
  )
}

export default BarGraphComponent