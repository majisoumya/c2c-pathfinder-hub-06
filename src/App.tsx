
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
import NetworkPage from "./pages/NetworkPage";
import JobsPage from "./pages/JobsPage";
import InternshipsPage from "./pages/InternshipsPage";
import MessagesPage from "./pages/MessagesPage";
import NotificationsPage from "./pages/NotificationsPage";
import FirstYearPage from "./pages/tracks/FirstYearPage";
import SecondYearPage from "./pages/tracks/SecondYearPage";
import ThirdYearPage from "./pages/tracks/ThirdYearPage";
import FinalYearPage from "./pages/tracks/FinalYearPage";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

const queryClient = new QueryClient();

// Add CSS variables for our colors to be used by the CustomProgress component
document.documentElement.style.setProperty('--green-500', '#22c55e');
document.documentElement.style.setProperty('--c2c-purple', '#9333ea');
document.documentElement.style.setProperty('--c2c-blue', '#3b82f6');
document.documentElement.style.setProperty('--c2c-vibrant-purple', '#a855f7');
document.documentElement.style.setProperty('--c2c-pink', '#ec4899');
document.documentElement.style.setProperty('--c2c-blue-ocean', '#06b6d4');

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/about" element={<AboutPage />} />
            
            {/* Protected routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/network" element={<ProtectedRoute><NetworkPage /></ProtectedRoute>} />
            <Route path="/jobs" element={<ProtectedRoute><JobsPage /></ProtectedRoute>} />
            <Route path="/internships" element={<ProtectedRoute><InternshipsPage /></ProtectedRoute>} />
            <Route path="/messages" element={<ProtectedRoute><MessagesPage /></ProtectedRoute>} />
            <Route path="/notifications" element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} />
            <Route path="/tracks/first-year" element={<ProtectedRoute><FirstYearPage /></ProtectedRoute>} />
            <Route path="/tracks/second-year" element={<ProtectedRoute><SecondYearPage /></ProtectedRoute>} />
            <Route path="/tracks/third-year" element={<ProtectedRoute><ThirdYearPage /></ProtectedRoute>} />
            <Route path="/tracks/final-year" element={<ProtectedRoute><FinalYearPage /></ProtectedRoute>} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
