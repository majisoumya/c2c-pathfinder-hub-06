
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CustomProgress } from '@/components/ui/custom-progress';
import { Badge } from '@/components/ui/badge';
import NavigationSidebar from '../../components/dashboard/NavigationSidebar';

const ThirdYearPage = () => {
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
      title: 'Secure Professional Internship',
      description: 'Apply for and secure a summer internship in your field.',
      progress: 50,
      status: 'In Progress'
    },
    {
      title: 'Expand Your Network',
      description: 'Connect with industry professionals and alumni.',
      progress: 75,
      status: 'In Progress'
    },
    {
      title: 'Build Portfolio Projects',
      description: 'Develop projects that showcase your skills to employers.',
      progress: 30,
      status: 'In Progress'
    },
    {
      title: 'Leadership Experience',
      description: 'Take on leadership roles in student organizations.',
      progress: 100,
      status: 'Completed'
    }
  ];

  const internships = [
    {
      company: 'Tech Innovations Inc.',
      role: 'Software Development Intern',
      location: 'San Francisco, CA',
      type: 'Summer Internship',
      deadline: 'February 28, 2026',
      logo: 'TI'
    },
    {
      company: 'Global Finance Group',
      role: 'Financial Analyst Intern',
      location: 'New York, NY',
      type: 'Summer Internship',
      deadline: 'March 15, 2026',
      logo: 'GF'
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
              <h1 className="text-3xl font-bold text-white">Third Year Track</h1>
              <p className="text-white/60 mt-1">Secure internships and build professional experience</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-white">Overall Progress</p>
                <p className="text-white/60 text-sm">1/4 Completed</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border-4 border-c2c-pink">
                <span className="text-white font-bold">64%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-c2c-vibrant-purple/20 to-c2c-pink/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Third Year Focus Areas</h2>
            <p className="text-white/80 mb-4">
              Your third year is critical for securing professional internships and building tangible experience. 
              Focus on specialized skills development and expanding your professional network.
            </p>
            <Button className="bg-gradient-to-r from-c2c-vibrant-purple to-c2c-pink hover:from-c2c-pink hover:to-c2c-vibrant-purple text-white">
              View Third Year Guide
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
                            ? 'bg-c2c-pink/20 text-c2c-pink'
                            : 'bg-white/10 text-white/60'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                    <CustomProgress 
                      value={milestone.progress} 
                      className="bg-white/10"
                      indicatorColor={
                        milestone.status === 'Completed'
                          ? 'var(--green-500)'
                          : 'linear-gradient(to right, var(--c2c-vibrant-purple), var(--c2c-pink))'
                      }
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Portfolio Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-white">E-commerce Web Application</h3>
                      <p className="text-sm text-white/60 mt-1">A fully functional online store with user authentication and payment processing.</p>
                    </div>
                    <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">In Progress</Badge>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-white/60 text-sm">Completion</span>
                      <span className="text-white/60 text-sm">60%</span>
                    </div>
                    <CustomProgress value={60} className="bg-white/10" indicatorColor="linear-gradient(to right, var(--c2c-vibrant-purple), var(--c2c-pink))"/>
                  </div>
                </div>
                
                <div className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-white">Data Analysis Dashboard</h3>
                      <p className="text-sm text-white/60 mt-1">Interactive visualization tool for analyzing and presenting complex data sets.</p>
                    </div>
                    <Badge className="bg-white/10 text-white/80 border-white/20">Planning</Badge>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  Add New Project
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Featured Internships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {internships.map((internship, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-c2c-vibrant-purple to-c2c-pink rounded-lg flex items-center justify-center text-white font-bold">
                          {internship.logo}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{internship.role}</h3>
                          <p className="text-sm text-white/80">{internship.company}</p>
                          <p className="text-xs text-white/60 mt-1">{internship.location} • {internship.type}</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                        <span className="text-white/40 text-xs">Deadline: {internship.deadline}</span>
                        <Button size="sm" className="bg-c2c-vibrant-purple hover:bg-c2c-pink text-white">
                          Apply
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  View All Internships
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-gradient-to-br from-c2c-vibrant-purple/20 to-c2c-pink/20 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Interview Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Practice technical and behavioral interviews with AI-powered simulations and feedback.
                </p>
                <Button className="w-full bg-gradient-to-r from-c2c-vibrant-purple to-c2c-pink hover:from-c2c-pink hover:to-c2c-vibrant-purple text-white">
                  Start Practice Interview
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdYearPage;
