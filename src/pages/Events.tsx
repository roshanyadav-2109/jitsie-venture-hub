import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      title: "START-A-THON 2025",
      date: "March 15-17, 2025",
      location: "IIT Madras Research Park",
      description: "Our flagship 48-hour innovation marathon bringing together 500+ entrepreneurs",
      speakers: ["Prof. Ashok Jhunjhunwala", "Vijay Shekhar Sharma (Paytm)", "Ritesh Agarwal (OYO)"],
    },
    {
      title: "Pitch Fest Q1",
      date: "January 28, 2025",
      location: "JITSIE Incubation Center",
      description: "Monthly pitching event connecting early-stage startups with angel investors",
      speakers: ["Panel of 10+ Angel Investors", "VC Representatives"],
    },
    {
      title: "Founder Talk: Building in India",
      date: "February 5, 2025",
      location: "Virtual Event",
      description: "Conversation with successful founders about scaling startups in the Indian ecosystem",
      speakers: ["Bhavish Aggarwal (Ola)", "Falguni Nayar (Nykaa)"],
    },
  ];

  const pastEvents = [
    {
      title: "START-A-THON 2024",
      date: "March 2024",
      location: "IIT Madras",
      description: "Record-breaking edition with 600+ participants and 50+ teams",
      highlights: ["₹5 lakh prize pool", "15+ industry mentors", "10 startups incubated"],
    },
    {
      title: "Wadhwani Cohort Demo Day",
      date: "December 2024",
      location: "IIT Madras Research Park",
      description: "Showcase of 12 startups from the Wadhwani acceleration program",
      highlights: ["₹8Cr funding raised", "20+ investor meetings", "3 acquisitions"],
    },
    {
      title: "Bengaluru BootCamp",
      date: "November 2024",
      location: "Koramangala, Bengaluru",
      description: "Week-long immersion in Bangalore's startup ecosystem",
      highlights: ["25 startup visits", "50+ networking connections", "15 mentor sessions"],
    },
    {
      title: "Investor Connect Summit",
      date: "October 2024",
      location: "Virtual + IIT Madras",
      description: "Hybrid event connecting portfolio startups with national and international VCs",
      highlights: ["30+ VCs participated", "₹12Cr commitments", "50+ pitch sessions"],
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
              <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span> & Programs
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              Join our community at flagship events, workshops, and networking sessions
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground">
              Mark your calendar for these exciting opportunities
            </p>
          </div>
          <div className="space-y-6 lg:space-y-8 max-w-5xl">
            {upcomingEvents.map((event, index) => (
              <div
                key={event.title}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Calendar className="text-primary-foreground" size={40} />
                    </div>
                  </div>
                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {event.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground">{event.description}</p>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Users size={18} className="text-primary" />
                        <span className="font-semibold text-foreground">Speakers:</span>
                      </div>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {event.speakers.map((speaker) => (
                          <li key={speaker}>{speaker}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              Past Events
            </h2>
            <p className="text-lg text-muted-foreground">
              A look back at our successful programs and their impact
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={event.title}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2" />
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-1">
                      {event.title}
                    </h3>
                    <div className="text-sm text-muted-foreground mb-1">{event.date}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin size={14} />
                      {event.location}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <div>
                  <div className="font-semibold text-foreground mb-2">Key Highlights:</div>
                  <ul className="space-y-1">
                    {event.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
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
              Don't Miss Out
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground">
              Stay updated with our latest events and programs
            </p>
            <button className="px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg shadow-glow hover:shadow-elegant transition-all hover:scale-105">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
