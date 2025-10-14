import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building2, TrendingUp, Network, Globe, Blocks } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Partners = () => {
  const [partners, setPartners] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("partners")
        .select("*")
        .order("name");
      
      if (error) {
        console.error("Error fetching partners:", error);
      } else {
        setPartners(data || []);
      }
      setLoading(false);
    };

    fetchPartners();
  }, []);

  const categoryIcons: Record<string, any> = {
    "Foundational Partners": Building2,
    "Incubators & Government Bodies": Globe,
    "VC & Growth Partners": TrendingUp,
    "Ecosystem & Outreach Partners": Network,
    "Web3 & Emerging Tech Partners": Blocks,
  };

  const categoryDescriptions: Record<string, string> = {
    "Foundational Partners": "Strategic partners who have been instrumental in establishing JITSIE",
    "Incubators & Government Bodies": "Public sector partners supporting our incubation and policy initiatives",
    "VC & Growth Partners": "Investment firms providing capital and growth support to our startups",
    "Ecosystem & Outreach Partners": "Organizations helping us build connections and community",
    "Web3 & Emerging Tech Partners": "Partners at the forefront of blockchain and emerging technologies",
  };

  const groupedPartners = partners.reduce((acc, partner) => {
    if (!acc[partner.category]) {
      acc[partner.category] = [];
    }
    acc[partner.category].push(partner);
    return acc;
  }, {} as Record<string, any[]>);

  const partnerCategories = Object.keys(groupedPartners).map(category => ({
    category,
    icon: categoryIcons[category] || Building2,
    description: categoryDescriptions[category] || "",
    partners: groupedPartners[category],
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Partners</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Collaborating with industry leaders to build India's entrepreneurship ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">Loading partners...</p>
            </div>
          ) : partners.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No partners to display</p>
            </div>
          ) : (
            <div className="space-y-16 lg:space-y-24">
              {partnerCategories.map((category, categoryIndex) => (
              <div
                key={category.category}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <category.icon className="text-primary-foreground" size={28} />
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                        {category.category}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.partners.map((partner, partnerIndex) => (
                    <div
                      key={partner.id}
                      className="group p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center"
                      style={{ animationDelay: `${partnerIndex * 50}ms` }}
                    >
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl font-bold text-primary">
                          {partner.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="text-base lg:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Why Partner With Us?
              </h2>
              <p className="text-lg text-muted-foreground">
                Join hands with India's premier entrepreneurship society
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Access to Talent</h3>
                <p className="text-muted-foreground">
                  Connect with IIT Madras's brightest minds and emerging entrepreneurs building
                  innovative solutions across sectors
                </p>
              </div>
              <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Innovation Pipeline</h3>
                <p className="text-muted-foreground">
                  Get early access to cutting-edge research, deep-tech innovations, and
                  promising startups in the ideation stage
                </p>
              </div>
              <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Brand Visibility</h3>
                <p className="text-muted-foreground">
                  Enhance your brand presence within India's premier technical institution and
                  its extensive alumni network
                </p>
              </div>
              <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
                <h3 className="text-xl font-bold text-foreground mb-3">Community Impact</h3>
                <p className="text-muted-foreground">
                  Contribute to building a vibrant startup ecosystem and nurturing the next
                  generation of Indian founders
                </p>
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
              Interested in Partnering?
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Let's collaborate to build the future of entrepreneurship in India
            </p>
            <button className="px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg shadow-glow hover:shadow-elegant transition-all hover:scale-105">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
