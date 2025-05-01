
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import NavigationSidebar from '../../components/dashboard/NavigationSidebar';

const FinalYearPage = () => {
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
      title: 'Job Applications',
      description: 'Apply for full-time positions aligned with your career goals.',
      progress: 20,
      status: 'In Progress'
    },
    {
      title: 'Graduate School Applications',
      description: 'Prepare and submit applications for advanced degrees.',
      progress: 0,
      status: 'Not Started'
    },
    {
      title: 'Networking with Alumni',
      description: 'Connect with alumni working in your target industry.',
      progress: 60,
      status: 'In Progress'
    },
    {
      title: 'Interview Preparation',
      description: 'Practice technical and behavioral interviews.',
      progress: 45,
      status: 'In Progress'
    }
  ];

  const jobListings = [
    {
      position: 'Software Engineer',
      company: 'CloudTech Solutions',
      location: 'Seattle, WA',
      salary: '$95,000 - $120,000',
      match: '92%',
      posted: '3 days ago',
      logo: 'CS'
    },
    {
      position: 'Data Scientist',
      company: 'AnalyticsAI',
      location: 'Remote',
      salary: '$90,000 - $115,000',
      match: '88%',
      posted: '1 week ago',
      logo: 'AI'
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
              <h1 className="text-3xl font-bold text-white">Final Year Track</h1>
              <p className="text-white/60 mt-1">Launch your career and secure full-time opportunities</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-right">
                <p className="text-white">Overall Progress</p>
                <p className="text-white/60 text-sm">0/4 Completed</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border-4 border-c2c-blue-ocean">
                <span className="text-white font-bold">31%</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-c2c-pink/20 to-c2c-blue-ocean/20 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-white mb-2">Final Year Focus Areas</h2>
            <p className="text-white/80 mb-4">
              Your final year is about launching your career. Focus on job applications, interviews,
              and finalizing your transition from college to professional life.
            </p>
            <Button className="bg-gradient-to-r from-c2c-pink to-c2c-blue-ocean hover:from-c2c-blue-ocean hover:to-c2c-pink text-white">
              View Final Year Guide
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
                            ? 'bg-c2c-blue-ocean/20 text-c2c-blue-ocean'
                            : 'bg-white/10 text-white/60'
                      }`}>
                        {milestone.status}
                      </span>
                    </div>
                    <Progress value={milestone.progress} className="h-2 bg-white/10" indicatorClassName={`${
                      milestone.status === 'Completed'
                        ? 'bg-green-500'
                        : 'bg-gradient-to-r from-c2c-pink to-c2c-blue-ocean'
                    }`} />
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Application Tracker</CardTitle>
                  <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                    Add New
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-white">3</p>
                      <p className="text-white/60 text-sm">Applied</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-white">1</p>
                      <p className="text-white/60 text-sm">Interviews</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-white">0</p>
                      <p className="text-white/60 text-sm">Offers</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 text-center">
                      <p className="text-3xl font-bold text-white">2</p>
                      <p className="text-white/60 text-sm">Rejected</p>
                    </div>
                  </div>
                  
                  <div className="overflow-hidden overflow-x-auto">
                    <table className="w-full min-w-[500px]">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 px-3 text-white/60 font-normal text-sm">Company</th>
                          <th className="text-left py-2 px-3 text-white/60 font-normal text-sm">Position</th>
                          <th className="text-left py-2 px-3 text-white/60 font-normal text-sm">Applied</th>
                          <th className="text-left py-2 px-3 text-white/60 font-normal text-sm">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        <tr>
                          <td className="py-3 px-3 text-white">QuantumTech</td>
                          <td className="py-3 px-3 text-white">Full-Stack Developer</td>
                          <td className="py-3 px-3 text-white/60">Apr 20, 2025</td>
                          <td className="py-3 px-3">
                            <span className="bg-c2c-blue-ocean/20 text-c2c-blue-ocean text-xs px-2 py-1 rounded-full">
                              Interview
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 text-white">NetSys Inc.</td>
                          <td className="py-3 px-3 text-white">Backend Engineer</td>
                          <td className="py-3 px-3 text-white/60">Apr 15, 2025</td>
                          <td className="py-3 px-3">
                            <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full">
                              Rejected
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 text-white">DataVision Labs</td>
                          <td className="py-3 px-3 text-white">UX Designer</td>
                          <td className="py-3 px-3 text-white/60">Apr 22, 2025</td>
                          <td className="py-3 px-3">
                            <span className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-1 rounded-full">
                              Applied
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Top Job Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {jobListings.map((job, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg hover:bg-white/10 cursor-pointer transition-colors">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-c2c-pink to-c2c-blue-ocean rounded-lg flex items-center justify-center text-white font-bold">
                          {job.logo}
                        </div>
                        <div>
                          <h3 className="font-medium text-white">{job.position}</h3>
                          <p className="text-sm text-white/80">{job.company}</p>
                          <p className="text-xs text-white/60">{job.location} • {job.salary}</p>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-white/40 text-xs">Match:</span>
                          <span className="bg-green-500/20 text-green-300 text-xs px-2 py-0.5 rounded-full">
                            {job.match}
                          </span>
                          <span className="text-white/40 text-xs ml-2">Posted: {job.posted}</span>
                        </div>
                        <Button size="sm" className="bg-c2c-blue-ocean hover:bg-c2c-pink text-white">
                          Apply
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                  View All Job Matches
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-gradient-to-br from-c2c-pink/20 to-c2c-blue-ocean/20 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Career Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-4">
                  Schedule a 1-on-1 session with a career coach to refine your job search strategy and interview skills.
                </p>
                <Button className="w-full bg-gradient-to-r from-c2c-pink to-c2c-blue-ocean hover:from-c2c-blue-ocean hover:to-c2c-pink text-white">
                  Book Coaching Session
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Final Year Checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-c2c-blue-ocean"></div>
                    </div>
                    <span className="text-white">Update LinkedIn profile</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-c2c-blue-ocean"></div>
                    </div>
                    <span className="text-white">Finalize resume and cover letter</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-white/30"></div>
                    <span className="text-white/60">Request recommendation letters</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-white/30"></div>
                    <span className="text-white/60">Create portfolio website</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border border-white/30"></div>
                    <span className="text-white/60">Research salary expectations</span>
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

export default FinalYearPage;
