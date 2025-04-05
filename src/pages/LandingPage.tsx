
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart2, PieChart, LineChart, Shield, Calendar } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="finance-card flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-finance-blue-light mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Take Control of Your <span className="gradient-text">Financial Life</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Track expenses, set budgets, and visualize your spending habits all in one place.
              Start your journey to financial freedom today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <Button size="lg" className="text-white bg-finance-blue-light hover:bg-finance-blue-dark">
                  Start for Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/signin">
                <Button size="lg" variant="outline">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-blue-200 rounded-full absolute top-0 left-0 -z-10 blur-3xl opacity-50"></div>
              <img 
                src="https://placehold.co/600x400/3B82F6/FFFFFF?text=Financial+Dashboard" 
                alt="Dashboard Preview" 
                className="rounded-lg shadow-xl max-w-md w-full animate-float" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your personal finances effectively
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<PieChart size={28} />}
              title="Expense Tracking"
              description="Easily log and categorize your expenses to understand where your money goes."
            />
            <FeatureCard
              icon={<BarChart2 size={28} />}
              title="Budget Planning"
              description="Create custom budgets for different spending categories and track your progress."
            />
            <FeatureCard
              icon={<LineChart size={28} />}
              title="Financial Reports"
              description="Visualize your spending patterns with intuitive charts and reports."
            />
            <FeatureCard
              icon={<Shield size={28} />}
              title="Secure Data"
              description="Your financial data is encrypted and securely stored for your peace of mind."
            />
            <FeatureCard
              icon={<Calendar size={28} />}
              title="Monthly Overview"
              description="Get a clear picture of your monthly income, expenses, and savings goals."
            />
            <div className="finance-card bg-gradient-to-br from-finance-blue-light to-finance-blue-dark text-white flex flex-col items-center text-center">
              <h3 className="text-xl font-semibold mb-4">Ready to start?</h3>
              <p className="mb-6">Join thousands of users who have transformed their financial habits</p>
              <Link to="/signup">
                <Button variant="secondary" size="lg">
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-10 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-finance-blue-light rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold gradient-text">FinTrack</span>
            </div>
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} FinTrack. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
