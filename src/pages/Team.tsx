import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Award, Target, Zap } from "lucide-react";
import Hero from "@/components/Hero";
import { supabase } from "@/integrations/supabase/client";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      setLoading(true);
      // @ts-expect-error - Table exists in external Supabase project
      const { data, error } = await supabase
        .from("team_members")
        .select("*")
        .order("name");
      
      if (error) {
        console.error("Error fetching team members:", error);
      } else {
        setTeamMembers(data || []);
      }
      setLoading(false);
    };

    fetchTeamMembers();
  }, []);

  const boardMembers = teamMembers.filter(m => m.category === "Board Members");
  const leadership = teamMembers.filter(m => m.category === "Leadership");
  const executiveCore = teamMembers.filter(m => m.category === "Executive Core Committee");
  
  const generalVerticals = teamMembers.filter(m => m.category === "General Verticals");
  const domainVerticals = teamMembers.filter(m => m.category === "Domain Verticals");
  const operationalDepartments = teamMembers.filter(m => m.category === "Operational Departments");

  const verticalHeads = [
    {
      category: "General Verticals",
      icon: Target,
      members: generalVerticals,
    },
    {
      category: "Domain Verticals",
      icon: Zap,
      members: domainVerticals,
    },
    {
      category: "Operational Departments",
      icon: Users,
      members: operationalDepartments,
    },
  ].filter(v => v.members.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Board Members */}
      {loading ? (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-xl text-muted-foreground">Loading team members...</p>
          </div>
        </section>
      ) : (
        <>
          {boardMembers.length > 0 && (
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
                    {member.bio && (
                      <p className="text-sm text-muted-foreground text-center leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                  </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Leadership */}
          {leadership.length > 0 && (
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
                    {member.bio && (
                      <p className="text-muted-foreground text-center leading-relaxed">
                        {member.bio}
                      </p>
                    )}
                  </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Executive Core Committee */}
          {executiveCore.length > 0 && (
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
          )}

          {/* Verticals & Departments */}
          {verticalHeads.length > 0 && (
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
      )}
    </>
  )}

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
