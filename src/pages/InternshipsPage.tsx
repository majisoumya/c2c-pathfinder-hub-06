
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import NavigationSidebar from '../components/dashboard/NavigationSidebar';
import { useAuth } from '@/contexts/AuthContext';

const InternshipsPage = () => {
  const { user } = useAuth();
  
  const internships = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'TechGiant',
      location: 'Mountain View, CA',
      type: 'Summer Internship',
      duration: '3 months',
      stipend: '$6,000/month',
      description: 'Join our team building next-generation cloud infrastructure.',
      requirements: ['Computer Science student', 'JavaScript/TypeScript', 'React']
    },
    {
      id: 2,
      title: 'Product Design Intern',
      company: 'CreativeStudio',
      location: 'Remote',
      type: 'Part-time',
      duration: '6 months',
      stipend: '$25/hour',
      description: 'Help design user experiences for our flagship product.',
      requirements: ['Design student', 'Figma', 'UI/UX']
    },
    {
      id: 3,
      title: 'Marketing Analyst Intern',
      company: 'GrowthCorp',
      location: 'New York, NY',
      type: 'Summer Internship',
      duration: '10 weeks',
      stipend: '$4,500/month',
      description: 'Analyze market trends and help optimize our growth strategies.',
      requirements: ['Marketing/Business student', 'Data analysis', 'Excel']
    },
    {
      id: 4,
      title: 'Finance Intern',
      company: 'Global Bank',
      location: 'Chicago, IL',
      type: 'Fall Internship',
      duration: '4 months',
      stipend: '$5,000/month',
      description: 'Work with our finance team on financial modeling and analysis.',
      requirements: ['Finance/Economics student', 'Financial modeling', 'Excel/SQL']
    }
  ];

  return (
    <div className="min-h-screen bg-c2c-dark flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/5 lg:w-1/6 xl:w-1/5">
        <NavigationSidebar />
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Internship Opportunities</h1>
          <div className="flex gap-2">
            <select className="bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2">
              <option>All Internships</option>
              <option>Summer</option>
              <option>Fall</option>
              <option>Spring</option>
              <option>Remote</option>
            </select>
            <Button className="bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple text-white">
              Find Matches
            </Button>
          </div>
        </div>
        
        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-r from-c2c-blue/20 to-c2c-purple/20 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-2">Your Personalized Internship Hub</h2>
            <p className="text-white/80">
              Discover internships tailored to your skills, interests, and academic background. 
              Complete your profile to get better recommendations.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {internships.map((internship) => (
            <Card key={internship.id} className="bg-white/5 border border-white/10 hover:border-c2c-purple/50 transition-colors">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-white text-xl">{internship.title}</CardTitle>
                    <p className="text-white/80 mt-1">{internship.company}</p>
                  </div>
                  <Badge className="bg-c2c-blue/20 text-c2c-blue border border-c2c-blue/50">{internship.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-y-2 text-sm text-white/70 mb-3">
                  <div className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {internship.location}
                  </div>
                  <div className="flex items-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {internship.duration}
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {internship.stipend}
                  </div>
                </div>
                
                <p className="text-white/70 mb-4">{internship.description}</p>
                
                <div className="mb-3">
                  <p className="text-white/80 mb-1 text-sm font-medium">Requirements:</p>
                  <div className="flex flex-wrap gap-2">
                    {internship.requirements.map((req, index) => (
                      <span key={index} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-xs">
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-white/10 pt-4">
                <Button className="w-full bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple hover:from-c2c-vibrant-purple hover:to-c2c-purple text-white">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipsPage;
