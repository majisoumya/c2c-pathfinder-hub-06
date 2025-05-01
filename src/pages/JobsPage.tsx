
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import NavigationSidebar from '../components/dashboard/NavigationSidebar';

const JobsPage = () => {
  const navigate = useNavigate();
  
  // Check if user is logged in
  React.useEffect(() => {
    const user = localStorage.getItem('c2c-user');
    if (!user) {
      navigate('/auth');
    }
  }, [navigate]);

  const jobListings = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechNova',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: 'Entry Level',
      postedDate: '2 days ago',
      description: 'Join our team of innovative developers building the next generation of web applications.',
      skills: ['React', 'TypeScript', 'CSS']
    },
    {
      id: 2,
      title: 'Data Analyst Intern',
      company: 'AnalyticsPlus',
      location: 'Remote',
      type: 'Internship',
      experience: 'Student',
      postedDate: '1 week ago',
      description: 'Gain real-world experience analyzing data and creating actionable insights for our clients.',
      skills: ['SQL', 'Excel', 'Python']
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'DesignWorks',
      location: 'New York, NY',
      type: 'Full-time',
      experience: 'Mid-Level',
      postedDate: '3 days ago',
      description: 'Create beautiful, intuitive user interfaces for our suite of productivity tools.',
      skills: ['Figma', 'Sketch', 'User Research']
    }
  ];

  return (
    <div className="min-h-screen bg-c2c-dark flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/5 lg:w-1/6 xl:w-1/5">
        <NavigationSidebar />
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Job Opportunities</h1>
          <div className="flex gap-2">
            <select className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2">
              <option>All Jobs</option>
              <option>Full-time</option>
              <option>Internship</option>
              <option>Part-time</option>
            </select>
            <button className="bg-white/10 hover:bg-white/20 text-white rounded-lg px-3 py-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414v6.586a1 1 0 01-1.414 1.414l-2-2A1 1 0 0110 19v-5.586L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="space-y-6">
          {jobListings.map((job) => (
            <Card key={job.id} className="bg-white/5 border border-white/10 hover:border-c2c-purple/50 transition-colors">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">{job.title}</CardTitle>
                    <p className="text-white/80 mt-1">{job.company} • {job.location}</p>
                  </div>
                  <Badge className="bg-c2c-purple/20 text-c2c-purple border border-c2c-purple/50">{job.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, index) => (
                    <span key={index} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-white/10 pt-4">
                <span className="text-white/60 text-sm">Posted {job.postedDate}</span>
                <button className="bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple hover:from-c2c-vibrant-purple hover:to-c2c-purple text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
                  Apply Now
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
