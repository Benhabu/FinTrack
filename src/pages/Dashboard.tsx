
import React, { useState } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import StatCard from '@/components/dashboard/StatCard';
import ExpenseChart from '@/components/dashboard/ExpenseChart';
import ExpenseBarChart from '@/components/dashboard/ExpenseBarChart';
import BalanceLineChart from '@/components/dashboard/BalanceLineChart';
import { DollarSign, TrendingUp, ArrowDownRight, CreditCard, Plus } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from '@/components/ui/button';
import GoalCard from '@/components/dashboard/GoalCard';
import IncomeForm from '@/components/dashboard/IncomeForm';
import GoalForm from '@/components/dashboard/GoalForm';

// Mock data for charts
const expenseCategoryData = [
  { name: 'Housing', value: 1200, color: '#3B82F6' },
  { name: 'Food', value: 450, color: '#10B981' },
  { name: 'Transportation', value: 300, color: '#F59E0B' },
  { name: 'Entertainment', value: 200, color: '#8B5CF6' },
  { name: 'Utilities', value: 180, color: '#EF4444' },
  { name: 'Others', value: 120, color: '#6B7280' },
];

const monthlyExpensesData = [
  { name: 'Jan', amount: 2100 },
  { name: 'Feb', amount: 2300 },
  { name: 'Mar', amount: 2000 },
  { name: 'Apr', amount: 2780 },
  { name: 'May', amount: 2390 },
  { name: 'Jun', amount: 2490 },
];

const balanceData = [
  { name: 'Jan', balance: 5200 },
  { name: 'Feb', balance: 5800 },
  { name: 'Mar', balance: 6700 },
  { name: 'Apr', balance: 7200 },
  { name: 'May', balance: 8100 },
  { name: 'Jun', balance: 9000 },
];

// Mock data for goals
const mockGoals = [
  {
    name: 'Emergency Fund',
    category: 'savings',
    targetAmount: 10000,
    currentAmount: 5000,
    targetDate: '2025-12-31',
  },
  {
    name: 'New Car',
    category: 'purchase',
    targetAmount: 35000,
    currentAmount: 12000,
    targetDate: '2026-06-15',
  },
  {
    name: 'Student Loan',
    category: 'debt',
    targetAmount: 20000,
    currentAmount: 15000,
    targetDate: '2025-08-01',
  }
];

const Dashboard: React.FC = () => {
  const [showIncomeForm, setShowIncomeForm] = useState(false);
  const [showGoalForm, setShowGoalForm] = useState(false);
  
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardSidebar />
      
      <div className="flex-1 p-8 overflow-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold dark:text-white">Welcome, Sarah!</h1>
          <p className="text-gray-600 dark:text-gray-400">Here's an overview of your finances</p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Monthly Income" 
            value="$5,000.00" 
            icon={<DollarSign size={24} />}
            trend={{ value: '8% from last month', positive: true }}
          />
          <StatCard 
            title="Total Expenses" 
            value="$2,450.00" 
            icon={<ArrowDownRight size={24} />}
            trend={{ value: '5% from last month', positive: false }}
          />
          <StatCard 
            title="Total Savings" 
            value="$2,550.00" 
            icon={<TrendingUp size={24} />}
            trend={{ value: '12% from last month', positive: true }}
          />
          <StatCard 
            title="Largest Expense" 
            value="Housing: $1,200" 
            icon={<CreditCard size={24} />}
          />
        </div>
        
        {/* Income and Goals Tabs */}
        <div className="mb-8">
          <Tabs defaultValue="income" className="w-full">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="income">Income</TabsTrigger>
                <TabsTrigger value="goals">Financial Goals</TabsTrigger>
              </TabsList>
              
              {!showIncomeForm && !showGoalForm && (
                <Button 
                  onClick={() => {
                    if (document.querySelector('[data-state="active"]')?.getAttribute('value') === 'income') {
                      setShowIncomeForm(true);
                    } else {
                      setShowGoalForm(true);
                    }
                  }}
                  size="sm"
                  className="bg-finance-blue-light hover:bg-finance-blue-dark"
                >
                  <Plus size={16} className="mr-1" />
                  {document.querySelector('[data-state="active"]')?.getAttribute('value') === 'income' ? 'Add Income' : 'Add Goal'}
                </Button>
              )}
            </div>
            
            <TabsContent value="income" className="bg-white dark:bg-gray-800 rounded-lg shadow p-5">
              {showIncomeForm ? (
                <div>
                  <h3 className="text-lg font-semibold mb-4 dark:text-white">Add New Income</h3>
                  <IncomeForm />
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowIncomeForm(false)} 
                    className="mt-4"
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold mb-4 dark:text-white">Recent Income</h3>
                  <div className="text-center text-gray-500 py-8 dark:text-gray-400">
                    <p>You haven't added any income yet.</p>
                    <Button 
                      variant="outline" 
                      onClick={() => setShowIncomeForm(true)}
                      className="mt-2"
                    >
                      <Plus size={16} className="mr-1" />
                      Add Your First Income
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="goals" className="space-y-4">
              {showGoalForm ? (
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white">Add New Financial Goal</h3>
                  <GoalForm />
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowGoalForm(false)} 
                    className="mt-4"
                  >
                    Cancel
                  </Button>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockGoals.map((goal, index) => (
                      <GoalCard
                        key={index}
                        name={goal.name}
                        category={goal.category}
                        targetAmount={goal.targetAmount}
                        currentAmount={goal.currentAmount}
                        targetDate={goal.targetDate}
                      />
                    ))}
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="finance-card dark:bg-gray-800 dark:text-white">
            <h2 className="text-xl font-semibold mb-4">Expense Categories</h2>
            <ExpenseChart data={expenseCategoryData} />
          </div>
          
          <div className="finance-card dark:bg-gray-800 dark:text-white">
            <h2 className="text-xl font-semibold mb-4">Monthly Expenses</h2>
            <ExpenseBarChart data={monthlyExpensesData} />
          </div>
        </div>
        
        <div className="finance-card dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-semibold mb-4">Balance Over Time</h2>
          <BalanceLineChart data={balanceData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
