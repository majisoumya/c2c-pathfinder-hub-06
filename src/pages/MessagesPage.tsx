
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import NavigationSidebar from '../components/dashboard/NavigationSidebar';

const MessagesPage = () => {
  const navigate = useNavigate();
  const [activeChat, setActiveChat] = React.useState(1);
  
  // Check if user is logged in
  React.useEffect(() => {
    const user = localStorage.getItem('c2c-user');
    if (!user) {
      navigate('/auth');
    }
  }, [navigate]);

  const conversations = [
    {
      id: 1,
      name: 'Sarah Johnson',
      avatar: 'SJ',
      color: 'from-c2c-purple to-c2c-blue',
      lastMessage: 'Thanks for your advice on the interview preparation!',
      time: '10:45 AM',
      unread: true
    },
    {
      id: 2,
      name: 'David Chen',
      avatar: 'DC',
      color: 'from-c2c-vibrant-purple to-c2c-pink',
      lastMessage: 'Would you be available to discuss my resume?',
      time: 'Yesterday',
      unread: false
    },
    {
      id: 3,
      name: 'Alex Thompson',
      avatar: 'AT',
      color: 'from-c2c-blue-ocean to-c2c-blue',
      lastMessage: 'I\'ve shared my portfolio with you.',
      time: '2 days ago',
      unread: false
    }
  ];

  return (
    <div className="min-h-screen bg-c2c-dark flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/5 lg:w-1/6 xl:w-1/5">
        <NavigationSidebar />
      </div>
      
      <div className="flex-1 flex overflow-hidden">
        {/* Conversations sidebar */}
        <div className="w-full md:w-1/3 border-r border-white/10 overflow-y-auto">
          <div className="p-4 border-b border-white/10">
            <h1 className="text-xl font-bold text-white mb-4">Messages</h1>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search messages" 
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-2 pl-10"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white/60 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div className="divide-y divide-white/10">
            {conversations.map((convo) => (
              <div 
                key={convo.id}
                onClick={() => setActiveChat(convo.id)}
                className={`p-4 cursor-pointer ${activeChat === convo.id ? 'bg-white/10' : 'hover:bg-white/5'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${convo.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-medium">{convo.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center">
                      <p className="text-white font-medium truncate">{convo.name}</p>
                      <span className="text-white/60 text-xs">{convo.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className={`text-sm truncate ${convo.unread ? 'text-white' : 'text-white/60'}`}>
                        {convo.lastMessage}
                      </p>
                      {convo.unread && (
                        <span className="w-2 h-2 bg-c2c-vibrant-purple rounded-full"></span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Chat area */}
        <div className="hidden md:flex flex-col w-2/3 h-screen">
          <div className="border-b border-white/10 p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-c2c-purple to-c2c-blue flex items-center justify-center">
              <span className="text-white font-medium">SJ</span>
            </div>
            <div>
              <p className="text-white font-medium">Sarah Johnson</p>
              <p className="text-white/60 text-sm">Alumni • Software Engineer</p>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            <div className="flex items-end gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-c2c-purple to-c2c-blue flex items-center justify-center flex-shrink-0">
                <span className="text-white font-medium text-xs">SJ</span>
              </div>
              <Card className="bg-white/5 border-white/10 max-w-[70%]">
                <CardContent className="p-3">
                  <p className="text-white">Hey there! I saw you're interested in software engineering. I'd be happy to chat about my experience and share some tips.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex items-end justify-end gap-2">
              <Card className="bg-gradient-to-r from-c2c-purple/30 to-c2c-vibrant-purple/30 border-white/10 max-w-[70%]">
                <CardContent className="p-3">
                  <p className="text-white">Hi Sarah! Thanks so much for reaching out. I'd love to hear about your journey and get some advice on preparing for interviews.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex items-end gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-c2c-purple to-c2c-blue flex items-center justify-center flex-shrink-0">
                <span className="text-white font-medium text-xs">SJ</span>
              </div>
              <Card className="bg-white/5 border-white/10 max-w-[70%]">
                <CardContent className="p-3">
                  <p className="text-white">Of course! I remember how stressful it was when I was applying. The best thing I did was focus on understanding core concepts rather than memorizing solutions.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex items-end gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-c2c-purple to-c2c-blue flex items-center justify-center flex-shrink-0">
                <span className="text-white font-medium text-xs">SJ</span>
              </div>
              <Card className="bg-white/5 border-white/10 max-w-[70%]">
                <CardContent className="p-3">
                  <p className="text-white">Would you be free for a virtual coffee chat next week? I could go over some common questions and review your resume if you'd like.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="border-t border-white/10 p-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-4 py-3 pr-10"
              />
              <button className="absolute right-3 top-2.5 text-c2c-purple hover:text-c2c-vibrant-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
