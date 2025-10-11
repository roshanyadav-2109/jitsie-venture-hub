import {
  ArrowRight,
  Rocket,
  Users,
  TrendingUp,
  Target,
  Lightbulb,
  Network,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CounterCard from "@/components/CounterCard";
import TestimonialCard from "@/components/TestimonialCard";
import Hero from "@/components/Hero";

const Home = () => {
  const activities = [
    {
      icon: Rocket,
      title: "Startup Cohorts",
      description:
        "Structured programs to accelerate startup growth with mentorship and resources",
    },
    {
      icon: Target,
      title: "Startathons",
      description:
        "Intensive innovation sprints bringing ideas to reality",
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

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Founder, EduLearn AI",
      testimonial:
        "JITSIE was instrumental in our early days. The mentorship and resources provided were invaluable in helping us navigate the challenges of building a startup.",
      avatar: "/placeholder.svg", // Replace with actual avatar image
    },
    {
      name: "Rahul Verma",
      role: "CEO, FinFlow",
      testimonial:
        "The network and community at JITSIE are unparalleled. We were able to connect with key investors and partners that helped us scale our business.",
      avatar: "/placeholder.svg", // Replace with actual avatar image
    },
    {
      name: "Anjali Mehta",
      role: "Co-founder, HealthBridge",
      testimonial:
        "The guidance and support from the JITSIE team were crucial in our journey from a concept to a market-ready product. We are grateful for their unwavering belief in our vision.",
      avatar: "/placeholder.svg", // Replace with actual avatar image
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with JITSIE Title */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h1 className="text-6xl lg:text-8xl font-bold text-gray-900 dark:text-gray-100">
              JITSIE
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-800 dark:text-gray-200">
              The Entrepreneurship Society IIT Madras
            </p>
          </div>
        </div>
      </section>
      
      {/* Metrics Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <CounterCard value={1800} suffix="+" label="Community Members" />
            <CounterCard value={200} suffix="+" label="Emerging Startups" />
            <CounterCard value={45} suffix="+" label="Startups Incubated" />
            <CounterCard value={2200} suffix="+" label="Individuals Educated" />
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive suite of programs and resources to support you at
              every stage of your entrepreneurial journey.
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
                  <activity.icon
                    className="text-primary-foreground"
                    size={28}
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Inspiration Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-2xl bg-gradient-primary"></div>
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

      {/* Our Supporters Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Our Supporters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are proud to partner with leading organizations that share our
              vision for a thriving deep-tech ecosystem. You can learn more about them on our{" "}
              <Link
                to="/partners"
                className="text-primary underline-offset-4 hover:underline"
              >
                partners page
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Inspiring Testimonials Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Inspiring Testimonials
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the founders who have been a part of the JITSIE
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
