
import React, { useState } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, PieChart, LineChart } from 'recharts';
import { 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip as RechartsTooltip, 
  Legend, 
  ResponsiveContainer,
  Pie, 
  Cell,
  Line
} from 'recharts';

const monthlyData = [
  { name: 'Jan', income: 4000, expenses: 2400 },
  { name: 'Feb', income: 3000, expenses: 2800 },
  { name: 'Mar', income: 4500, expenses: 2600 },
  { name: 'Apr', income: 3800, expenses: 3000 },
  { name: 'May', income: 4200, expenses: 2900 },
  { name: 'Jun', income: 5000, expenses: 3200 },
];

const categoryData = [
  { name: 'Housing', value: 1200 },
  { name: 'Food', value: 600 },
  { name: 'Transportation', value: 300 },
  { name: 'Entertainment', value: 200 },
  { name: 'Utilities', value: 350 },
  { name: 'Others', value: 250 },
];

const savingsData = [
  { name: 'Jan', savings: 1600 },
  { name: 'Feb', savings: 200 },
  { name: 'Mar', savings: 1900 },
  { name: 'Apr', savings: 800 },
  { name: 'May', savings: 1300 },
  { name: 'Jun', savings: 1800 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const Reports: React.FC = () => {
  const [timePeriod, setTimePeriod] = useState('monthly');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashboardSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Financial Reports</h1>
        
        <div className="mb-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="expense">Expenses</TabsTrigger>
              <TabsTrigger value="savings">Savings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Income vs. Expenses</CardTitle>
                    <CardDescription>
                      Your financial balance over time
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={monthlyData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <RechartsTooltip />
                          <Legend />
                          <Bar dataKey="income" fill="#8884d8" name="Income" />
                          <Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Expense Breakdown</CardTitle>
                    <CardDescription>
                      Distribution of your expenses by category
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={categoryData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {categoryData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <RechartsTooltip />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="expense">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Expense Trends</CardTitle>
                  <CardDescription>
                    How your spending has changed over time
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={monthlyData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Bar dataKey="expenses" fill="#ff8042" name="Expenses" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="savings">
              <Card>
                <CardHeader>
                  <CardTitle>Savings Growth</CardTitle>
                  <CardDescription>
                    Track your savings progress over time
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={savingsData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <RechartsTooltip />
                        <Legend />
                        <Line 
                          type="monotone" 
                          dataKey="savings" 
                          stroke="#8884d8" 
                          activeDot={{ r: 8 }} 
                          name="Savings"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Financial Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Total Income (6 months)</dt>
                  <dd className="text-sm font-semibold">$24,500</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Total Expenses (6 months)</dt>
                  <dd className="text-sm font-semibold">$16,900</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Net Savings</dt>
                  <dd className="text-sm font-semibold text-green-600">$7,600</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Average Monthly Savings</dt>
                  <dd className="text-sm font-semibold text-green-600">$1,266</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm font-medium text-gray-500">Savings Rate</dt>
                  <dd className="text-sm font-semibold text-green-600">31%</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Top Spending Categories</CardTitle>
              <CardDescription>Where most of your money is going</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Housing</span>
                  <span className="text-sm font-semibold">$1,200 (41%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '41%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Food</span>
                  <span className="text-sm font-semibold">$600 (21%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '21%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Utilities</span>
                  <span className="text-sm font-semibold">$350 (12%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '12%' }}></div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="font-medium">Transportation</span>
                  <span className="text-sm font-semibold">$300 (10%)</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-orange-500 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
