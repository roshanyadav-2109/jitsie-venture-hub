import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Lightbulb, Rocket } from "lucide-react";
import Hero from "@/components/Hero";

const About = () => {
  const missions = [
    {
      icon: Lightbulb,
      title: "Imagine Boldly",
      description:
        "Foster creative thinking and ideation through workshops, competitions, and community events",
    },
    {
      icon: Target,
      title: "Incubate with Purpose",
      description:
        "Provide structured support, mentorship, and resources to transform ideas into viable ventures",
    },
    {
      icon: Rocket,
      title: "Ignite the Future",
      description:
        "Connect startups with investors, partners, and markets to scale their innovations",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Who We Are */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-8">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                JITSIE is the entrepreneurial heartbeat of IIT Madras, serving
                as a launchpad for visionary founders who are building the
                future of deep-tech innovation. Founded with the mission to
                nurture and accelerate startup ecosystems, we have grown into
                one of India's most vibrant entrepreneurship communities.
              </p>
              <p>
                We believe that great ideas deserve great support. Through our
                comprehensive programs, mentorship networks, and strategic
                partnerships, we provide aspiring entrepreneurs with everything
                they need to transform their vision into reality. From initial
                ideation to successful market launch, JITSIE stands with
                founders every step of the way.
              </p>
              <p>
                Our community of over 1,800 members includes students, alumni,
                mentors, and industry experts who share a common passion:
                building innovative solutions that create real-world impact.
                Together, we've incubated 45+ startups, supported 200+
                emerging ventures, and educated 2,200+ individuals on
                entrepreneurship.
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
              Our Manifesto: Imagine. Incubate. Ignite.
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
                  <mission.icon
                    className="text-primary-foreground"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {mission.title}
                </h3>
                <p className="text-muted-foreground">
                  {mission.description}
                </p>
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
                  {/* Placeholder for a professional photograph of Prof. Ashok Jhunjhunwala */}
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-primary" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Prof. Ashok Jhunjhunwala
                  </h3>
                  <p className="text-lg text-muted-foreground italic">
                    "Innovation is not just about creating something new; it's
                    about creating something that makes a real difference in
                    people's lives. At JITSIE, we're building an ecosystem
                    where ideas don't just flourish—they transform into
                    ventures that change the world."
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
              Architecting Excellence: Our Framework for Impact
            </h2>
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    The Visionaries: Board & Mentors
                  </h3>
                  <p className="text-muted-foreground">
                    Our esteemed board, comprising distinguished faculty and
                    industry stalwarts, provides the strategic foresight that
                    guides our mission. They are the guardians of our vision
                    and the mentors to our future leaders.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    The Vanguard: Leadership & Executive Core
                  </h3>
                  <p className="text-muted-foreground">
                    The President, Founder, and the Executive Core Committee
                    form the operational heart of JITSIE. They are the
                    strategists and executors, driving our initiatives and
                    ensuring the seamless functioning of the entire ecosystem.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    The Vanguards: Vertical & Department Heads
                  </h3>
                  <p className="text-muted-foreground">
                    Our specialized teams, from deep-tech verticals like AI and
                    Biotech to operational departments like PR and Events, are
                    the engines of our progress. They are the domain experts
                    who bring our programs to life.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    The Vibrancy: Our Community
                  </h3>
                  <p className="text-muted-foreground">
                    The lifeblood of JITSIE. A thriving community of students,
                    innovators, and entrepreneurs whose collective passion and
                    ambition fuel our ecosystem.
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
