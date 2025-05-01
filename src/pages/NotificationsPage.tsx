
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import NavigationSidebar from '../components/dashboard/NavigationSidebar';

const NotificationsPage = () => {
  const navigate = useNavigate();
  
  // Check if user is logged in
  React.useEffect(() => {
    const user = localStorage.getItem('c2c-user');
    if (!user) {
      navigate('/auth');
    }
  }, [navigate]);

  const notifications = [
    {
      id: 1,
      type: 'connection',
      title: 'New Connection Request',
      message: 'Sarah Johnson wants to connect with you.',
      time: '10 minutes ago',
      read: false,
      action: 'Accept'
    },
    {
      id: 2,
      type: 'job',
      title: 'Job Opening',
      message: 'New entry-level Software Engineer position at Google.',
      time: '2 hours ago',
      read: false,
      action: 'View'
    },
    {
      id: 3,
      type: 'event',
      title: 'Upcoming Event',
      message: 'Resume Workshop this Friday at 3:00 PM.',
      time: '1 day ago',
      read: true,
      action: 'RSVP'
    },
    {
      id: 4,
      type: 'message',
      title: 'New Message',
      message: 'You have a new message from David Chen.',
      time: '2 days ago',
      read: true,
      action: 'Reply'
    }
  ];

  const getIconForType = (type: string) => {
    switch (type) {
      case 'connection':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        );
      case 'job':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'event':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'message':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-c2c-dark flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/5 lg:w-1/6 xl:w-1/5">
        <NavigationSidebar />
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Notifications</h1>
        
        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`border ${notification.read ? 'bg-white/5 border-white/10' : 'bg-white/10 border-c2c-purple/30'} hover:border-c2c-purple/50 transition-colors`}
            >
              <div className="p-4 flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full ${notification.read ? 'bg-white/10' : 'bg-gradient-to-br from-c2c-purple to-c2c-vibrant-purple'} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white">
                    {getIconForType(notification.type)}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`font-medium ${notification.read ? 'text-white/80' : 'text-white'}`}>
                        {notification.title}
                      </h3>
                      <p className={`text-sm ${notification.read ? 'text-white/60' : 'text-white/80'}`}>
                        {notification.message}
                      </p>
                    </div>
                    <span className="text-white/40 text-xs">{notification.time}</span>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className={`w-2 h-2 rounded-full ${notification.read ? 'invisible' : 'bg-c2c-vibrant-purple'}`}></span>
                    <button className="text-c2c-purple hover:text-c2c-vibrant-purple text-sm font-medium transition-colors">
                      {notification.action}
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
