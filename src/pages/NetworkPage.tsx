
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import NavigationSidebar from '../components/dashboard/NavigationSidebar';

const NetworkPage = () => {
  const navigate = useNavigate();
  
  // Check if user is logged in
  React.useEffect(() => {
    const user = localStorage.getItem('c2c-user');
    if (!user) {
      navigate('/auth');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-c2c-dark flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/5 lg:w-1/6 xl:w-1/5">
        <NavigationSidebar />
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold text-white mb-6">My Network</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/5 border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">Connect with peers, mentors, and industry professionals to expand your career opportunities.</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-c2c-purple to-c2c-blue flex items-center justify-center">
                    <span className="text-white font-medium">JD</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Jane Doe</p>
                    <p className="text-white/60 text-sm">Software Engineer at Google</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-c2c-vibrant-purple to-c2c-pink flex items-center justify-center">
                    <span className="text-white font-medium">MS</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Mark Smith</p>
                    <p className="text-white/60 text-sm">Data Scientist at Amazon</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Mentorship</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">Find mentors who can guide you through your career journey.</p>
              <div className="mt-4">
                <button className="w-full bg-gradient-to-r from-c2c-purple to-c2c-vibrant-purple hover:from-c2c-vibrant-purple hover:to-c2c-purple text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 shadow-glow">
                  Find a Mentor
                </button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 border border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Events & Networking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/70">Discover networking events and opportunities to connect with professionals.</p>
              <div className="mt-4 space-y-2">
                <div className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <p className="text-white font-medium">Tech Career Fair</p>
                  <p className="text-white/60 text-sm">June 15, 2025 • Virtual</p>
                </div>
                <div className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <p className="text-white font-medium">Industry Mixer</p>
                  <p className="text-white/60 text-sm">July 3, 2025 • New York</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NetworkPage;
