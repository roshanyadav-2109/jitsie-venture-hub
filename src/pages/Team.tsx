import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Award, Target, Zap } from "lucide-react";
import Hero from "@/components/Hero";

const Team = () => {
  const boardMembers = [
    {
      name: "Prof. Ashok Jhunjhunwala",
      role: "Guiding Faculty",
      bio: "Institute Professor and founding member, leading IIT Madras's entrepreneurship initiatives",
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Industry Associate",
      bio: "Former CTO at leading tech unicorn, specializing in deep-tech ventures",
    },
    {
      name: "Ms. Priya Sharma",
      role: "Knowledge Partner",
      bio: "Venture capital expert with 15+ years in startup ecosystem building",
    },
  ];

  const leadership = [
    {
      name: "Arjun Patel",
      role: "Founder",
      bio: "Final year Computer Science student, passionate about building India's startup ecosystem",
    },
    {
      name: "Meera Krishnan",
      role: "President",
      bio: "MBA candidate with experience in startup operations and fundraising",
    },
  ];

  const executiveCore = [
    { name: "Vikram Singh", role: "Vice President" },
    { name: "Ananya Iyer", role: "Secretary" },
    { name: "Rohan Mehta", role: "Treasurer" },
    { name: "Kavya Nair", role: "Operations Head" },
  ];

  const verticalHeads = [
    {
      category: "General Verticals",
      icon: Target,
      members: [
        { name: "Rahul Sharma", role: "Incubation Lead" },
        { name: "Priya Patel", role: "Funding & Investor Relations" },
        { name: "Amit Kumar", role: "Partnerships & Outreach" },
      ],
    },
    {
      category: "Domain Verticals",
      icon: Zap,
      members: [
        { name: "Sneha Reddy", role: "EdTech Vertical" },
        { name: "Karthik Menon", role: "FinTech Vertical" },
        { name: "Divya Krishnan", role: "HealthTech Vertical" },
        { name: "Suresh Babu", role: "Sustainability Vertical" },
      ],
    },
    {
      category: "Operational Departments",
      icon: Users,
      members: [
        { name: "Lakshmi Devi", role: "PR & Communications" },
        { name: "Nikhil Desai", role: "Content & Editorial" },
        { name: "Pooja Malhotra", role: "Multimedia & Design" },
        { name: "Arun Krishnan", role: "Events & Logistics" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Board Members */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Award className="text-primary-foreground" size={24} />
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Board Members
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              Strategic advisors providing guidance and mentorship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {boardMembers.map((member, index) => (
              <div
                key={member.name}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-primary mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-foreground text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary text-center mb-3 font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground text-center leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Leadership
            </h2>
            <p className="text-lg text-muted-foreground">
              Driving JITSIE's vision and operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl">
            {leadership.map((member, index) => (
              <div
                key={member.name}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-32 h-32 rounded-2xl bg-gradient-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-bold text-foreground text-center mb-1">
                  {member.name}
                </h3>
                <p className="text-base text-primary text-center mb-3 font-medium">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Core Committee */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Executive Core Committee
            </h2>
            <p className="text-lg text-muted-foreground">
              Central decision-making body responsible for strategic
              initiatives
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {executiveCore.map((member, index) => (
              <div
                key={member.name}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-xl bg-gradient-primary mb-3 mx-auto" />
                <h3 className="text-lg font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals & Departments */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Verticals & Departments
            </h2>
            <p className="text-lg text-muted-foreground">
              Specialized teams driving focused initiatives
            </p>
          </div>
          <div className="space-y-12 lg:space-y-16">
            {verticalHeads.map((vertical, verticalIndex) => (
              <div
                key={vertical.category}
                style={{ animationDelay: `${verticalIndex * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <vertical.icon
                      className="text-primary-foreground"
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                    {vertical.category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {vertical.members.map((member, memberIndex) => (
                    <div
                      key={member.name}
                      className="p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center"
                      style={{ animationDelay: `${memberIndex * 50}ms` }}
                    >
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent/10 mb-3 mx-auto" />
                      <h4 className="text-base font-bold text-foreground mb-1">
                        {member.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {member.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Want to Join Our Team?
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground">
              We're always looking for passionate individuals to join our
              mission
            </p>
            <button className="px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg shadow-glow hover:shadow-elegant transition-all hover:scale-105">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
