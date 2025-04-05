
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from 'sonner';

const GoalForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [targetAmount, setTargetAmount] = useState<string>('');
  const [currentAmount, setCurrentAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('savings');
  const [date, setDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !targetAmount || !date) {
      toast.error('Please fill in all required fields');
      return;
    }

    // In a real app, we would save this to a database
    const goalData = {
      name,
      targetAmount: parseFloat(targetAmount),
      currentAmount: parseFloat(currentAmount) || 0,
      category,
      targetDate: date
    };

    console.log('Goal added:', goalData);
    toast.success('Financial goal added successfully!');
    
    // Reset form
    setName('');
    setTargetAmount('');
    setCurrentAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Goal Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Car, Emergency Fund, etc."
          required
        />
      </div>

      <div>
        <Label htmlFor="category">Category</Label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select goal category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="savings">Savings</SelectItem>
            <SelectItem value="investment">Investment</SelectItem>
            <SelectItem value="debt">Debt Repayment</SelectItem>
            <SelectItem value="purchase">Major Purchase</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="targetAmount">Target Amount</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <Input
            id="targetAmount"
            type="number"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            placeholder="0.00"
            className="pl-7"
            step="0.01"
            min="0"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="currentAmount">Current Progress (Optional)</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <Input
            id="currentAmount"
            type="number"
            value={currentAmount}
            onChange={(e) => setCurrentAmount(e.target.value)}
            placeholder="0.00"
            className="pl-7"
            step="0.01"
            min="0"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="date">Target Date</Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full bg-finance-blue-light hover:bg-finance-blue-dark">
        Add Goal
      </Button>
    </form>
  );
};

export default GoalForm;
