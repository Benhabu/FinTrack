
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface BalanceLineChartProps {
  data: {
    name: string;
    balance: number;
  }[];
}

const BalanceLineChart: React.FC<BalanceLineChartProps> = ({ data }) => {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
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
          <Tooltip formatter={(value: number) => [`$${value}`, 'Balance']} />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceLineChart;
