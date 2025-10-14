import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Users, Briefcase, Heart, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipType: "general",
    role: "",
    motivation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // @ts-ignore - Table exists in external Supabase project
      const { error } = await supabase.from("members").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          membership_type: formData.membershipType,
          preferred_role: formData.role || null,
          motivation: formData.motivation,
        },
      ]);

      if (error) throw error;

      toast.success("Application submitted successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        membershipType: "general",
        role: "",
        motivation: "",
      });
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "Community Access",
      description: "Join a vibrant network of 1800+ entrepreneurs, mentors, and innovators",
    },
    {
      icon: Briefcase,
      title: "Learning Opportunities",
      description: "Access to workshops, founder talks, and skill development programs",
    },
    {
      icon: Heart,
      title: "Mentorship",
      description: "Get guidance from successful founders and industry experts",
    },
    {
      icon: TrendingUp,
      title: "Growth Support",
      description: "Resources and support to take your ideas from concept to reality",
    },
  ];

  const roles = [
    {
      category: "Executive Core Committee",
      positions: [
        "Vice President",
        "Secretary",
        "Treasurer",
        "Operations Head",
      ],
      criteria: "Strong leadership, commitment, and prior involvement in JITSIE activities",
    },
    {
      category: "Vertical Heads",
      positions: [
        "Incubation Lead",
        "Funding & Investor Relations",
        "EdTech/FinTech/HealthTech Verticals",
      ],
      criteria: "Domain expertise and passion for the specific vertical",
    },
    {
      category: "Department Cores",
      positions: [
        "PR & Communications",
        "Content & Editorial",
        "Multimedia & Design",
        "Events & Logistics",
      ],
      criteria: "Relevant skills and willingness to contribute actively",
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
              <span className="bg-gradient-primary bg-clip-text text-transparent">Join</span> JITSIE
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Be part of India's most vibrant entrepreneurship community
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Why Join JITSIE?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Unlock exclusive benefits and opportunities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="text-primary-foreground" size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                General Membership
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below to become a member
              </p>
            </div>
            <form onSubmit={handleSubmit} className="p-8 lg:p-12 rounded-2xl bg-card border border-border space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div className="space-y-2">
                <Label>Membership Type *</Label>
                <RadioGroup
                  value={formData.membershipType}
                  onValueChange={(value) => setFormData({ ...formData, membershipType: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="general" id="general" />
                    <Label htmlFor="general" className="cursor-pointer">General Member</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="leadership" id="leadership" />
                    <Label htmlFor="leadership" className="cursor-pointer">Leadership Position</Label>
                  </div>
                </RadioGroup>
              </div>

              {formData.membershipType === "leadership" && (
                <div className="space-y-2">
                  <Label htmlFor="role">Preferred Role *</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                    placeholder="e.g., Vice President, Content Lead"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="motivation">Why do you want to join JITSIE? *</Label>
                <Textarea
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  required
                  placeholder="Tell us about your motivation and what you hope to contribute..."
                  rows={5}
                />
              </div>

              <Button type="submit" size="lg" className="w-full shadow-glow" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-muted-foreground">
                Leadership opportunities for committed individuals
              </p>
            </div>
            <div className="space-y-8">
              {roles.map((roleCategory, index) => (
                <div
                  key={roleCategory.category}
                  className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {roleCategory.category}
                  </h3>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      Available Positions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {roleCategory.positions.map((position) => (
                        <span
                          key={position}
                          className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                        >
                          {position}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">
                      Eligibility Criteria:
                    </p>
                    <p className="text-muted-foreground">
                      {roleCategory.criteria}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
              Questions?
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Reach out to us for any queries about membership or recruitment
            </p>
            <a href="mailto:contact@jitsie.com">
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
