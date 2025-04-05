
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, className = '' }) => {
  return (
    <Card className={`shadow-md ${className}`}>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {trend && (
              <p className={`text-sm mt-2 ${trend.positive ? 'text-finance-green' : 'text-finance-red'} flex items-center`}>
                <span className={`mr-1 ${trend.positive ? 'rotate-0' : 'rotate-180'}`}>
                  ↑
                </span>
                {trend.value}
              </p>
            )}
          </div>
          <div className="p-3 rounded-full bg-blue-100 text-finance-blue-light">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
