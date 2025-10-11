import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Zap, Rocket, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Initiatives = () => {
  const initiatives = [
    {
      category: "Startup Cohorts & Bootcamps",
      icon: Rocket,
      programs: [
        {
          name: "Wadhwani Startup Cohort",
          description: "Intensive 12-week acceleration program with industry mentorship and funding opportunities",
        },
        {
          name: "JITSIE Bengaluru BootCamp",
          description: "Immersive bootcamp connecting IIT Madras startups with Bangalore's startup ecosystem",
        },
        {
          name: "IGNITE Cohort",
          description: "Early-stage startup cohort focusing on product development and market validation",
        },
      ],
    },
    {
      category: "Competitions & Pitch Days",
      icon: Award,
      programs: [
        {
          name: "START-A-THON",
          description: "Our flagship innovation competition bringing together aspiring entrepreneurs from across India",
        },
        {
          name: "Pitch Fest",
          description: "Monthly pitching events connecting founders with angel investors and VCs",
        },
        {
          name: "Becoming Billionaire",
          description: "High-stakes pitch competition with industry leaders as judges and mentors",
        },
      ],
    },
    {
      category: "Incubation & Investor Connect",
      icon: TrendingUp,
      programs: [
        {
          name: "JITSIE-STPI Incubation Cohort",
          description: "Partnership with STPI providing office space, legal support, and government scheme access",
        },
        {
          name: "Wadhwani LiftOff",
          description: "Bridge program connecting validated startups with growth capital and strategic partners",
        },
        {
          name: "Investor Demo Days",
          description: "Quarterly showcase events featuring portfolio startups presenting to curated investor panels",
        },
      ],
    },
    {
      category: "Community & Education",
      icon: Users,
      programs: [
        {
          name: "Founder Talks",
          description: "Regular sessions with successful entrepreneurs sharing their journey and insights",
        },
        {
          name: "Skill Development Workshops",
          description: "Hands-on workshops covering technical skills, business fundamentals, and soft skills",
        },
        {
          name: "Networking Meetups",
          description: "Monthly gatherings fostering connections within the entrepreneurship community",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Initiatives</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Comprehensive programs supporting entrepreneurs at every stage of their journey
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16 lg:space-y-24">
            {initiatives.map((category, categoryIndex) => (
              <div key={category.category} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 100}ms` }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <category.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    {category.category}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.programs.map((program, programIndex) => (
                    <div
                      key={program.name}
                      className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                      style={{ animationDelay: `${programIndex * 50}ms` }}
                    >
                      <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {program.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {program.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Initiative - START-A-THON */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="text-primary" size={32} />
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    START-A-THON
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Our flagship innovation competition that has become one of India's premier startup
                    events. START-A-THON brings together aspiring entrepreneurs, industry experts, and
                    investors for an intensive innovation sprint.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">What to Expect</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 48-hour intensive hackathon</li>
                        <li>• Mentorship from industry leaders</li>
                        <li>• Workshops on business fundamentals</li>
                        <li>• Networking with investors and partners</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Past Results</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• 500+ participants annually</li>
                        <li>• 50+ teams formed</li>
                        <li>• 10+ startups incubated</li>
                        <li>• ₹2Cr+ in funding raised</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Ready to Participate?
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Join our initiatives and accelerate your entrepreneurial journey
            </p>
            <Link to="/join">
              <button className="px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg shadow-glow hover:shadow-elegant transition-all hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Initiatives;
