
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import NavigationSidebar from '../../components/dashboard/NavigationSidebar';

const SecondYearPage = () => {
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
      title: 'Build Your Professional Network',
      description: 'Connect with professionals and peers in your field of interest.',
      progress: 45,
      status: 'In Progress'
    },
    {
      title: 'Apply for Introductory Internships',
      description: 'Look for entry-level opportunities to gain experience.',
      progress: 0,
      status: 'Not Started'
    },
    {
      title: 'Develop Technical Skills',
      description: 'Focus on acquiring specific skills relevant to your career path.',
      progress: 70,
      status: 'In Progress'
    },
    {
      title: 'Attend Industry Events',
      description: 'Participate in conferences and workshops to expand your knowledge.',
      progress: 25,
      status: 'In Progress'
    }
  ];

  const opportunities = [
    {
      title: 'Research Assistant',
      organization: 'University Research Labs',
      deadline: 'May 30, 2025',
      tags: ['On-Campus', 'Part-time']
    },
    {
      title: 'Summer Internship Program',
      organization: 'TechStart Inc.',
      deadline: 'June 15, 2025',
      tags: ['Remote', 'Summer']
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
              <h1 className="text-3xl font-bold text-white">Second Year Track</h1>
              <p className="text-white/60 mt-1">Develop skills and gain initial experience</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-white">Overall Progress</p>
                <p className="text-white/60 text-sm">3/4 Milestones</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border-4 border-c2c-vibrant-purple">
                <span className="text-white font-bold">35%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-c2c-purple/20 to-c2c-vibrant-purple/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Second Year Focus Areas</h2>
            <p className="text-white/80 mb-4">
              Your second year is about focusing your career direction and developing relevant skills. 
              Start building a professional network and seek out initial experiences like research roles or part-time positions.
            </p>
            <Button className="bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple hover:from-c2c-vibrant-purple hover:to-c2c-purple text-white">
              View Second Year Guide
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
                            ? 'bg-c2c-vibrant-purple/20 text-c2c-vibrant-purple'
                            : 'bg-white/10 text-white/60'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                    <Progress value={milestone.progress} className="h-2 bg-white/10" indicatorClassName={`${
                      milestone.status === 'Completed'
                        ? 'bg-green-500'
                        : 'bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple'
                    }`} />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">Technical Skills</span>
                      <span className="text-white/60">70%</span>
                    </div>
                    <Progress value={70} className="h-2 bg-white/10" indicatorClassName="bg-gradient-to-r from-c2c-purple to-c2c-blue" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">Communication</span>
                      <span className="text-white/60">60%</span>
                    </div>
                    <Progress value={60} className="h-2 bg-white/10" indicatorClassName="bg-gradient-to-r from-c2c-vibrant-purple to-c2c-pink" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">Leadership</span>
                      <span className="text-white/60">40%</span>
                    </div>
                    <Progress value={40} className="h-2 bg-white/10" indicatorClassName="bg-gradient-to-r from-c2c-blue-ocean to-c2c-blue" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-white">Problem-Solving</span>
                      <span className="text-white/60">65%</span>
                    </div>
                    <Progress value={65} className="h-2 bg-white/10" indicatorClassName="bg-gradient-to-r from-c2c-pink to-c2c-purple" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  View Skill Development Plan
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Recommended Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {opportunities.map((opportunity, index) => (
                    <div key={index} className="p-3 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
                      <h3 className="font-medium text-white">{opportunity.title}</h3>
                      <p className="text-sm text-white/60">{opportunity.organization}</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex gap-2">
                          {opportunity.tags.map((tag, idx) => (
                            <span key={idx} className="bg-c2c-purple/20 text-c2c-purple text-xs px-2 py-0.5 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="text-white/40 text-xs">Deadline: {opportunity.deadline}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  View All Opportunities
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Essential Workshops</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-br from-c2c-purple to-c2c-blue rounded-lg flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Interview Skills Workshop</p>
                      <p className="text-white/60 text-sm">May 25, 2025 • Virtual</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-br from-c2c-vibrant-purple to-c2c-pink rounded-lg flex items-center justify-center text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium">Resume Enhancement</p>
                      <p className="text-white/60 text-sm">June 2, 2025 • Room 204</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondYearPage;
