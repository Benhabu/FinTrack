
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { toast } from 'sonner';

const IncomeForm: React.FC = () => {
  const [amount, setAmount] = useState<string>('');
  const [source, setSource] = useState<string>('salary');
  const [date, setDate] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !date) {
      toast.error('Please fill in all required fields');
      return;
    }

    // In a real app, we would save this to a database
    const incomeData = {
      amount: parseFloat(amount),
      source,
      date,
    };

    console.log('Income added:', incomeData);
    toast.success('Income added successfully!');
    
    // Reset form
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="amount">Amount</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="pl-7"
            step="0.01"
            min="0"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="source">Source</Label>
        <Select value={source} onValueChange={setSource}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select income source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="salary">Salary</SelectItem>
            <SelectItem value="freelance">Freelance</SelectItem>
            <SelectItem value="investment">Investment</SelectItem>
            <SelectItem value="gift">Gift</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full bg-finance-blue-light hover:bg-finance-blue-dark">
        Add Income
      </Button>
    </form>
  );
};

export default IncomeForm;
