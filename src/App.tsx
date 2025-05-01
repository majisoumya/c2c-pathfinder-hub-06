
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AuthPage from "./components/AuthPage";
import Dashboard from "./components/Dashboard";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
import NetworkPage from "./pages/NetworkPage";
import JobsPage from "./pages/JobsPage";
import MessagesPage from "./pages/MessagesPage";
import NotificationsPage from "./pages/NotificationsPage";
import FirstYearPage from "./pages/tracks/FirstYearPage";
import SecondYearPage from "./pages/tracks/SecondYearPage";
import ThirdYearPage from "./pages/tracks/ThirdYearPage";
import FinalYearPage from "./pages/tracks/FinalYearPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/tracks/first-year" element={<FirstYearPage />} />
          <Route path="/tracks/second-year" element={<SecondYearPage />} />
          <Route path="/tracks/third-year" element={<ThirdYearPage />} />
          <Route path="/tracks/final-year" element={<FinalYearPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
