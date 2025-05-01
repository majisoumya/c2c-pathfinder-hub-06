
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CustomProgress } from '@/components/ui/custom-progress';
import NavigationSidebar from '../../components/dashboard/NavigationSidebar';

const FirstYearPage = () => {
  const navigate = useNavigate();
  
  // Check if user is logged in
  React.useEffect(() => {
    const user = localStorage.getItem('c2c-user');
    if (!user) {
      navigate('/auth');
    }
  }, [navigate]);

  const milestones = [
    {
      title: 'Discover Your Interests',
      description: 'Explore different career paths and industries to find what excites you.',
      progress: 60,
      status: 'In Progress'
    },
    {
      title: 'Build Your Foundation',
      description: 'Focus on core skills and knowledge in your field of interest.',
      progress: 30,
      status: 'In Progress'
    },
    {
      title: 'Join Student Organizations',
      description: 'Get involved in clubs and organizations related to your interests.',
      progress: 100,
      status: 'Completed'
    },
    {
      title: 'Create Your Resume',
      description: 'Develop your first professional resume with academic achievements and activities.',
      progress: 0,
      status: 'Not Started'
    }
  ];

  const resources = [
    {
      title: 'Career Path Exploration Guide',
      type: 'PDF Guide',
      icon: '📄'
    },
    {
      title: 'Introduction to LinkedIn',
      type: 'Video Tutorial',
      icon: '🎥'
    },
    {
      title: 'Resume Building Workshop',
      type: 'Workshop Recording',
      icon: '🎬'
    }
  ];

  return (
    <div className="min-h-screen bg-c2c-dark flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/5 lg:w-1/6 xl:w-1/5">
        <NavigationSidebar />
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-white">First Year Track</h1>
              <p className="text-white/60 mt-1">Building your foundation for future success</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-white">Overall Progress</p>
                <p className="text-white/60 text-sm">2/4 Milestones</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border-4 border-c2c-purple">
                <span className="text-white font-bold">50%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-c2c-purple/20 to-c2c-blue/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-2">First Year Focus Areas</h2>
            <p className="text-white/80 mb-4">
              Your first year is all about exploration and building a foundation. Focus on discovering your interests, 
              joining clubs, and learning about different career paths.
            </p>
            <Button className="bg-gradient-to-r from-c2c-purple to-c2c-blue hover:from-c2c-blue hover:to-c2c-purple text-white">
              View First Year Guide
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Milestone Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <h3 className="font-medium text-white">{milestone.title}</h3>
                        <p className="text-sm text-white/60">{milestone.description}</p>
                      </div>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        milestone.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-300'
                          : milestone.status === 'In Progress'
                            ? 'bg-c2c-blue/20 text-c2c-blue-ocean'
                            : 'bg-white/10 text-white/60'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                    <CustomProgress 
                      value={milestone.progress} 
                      className="bg-white/10" 
                      indicatorColor={milestone.status === 'Completed' ? 'var(--green-500)' : 'linear-gradient(to right, var(--c2c-purple), var(--c2c-blue))'}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex gap-4 p-3 bg-white/5 rounded-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-c2c-purple to-c2c-blue rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-lg font-bold">15</span>
                      <span className="text-xs">May</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">First Year Career Orientation</h3>
                      <p className="text-sm text-white/60">Learn about different career paths and how to prepare</p>
                      <p className="text-xs text-white/40 mt-1">Virtual • 3:00 PM - 4:30 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-3 bg-white/5 rounded-lg">
                    <div className="w-16 h-16 bg-gradient-to-br from-c2c-vibrant-purple to-c2c-pink rounded-lg flex flex-col items-center justify-center text-white">
                      <span className="text-lg font-bold">22</span>
                      <span className="text-xs">May</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-white">Resume Building Workshop</h3>
                      <p className="text-sm text-white/60">Create your first professional resume with guidance</p>
                      <p className="text-xs text-white/40 mt-1">Room 302, Student Center • 2:00 PM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  View All Events
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {resources.map((resource, index) => (
                    <div key={index} className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                      <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-xl">
                        {resource.icon}
                      </div>
                      <div>
                        <p className="text-white font-medium">{resource.title}</p>
                        <p className="text-white/60 text-sm">{resource.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  Access Resource Library
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-gradient-to-br from-c2c-purple/30 to-c2c-vibrant-purple/30 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Schedule a meeting with a career advisor to discuss your first year goals and plans.
                </p>
                <Button className="w-full bg-white/20 hover:bg-white/30 text-white">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstYearPage;
