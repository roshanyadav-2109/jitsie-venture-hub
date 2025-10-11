import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const missions = [
    {
      icon: Lightbulb,
      title: "Imagine",
      description: "Foster creative thinking and ideation through workshops, competitions, and community events",
    },
    {
      icon: Target,
      title: "Incubate",
      description: "Provide structured support, mentorship, and resources to transform ideas into viable ventures",
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Connect startups with investors, partners, and markets to scale their innovations",
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
              About <span className="bg-gradient-primary bg-clip-text text-transparent">JITSIE</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Jamsetji Tata Society for Innovation and Entrepreneurship
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                JITSIE is the entrepreneurial heartbeat of IIT Madras, serving as a launchpad for
                visionary founders who are building the future of deep-tech innovation. Founded with
                the mission to nurture and accelerate startup ecosystems, we have grown into one of
                India's most vibrant entrepreneurship communities.
              </p>
              <p>
                We believe that great ideas deserve great support. Through our comprehensive programs,
                mentorship networks, and strategic partnerships, we provide aspiring entrepreneurs with
                everything they need to transform their vision into reality. From initial ideation to
                successful market launch, JITSIE stands with founders every step of the way.
              </p>
              <p>
                Our community of over 1,800 members includes students, alumni, mentors, and industry
                experts who share a common passion: building innovative solutions that create real-world
                impact. Together, we've incubated 45+ startups, supported 200+ emerging ventures, and
                educated 2,200+ individuals on entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three core pillars drive everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {missions.map((mission, index) => (
              <div
                key={mission.title}
                className="p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                  <mission.icon className="text-primary-foreground" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {mission.title}
                </h3>
                <p className="text-muted-foreground">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Inspiration */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
              Our Inspiration
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Prof. Ashok Jhunjhunwala
                  </h3>
                  <p className="text-lg text-muted-foreground italic">
                    "Innovation is not just about creating something new; it's about creating something
                    that makes a real difference in people's lives. At JITSIE, we're building an
                    ecosystem where ideas don't just flourish—they transform into ventures that change
                    the world."
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Professor & Founding Member, IIT Madras
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Structure */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
              Our Structure
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Board Members</h3>
                  <p className="text-muted-foreground">
                    Guiding Faculty, Industry Associates, and Knowledge Partners who provide strategic
                    direction and mentorship
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Leadership</h3>
                  <p className="text-muted-foreground">
                    Founder and President who drive the society's vision and operations
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Executive Core Committee</h3>
                  <p className="text-muted-foreground">
                    Central decision-making body responsible for strategic initiatives and policy
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Verticals & Departments</h3>
                  <p className="text-muted-foreground">
                    Specialized teams focusing on general verticals (Incubation, Funding) and domain
                    verticals (Ed-Tech, Fin-Tech, etc.), supported by operational departments (PR,
                    Content, Multimedia, Events)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
