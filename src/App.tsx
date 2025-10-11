import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes"; // Import ThemeProvider
import Home from "./pages/Home";
import About from "./pages/About";
import Initiatives from "./pages/Initiatives";
import Startups from "./pages/Startups";
import Events from "./pages/Events";
import Partners from "./pages/Partners";
import Team from "./pages/Team";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Add ThemeProvider and set default to light */}
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="initiatives" element={<Initiatives />} />
              <Route path="startups" element={<Startups />} />
              <Route path="events" element={<Events />} />
              <Route path="partners" element={<Partners />} />
              <Route path="team" element={<Team />} />
              <Route path="join" element={<Join />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
