
import React, { useState } from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { PlusCircle, MinusCircle, Save } from 'lucide-react';
import { toast } from 'sonner';

interface BudgetCategory {
  id: string;
  name: string;
  allocated: number;
  spent: number;
}

const BudgetPlanner: React.FC = () => {
  const [totalBudget, setTotalBudget] = useState(2000);
  const [categories, setCategories] = useState<BudgetCategory[]>([
    { id: '1', name: 'Housing', allocated: 800, spent: 750 },
    { id: '2', name: 'Food', allocated: 400, spent: 350 },
    { id: '3', name: 'Transportation', allocated: 200, spent: 180 },
    { id: '4', name: 'Entertainment', allocated: 150, spent: 120 },
    { id: '5', name: 'Utilities', allocated: 200, spent: 190 },
    { id: '6', name: 'Savings', allocated: 250, spent: 250 },
  ]);
  const [newCategory, setNewCategory] = useState('');
  const [newAllocation, setNewAllocation] = useState('');

  const calculateTotalAllocated = () => {
    return categories.reduce((sum, category) => sum + category.allocated, 0);
  };

  const calculateTotalSpent = () => {
    return categories.reduce((sum, category) => sum + category.spent, 0);
  };

  const remainingBudget = totalBudget - calculateTotalAllocated();
  const totalSpent = calculateTotalSpent();
  const totalAllocated = calculateTotalAllocated();

  const addCategory = () => {
    if (!newCategory) {
      toast.error('Please enter a category name');
      return;
    }
    
    const allocation = Number(newAllocation) || 0;
    
    if (allocation <= 0) {
      toast.error('Please enter a valid allocation amount');
      return;
    }
    
    if (allocation > remainingBudget) {
      toast.error(`You only have $${remainingBudget} left to allocate`);
      return;
    }
    
    const newCat: BudgetCategory = {
      id: Date.now().toString(),
      name: newCategory,
      allocated: allocation,
      spent: 0
    };
    
    setCategories([...categories, newCat]);
    setNewCategory('');
    setNewAllocation('');
    toast.success('Category added successfully');
  };

  const removeCategory = (id: string) => {
    setCategories(categories.filter(cat => cat.id !== id));
    toast.success('Category removed');
  };

  const saveBudget = () => {
    toast.success('Budget plan saved successfully');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <DashboardSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Budget Planner</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Monthly Budget Categories</CardTitle>
              <CardDescription>Manage your monthly budget allocations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {categories.map((category) => (
                  <div key={category.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{category.name}</span>
                        <div className="text-sm text-muted-foreground">
                          ${category.spent} spent of ${category.allocated}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">
                          {Math.round((category.spent / category.allocated) * 100)}%
                        </span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => removeCategory(category.id)}
                          className="h-8 w-8 text-red-500"
                        >
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <Progress 
                      value={(category.spent / category.allocated) * 100} 
                      className={category.spent > category.allocated ? "bg-red-100" : ""}
                    />
                  </div>
                ))}
                
                <div className="pt-4 border-t">
                  <div className="flex gap-2 mb-4">
                    <div className="flex-1">
                      <Label htmlFor="newCategory">New Category</Label>
                      <Input
                        id="newCategory"
                        value={newCategory}
                        onChange={(e) => setNewCategory(e.target.value)}
                        placeholder="e.g., Groceries"
                      />
                    </div>
                    <div className="w-1/3">
                      <Label htmlFor="newAllocation">Allocation ($)</Label>
                      <Input
                        id="newAllocation"
                        type="number"
                        value={newAllocation}
                        onChange={(e) => setNewAllocation(e.target.value)}
                        placeholder="Amount"
                      />
                    </div>
                    <div className="flex items-end">
                      <Button onClick={addCategory} className="bg-finance-blue-light hover:bg-finance-blue-dark">
                        <PlusCircle className="h-4 w-4 mr-1" /> Add
                      </Button>
                    </div>
                  </div>
                  
                  <Button onClick={saveBudget} className="w-full bg-finance-blue-light hover:bg-finance-blue-dark">
                    <Save className="h-4 w-4 mr-1" /> Save Budget Plan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Total Budget</span>
                      <span className="font-medium">${totalBudget}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Input
                        type="number"
                        value={totalBudget}
                        onChange={(e) => setTotalBudget(Number(e.target.value))}
                        className="w-full"
                      />
                      <Button 
                        variant="outline" 
                        onClick={() => {
                          setTotalBudget(totalBudget);
                          toast.success('Budget updated');
                        }}
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t space-y-2">
                    <div className="flex justify-between">
                      <span>Allocated</span>
                      <span className="font-medium">${totalAllocated}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Spent</span>
                      <span className="font-medium text-orange-500">${totalSpent}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Remaining to Allocate</span>
                      <span className={`font-medium ${remainingBudget < 0 ? 'text-red-500' : 'text-green-500'}`}>
                        ${remainingBudget}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Remaining to Spend</span>
                      <span className={`font-medium ${(totalBudget - totalSpent) < 0 ? 'text-red-500' : 'text-green-500'}`}>
                        ${totalBudget - totalSpent}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Budget Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <div className="h-2 w-2 mt-1.5 rounded-full bg-green-500" />
                    <p>Aim to save at least 20% of your income</p>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-2 w-2 mt-1.5 rounded-full bg-green-500" />
                    <p>Track all expenses, even small ones</p>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-2 w-2 mt-1.5 rounded-full bg-green-500" />
                    <p>Review and adjust your budget monthly</p>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-2 w-2 mt-1.5 rounded-full bg-green-500" />
                    <p>Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;
