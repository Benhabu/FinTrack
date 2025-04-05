
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, PieChart, DollarSign, BarChart, Settings, LogOut } from 'lucide-react';
import { toast } from 'sonner';
import ThemeToggle from './ThemeToggle';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, to, isActive }) => {
  return (
    <Link 
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        isActive 
          ? 'bg-white text-finance-blue-dark font-medium dark:bg-gray-800 dark:text-white' 
          : 'text-white/90 hover:bg-white/10'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const DashboardSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', to: '/dashboard' },
    { icon: <DollarSign size={20} />, label: 'Add Expense', to: '/add-expense' },
    { icon: <BarChart size={20} />, label: 'Budget Planner', to: '/budget' },
    { icon: <PieChart size={20} />, label: 'Reports', to: '/reports' },
    { icon: <Settings size={20} />, label: 'Settings', to: '/settings' },
  ];

  const handleLogout = () => {
    // Here you would handle actual logout functionality
    toast.success('Logged out successfully');
    // Redirect to home page after logout
    setTimeout(() => {
      navigate('/');
    }, 1000);
  };

  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-finance-blue-light to-finance-blue-dark p-4 flex flex-col dark:from-gray-800 dark:to-gray-900">
      <div className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
            <span className="text-finance-blue-dark font-bold text-lg">F</span>
          </div>
          <span className="text-xl font-bold text-white">FinTrack</span>
        </div>
        <ThemeToggle />
      </div>
      
      <div className="mt-8 flex flex-col gap-1 flex-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.to}
            icon={item.icon}
            label={item.label}
            to={item.to}
            isActive={pathname === item.to}
          />
        ))}
      </div>
      
      <button 
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 mt-auto text-white/90 hover:bg-white/10 rounded-lg transition-all"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default DashboardSidebar;
