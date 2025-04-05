
import React from 'react';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const AddExpense: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Expense added successfully!');
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Add New Expense</h1>
        
        <div className="max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Expense Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount ($)</Label>
                    <Input id="amount" placeholder="0.00" type="number" step="0.01" min="0" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input id="date" type="date" defaultValue={new Date().toISOString().split('T')[0]} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="housing">Housing</SelectItem>
                      <SelectItem value="food">Food</SelectItem>
                      <SelectItem value="transportation">Transportation</SelectItem>
                      <SelectItem value="utilities">Utilities</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="debt">Debt Payment</SelectItem>
                      <SelectItem value="shopping">Shopping</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input id="description" placeholder="What was this expense for?" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <Select>
                    <SelectTrigger id="paymentMethod">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="credit">Credit Card</SelectItem>
                      <SelectItem value="debit">Debit Card</SelectItem>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="transfer">Bank Transfer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Button type="submit" className="w-full bg-finance-blue-light hover:bg-finance-blue-dark">
                  Add Expense
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AddExpense;
