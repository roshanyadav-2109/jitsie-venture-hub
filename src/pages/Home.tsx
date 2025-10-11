import { ArrowRight, Rocket, Users, TrendingUp, Target, Lightbulb, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CounterCard from "@/components/CounterCard";

const Home = () => {
  const activities = [
    {
      icon: Rocket,
      title: "Startup Cohorts",
      description: "Structured programs to accelerate startup growth with mentorship and resources",
    },
    {
      icon: Target,
      title: "Startathons",
      description: "Intensive innovation sprints bringing ideas to reality",
    },
    {
      icon: TrendingUp,
      title: "Pitch Days",
      description: "Connect founders with investors and showcase innovations",
    },
    {
      icon: Lightbulb,
      title: "R&D & Incubation",
      description: "Support deep-tech research and prototype development",
    },
    {
      icon: Network,
      title: "Investor Connect",
      description: "Bridge the gap between startups and funding opportunities",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Foster a vibrant ecosystem of entrepreneurs and innovators",
    },
  ];

  const featuredInitiatives = [
    {
      title: "START-A-THON",
      description: "The flagship innovation competition bringing together aspiring entrepreneurs",
      color: "from-primary to-primary-glow",
    },
    {
      title: "Wadhwani Cohort",
      description: "Intensive startup acceleration program with industry mentorship",
      color: "from-accent to-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Where <span className="bg-gradient-primary bg-clip-text text-transparent">Vision</span> Becomes{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">Venture</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              The driving force behind the entrepreneurial pulse at IIT Madras, founded to ignite
              deep-tech innovation and empower the next generation of founders
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/initiatives">
                <Button size="lg" className="shadow-glow group">
                  Explore Initiatives
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline">
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Counters */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <CounterCard value={1800} label="Community Members" suffix="+" />
            <CounterCard value={200} label="Emerging Startups" suffix="+" />
            <CounterCard value={45} label="Startups Incubated" suffix="+" />
            <CounterCard value={2200} label="Individuals Educated" suffix="+" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive support for entrepreneurs at every stage of their journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {activities.map((activity, index) => (
              <div
                key={activity.title}
                className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <activity.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Initiatives */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Featured Initiatives
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flagship programs driving innovation and entrepreneurship
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {featuredInitiatives.map((initiative) => (
              <Link
                key={initiative.title}
                to="/initiatives"
                className="group relative overflow-hidden rounded-2xl p-8 lg:p-10 bg-card border border-border hover:shadow-glow transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${initiative.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{initiative.description}</p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Learn more
                    <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Showcase */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with industry leaders to build the future
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/partners">
              <Button size="lg" variant="outline" className="group">
                View All Partners
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Join JITSIE and be part of India's most vibrant entrepreneurship community
            </p>
            <Link to="/join">
              <Button size="lg" className="shadow-glow group">
                Join Us Today
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
