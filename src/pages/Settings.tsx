
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardSidebar from '@/components/DashboardSidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';
import { useTheme } from '@/context/ThemeContext';

const Settings: React.FC = () => {
  const [email, setEmail] = useState('johndoe@example.com');
  const [name, setName] = useState('John Doe');
  const [notifications, setNotifications] = useState(true);
  const [currency, setCurrency] = useState('USD');
  const { theme, toggleTheme } = useTheme();

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Profile updated successfully!');
  };

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Preferences updated successfully!');
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <DashboardSidebar />
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">Settings</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Profile Settings</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Update your personal information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="dark:text-gray-200">Full Name</Label>
                  <Input 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="dark:text-gray-200">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                
                <div className="pt-2">
                  <Button type="submit" className="bg-finance-blue-light hover:bg-finance-blue-dark">
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          <Card className="dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="dark:text-white">Preferences</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Customize your account settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSavePreferences} className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications" className="dark:text-gray-200">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      Receive email updates about your account
                    </p>
                  </div>
                  <Switch 
                    id="notifications" 
                    checked={notifications} 
                    onCheckedChange={setNotifications} 
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="darkMode" className="dark:text-gray-200">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      Switch to dark theme
                    </p>
                  </div>
                  <Switch 
                    id="darkMode" 
                    checked={theme === 'dark'} 
                    onCheckedChange={toggleTheme} 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="currency" className="dark:text-gray-200">Preferred Currency</Label>
                  <select 
                    id="currency" 
                    value={currency} 
                    onChange={(e) => setCurrency(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="USD">US Dollar ($)</option>
                    <option value="EUR">Euro (€)</option>
                    <option value="GBP">British Pound (£)</option>
                    <option value="JPY">Japanese Yen (¥)</option>
                  </select>
                </div>
                
                <Button type="submit" className="bg-finance-blue-light hover:bg-finance-blue-dark">
                  Save Preferences
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2 dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-red-500">Danger Zone</CardTitle>
              <CardDescription className="dark:text-gray-400">
                Irreversible actions for your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-100 rounded-lg p-4 dark:bg-red-900/20 dark:border-red-800">
                  <h3 className="font-medium mb-1 dark:text-white">Delete Account</h3>
                  <p className="text-sm text-muted-foreground mb-3 dark:text-gray-400">
                    This will permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <Button variant="destructive">Delete Account</Button>
                </div>
                
                <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 dark:bg-orange-900/10 dark:border-orange-800/30">
                  <h3 className="font-medium mb-1 dark:text-white">Export Data</h3>
                  <p className="text-sm text-muted-foreground mb-3 dark:text-gray-400">
                    Download a copy of all your financial data.
                  </p>
                  <Button variant="outline" className="dark:border-gray-600 dark:text-gray-200">Export Data</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
