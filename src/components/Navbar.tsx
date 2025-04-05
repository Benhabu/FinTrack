
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="w-full bg-white shadow-sm py-4 dark:bg-gray-800 dark:border-b dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-finance-blue-light rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="text-xl font-bold gradient-text dark:text-white">FinTrack</span>
        </Link>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="dark:text-gray-200 dark:hover:text-white">Features</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white dark:bg-gray-800">
                <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2 dark:text-gray-200">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/dashboard"
                        className="flex flex-col h-full w-full justify-between rounded-md bg-gradient-to-b from-finance-blue-light/20 to-finance-blue-dark/20 p-4 no-underline outline-none focus:shadow-md dark:from-blue-900/30 dark:to-blue-800/30"
                      >
                        <div className="mb-2 mt-2 text-lg font-medium">
                          Dashboard
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          View all your financial information at a glance with interactive charts and widgets
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link
                      to="/add-expense"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-gray-700"
                    >
                      <div className="text-sm font-medium leading-none">Expense Tracking</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Log and categorize your daily expenses
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/budget"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-gray-700"
                    >
                      <div className="text-sm font-medium leading-none">Budget Planning</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Set and monitor your monthly budget goals
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reports"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground dark:hover:bg-gray-700"
                    >
                      <div className="text-sm font-medium leading-none">Financial Reports</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Analyze your spending patterns with detailed reports
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/dashboard" className={navigationMenuTriggerStyle() + " dark:text-gray-200 dark:hover:text-white"}>
                Dashboard
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact" className={navigationMenuTriggerStyle() + " dark:text-gray-200 dark:hover:text-white"}>
                Contact
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {location.pathname !== "/signin" && (
            <Link to="/signin">
              <Button variant="outline" className="font-medium dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700">
                Sign In
              </Button>
            </Link>
          )}
          {location.pathname !== "/signup" && (
            <Link to="/signup">
              <Button className="bg-finance-blue-light hover:bg-finance-blue-dark text-white font-medium">
                Sign Up
              </Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
