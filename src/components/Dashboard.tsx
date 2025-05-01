
import React from 'react';
import ProfileSidebar from './dashboard/ProfileSidebar';
import ContentFeed from './dashboard/ContentFeed';
import NavigationSidebar from './dashboard/NavigationSidebar';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  
  // Extract user data from Supabase user object
  const userData = {
    name: user?.user_metadata?.name || 'User',
    email: user?.email || '',
    university: user?.user_metadata?.university || '',
    isLoggedIn: !!user
  };

  return (
    <div className="min-h-screen bg-c2c-dark flex flex-col md:flex-row">
      {/* Profile sidebar - displayed on left for medium screens and above */}
      <div className="hidden md:block md:w-1/5 lg:w-1/6 xl:w-1/5">
        <ProfileSidebar userData={userData} />
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        <ContentFeed />
      </div>
      
      {/* Navigation sidebar - right side */}
      <div className="hidden md:block md:w-1/5 lg:w-1/6 xl:w-1/5">
        <NavigationSidebar />
      </div>
      
      {/* Mobile bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-c2c-dark border-t border-white/10 md:hidden">
        <div className="flex justify-around items-center py-2">
          <button className="p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          <button className="p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className="p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="p-2 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
