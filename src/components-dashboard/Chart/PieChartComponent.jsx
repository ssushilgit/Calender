import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts'

const PieChartComponent = () => {
  const data = [
    { name: "Todo", value: 37 },
    { name: "In progress", value: 34 },
    { name: "Completed", value: 34 },
    { name: "Backlogs", value: 19 },
  ]

  // Define colors for each name
  const colors = {
    "Todo": "#FFC107",
    "In progress": "#03A9F4",
    "Completed": "#4CAF50",
    "Backlogs": "#FF5722"
  }

  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[entry.name]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  )
}

export default PieChartComponent
