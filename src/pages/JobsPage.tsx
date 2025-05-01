
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import NavigationSidebar from '../components/dashboard/NavigationSidebar';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const JobsPage = () => {
  const { user } = useAuth();
  const [jobType, setJobType] = useState<string>("All");
  
  // Enhanced job listings with more details
  const jobListings = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechNova',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: 'Entry Level',
      salary: '$80,000 - $100,000',
      postedDate: '2 days ago',
      description: 'Join our team of innovative developers building the next generation of web applications. You'll work on user-facing features using React and TypeScript.',
      skills: ['React', 'TypeScript', 'CSS', 'HTML', 'JavaScript']
    },
    {
      id: 2,
      title: 'Data Analyst Intern',
      company: 'AnalyticsPlus',
      location: 'Remote',
      type: 'Internship',
      experience: 'Student',
      salary: '$25/hr',
      postedDate: '1 week ago',
      description: 'Gain real-world experience analyzing data and creating actionable insights for our clients. Work with our team of experienced data scientists.',
      skills: ['SQL', 'Excel', 'Python', 'Data Visualization', 'Statistics']
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      company: 'DesignWorks',
      location: 'New York, NY',
      type: 'Full-time',
      experience: 'Mid-Level',
      salary: '$90,000 - $120,000',
      postedDate: '3 days ago',
      description: 'Create beautiful, intuitive user interfaces for our suite of productivity tools. Collaborate with developers and product managers to deliver exceptional user experiences.',
      skills: ['Figma', 'Sketch', 'User Research', 'Prototyping', 'Interaction Design']
    },
    {
      id: 4,
      title: 'Backend Engineer',
      company: 'ServerStack',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: 'Senior Level',
      salary: '$120,000 - $150,000',
      postedDate: '5 days ago',
      description: 'Design and implement scalable backend services for our cloud infrastructure platform. Work with cutting-edge technologies in a dynamic environment.',
      skills: ['Node.js', 'Python', 'AWS', 'MongoDB', 'Microservices']
    }
  ];

  const filteredJobs = jobType === "All" 
    ? jobListings 
    : jobListings.filter(job => job.type === jobType);

  const handleApply = (jobId: number) => {
    toast.success("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-c2c-dark flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/5 lg:w-1/6 xl:w-1/5">
        <NavigationSidebar />
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Job Opportunities</h1>
          <div className="flex gap-2">
            <select 
              className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="All">All Jobs</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Internship">Internship</option>
              <option value="Contract">Contract</option>
            </select>
            <button className="bg-white/10 hover:bg-white/20 text-white rounded-lg px-3 py-2 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414v6.586a1 1 0 01-1.414 1.414l-2-2A1 1 0 0110 19v-5.586L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="space-y-4 mb-6">
          <div className="bg-gradient-to-r from-c2c-purple/20 to-c2c-blue/20 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-2">Find Your Dream Job</h2>
            <p className="text-white/80 mb-4">
              Explore opportunities matched to your skills and career goals. 
              Complete your profile to receive personalized job recommendations.
            </p>
            <Button className="bg-gradient-to-r from-c2c-purple to-c2c-blue hover:from-c2c-blue hover:to-c2c-purple text-white">
              Update Your Profile
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
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
                  <div className="flex flex-wrap gap-y-2 text-sm text-white/70 mb-3">
                    <span className="mr-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {job.experience}
                    </span>
                    <span className="mr-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.salary}
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {job.postedDate}
                    </span>
                  </div>
                  
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
                  <span className="text-white/60 text-sm">Apply before {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  <Button 
                    className="bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple hover:from-c2c-vibrant-purple hover:to-c2c-purple text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
                    onClick={() => handleApply(job.id)}
                  >
                    Apply Now
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-white/60">No jobs found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
