import { useState, useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Users, Linkedin } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "react-router-dom";

// Define the type for a team member based on your Supabase table
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  category: string;
  linkedin_profile_url: string | null;
  avatar_url: string | null; // Placeholder for future use
}

const Team = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .order('name', { ascending: true });

        if (error) {
          throw error;
        }
        if (data) {
          setTeam(data);
        }
      } catch (err: any) {
        console.error("Error fetching team members:", err);
        setError("Failed to load team members. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  // Group members by category using useMemo for performance
  const groupedMembers = useMemo(() => {
    return team.reduce((acc, member) => {
      const category = member.category || 'Uncategorized';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(member);
      return acc;
    }, {} as Record<string, TeamMember[]>);
  }, [team]);

  const advisoryBoard = groupedMembers['Advisory Board'] || [];
  const management = groupedMembers['Management'] || [];
  const mentors = groupedMembers['Mentors & Facilitators'] || [];

  const MemberCard = ({ member }: { member: TeamMember }) => (
    <div
      className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="w-24 h-24 rounded-full bg-gradient-primary mb-4 mx-auto flex-shrink-0 overflow-hidden">
        <img src={member.avatar_url || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-bold text-foreground text-center mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-primary text-center mb-3 font-medium">
        {member.role}
      </p>
      {member.bio && (
        <p className="text-sm text-muted-foreground text-center leading-relaxed flex-grow">
          {member.bio}
        </p>
      )}
      {member.linkedin_profile_url && (
        <div className="mt-4 text-center">
            <a
                href={member.linkedin_profile_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${member.name}'s LinkedIn Profile`}
            >
                <Linkedin size={20} />
            </a>
        </div>
      )}
    </div>
  );

  const ManagementCard = ({ member }: { member: TeamMember }) => (
     <div
      className="p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-primary mb-3 mx-auto overflow-hidden">
        <img src={member.avatar_url || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-1">
        {member.name}
      </h3>
      <p className="text-sm text-muted-foreground">
        {member.role}
      </p>
       {member.linkedin_profile_url && (
        <div className="mt-3 text-center">
            <a
                href={member.linkedin_profile_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-muted-foreground hover:text-primary transition-colors"
                aria-label={`${member.name}'s LinkedIn Profile`}
            >
                <Linkedin size={18} />
            </a>
        </div>
      )}
    </div>
  )


  const SkeletonCard = () => (
    <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
      <Skeleton className="w-24 h-24 rounded-full mb-4 mx-auto" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
      <Skeleton className="h-4 w-1/2 mx-auto mb-3" />
      <Skeleton className="h-4 w-full mx-auto" />
      <Skeleton className="h-4 w-full mx-auto mt-1" />
      <Skeleton className="h-4 w-5/6 mx-auto mt-1" />
    </div>
  );

  const SmallSkeletonCard = () => (
     <div className="p-6 rounded-2xl bg-card border border-border">
      <Skeleton className="w-20 h-20 rounded-full mb-3 mx-auto" />
      <Skeleton className="h-5 w-3/4 mx-auto mb-2" />
      <Skeleton className="h-4 w-1/2 mx-auto" />
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              The <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span> Behind JITSIE
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Meet the minds driving our mission to foster innovation and entrepreneurship.
            </p>
          </div>
        </div>
      </section>

      {error && <div className="container mx-auto px-4 py-16 text-center text-destructive">{error}</div>}

      {/* Advisory Board */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Award className="text-primary-foreground" size={24} />
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Advisory Board
              </h2>
            </div>
            <p className="text-lg text-muted-foreground text-center">
              Strategic advisors providing guidance and mentorship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
            ) : (
              advisoryBoard.map((member) => <MemberCard key={member.id} member={member} />)
            )}
          </div>
        </div>
      </section>

      {/* Mentors & Facilitators */}
       <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Users className="text-primary-foreground" size={24} />
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Mentors & Facilitators
              </h2>
            </div>
            <p className="text-lg text-muted-foreground text-center">
              Industry experts guiding our next generation of founders.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => <SmallSkeletonCard key={i} />)
            ) : (
              mentors.map((member) => <ManagementCard key={member.id} member={member} />)
            )}
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground text-center mb-4">
              Management
            </h2>
            <p className="text-lg text-muted-foreground text-center">
              Driving JITSIE's vision and operations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
             {loading ? (
              Array.from({ length: 2 }).map((_, i) => <SmallSkeletonCard key={i} />)
            ) : (
              management.map((member) => <ManagementCard key={member.id} member={member} />)
            )}
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
            <Link to="/join">
              <button className="px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg shadow-glow hover:shadow-elegant transition-all hover:scale-105">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
