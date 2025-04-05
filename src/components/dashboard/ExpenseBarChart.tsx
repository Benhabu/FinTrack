
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ExpenseBarChartProps {
  data: {
    name: string;
    amount: number;
  }[];
}

const ExpenseBarChart: React.FC<ExpenseBarChartProps> = ({ data }) => {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
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
          <Tooltip formatter={(value: number) => [`$${value}`, 'Amount']} />
          <Bar dataKey="amount" fill="#3B82F6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ExpenseBarChart;
