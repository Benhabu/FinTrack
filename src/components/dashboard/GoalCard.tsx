
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CalendarIcon } from 'lucide-react';

interface GoalCardProps {
  name: string;
  category: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
}

const GoalCard: React.FC<GoalCardProps> = ({
  name,
  category,
  targetAmount,
  currentAmount,
  targetDate,
}) => {
  const progress = Math.min((currentAmount / targetAmount) * 100, 100);
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Format date
  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  // Calculate days left
  const daysLeft = () => {
    const today = new Date();
    const target = new Date(targetDate);
    const diffTime = target.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days left` : 'Past due';
  };

  // Get category color
  const getCategoryColor = () => {
    switch(category) {
      case 'savings': return 'bg-finance-blue-light';
      case 'investment': return 'bg-finance-green';
      case 'debt': return 'bg-finance-red';
      case 'purchase': return 'bg-finance-purple';
      default: return 'bg-finance-yellow';
    }
  };

  return (
    <Card className="shadow-sm transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <div className={`inline-block px-2 py-1 rounded text-xs text-white font-medium mb-2 ${getCategoryColor()}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
            <CardTitle className="text-lg font-semibold">{name}</CardTitle>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon size={14} className="mr-1" />
            {formatDate(targetDate)}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <Progress value={progress} className="h-2" />
          
          <div className="flex justify-between text-sm">
            <span>{formatCurrency(currentAmount)}</span>
            <span className="font-medium">{formatCurrency(targetAmount)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-xs text-muted-foreground">{progress.toFixed(0)}% complete</span>
            <span className="text-xs text-muted-foreground">{daysLeft()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalCard;
