import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const Startups = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "EdTech", "FinTech", "SaaS", "Sustainability", "HealthTech", "SpaceTech"];

  const startups = [
    {
      name: "EduLearn AI",
      sector: "EdTech",
      description: "AI-powered personalized learning platform transforming education delivery",
      founders: "Rahul Sharma, Priya Patel",
      website: "https://edulearn.example.com",
    },
    {
      name: "FinFlow",
      sector: "FinTech",
      description: "Digital banking solution for SMEs with embedded financial services",
      founders: "Amit Kumar, Sneha Reddy",
      website: "https://finflow.example.com",
    },
    {
      name: "CloudStack Pro",
      sector: "SaaS",
      description: "Enterprise cloud infrastructure management and optimization platform",
      founders: "Vikram Singh, Ananya Iyer",
      website: "https://cloudstack.example.com",
    },
    {
      name: "GreenTech Solutions",
      sector: "Sustainability",
      description: "IoT-based waste management and recycling optimization system",
      founders: "Rohan Mehta, Kavya Nair",
      website: "https://greentech.example.com",
    },
    {
      name: "HealthBridge",
      sector: "HealthTech",
      description: "Telemedicine platform connecting rural patients with specialist doctors",
      founders: "Dr. Aisha Khan, Rajesh Gupta",
      website: "https://healthbridge.example.com",
    },
    {
      name: "OrbitLabs",
      sector: "SpaceTech",
      description: "Satellite data analytics for agriculture and climate monitoring",
      founders: "Karthik Menon, Divya Krishnan",
      website: "https://orbitlabs.example.com",
    },
    {
      name: "SmartLearn",
      sector: "EdTech",
      description: "Adaptive learning technology for K-12 education",
      founders: "Suresh Babu, Meera Shankar",
      website: "https://smartlearn.example.com",
    },
    {
      name: "PaySecure",
      sector: "FinTech",
      description: "Blockchain-based secure payment gateway for e-commerce",
      founders: "Arjun Rao, Lakshmi Devi",
      website: "https://paysecure.example.com",
    },
    {
      name: "DataViz Pro",
      sector: "SaaS",
      description: "Business intelligence and data visualization platform",
      founders: "Nikhil Desai, Pooja Malhotra",
      website: "https://dataviz.example.com",
    },
  ];

  const filteredStartups = activeFilter === "All" 
    ? startups 
    : startups.filter(startup => startup.sector === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Startups</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Meet the innovative ventures we've supported and incubated
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 lg:py-12 sticky top-16 lg:top-20 bg-background/95 backdrop-blur-md z-40 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Startups Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredStartups.map((startup, index) => (
              <div
                key={startup.name}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {startup.name[0]}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                    {startup.sector}
                  </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {startup.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {startup.description}
                </p>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Founders:</span> {startup.founders}
                  </p>
                </div>
                <a
                  href={startup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                  Visit Website
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>

          {filteredStartups.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No startups found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Making an Impact
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  45+
                </div>
                <div className="text-sm text-muted-foreground">Startups Incubated</div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  200+
                </div>
                <div className="text-sm text-muted-foreground">Emerging Ventures</div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  ₹50Cr+
                </div>
                <div className="text-sm text-muted-foreground">Funding Raised</div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <div className="text-sm text-muted-foreground">Jobs Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Startups;
