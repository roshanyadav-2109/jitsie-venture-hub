import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Events = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      // @ts-expect-error - Table exists in external Supabase project
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });
      
      if (error) {
        console.error("Error fetching events:", error);
      } else {
        setEvents(data || []);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

  const upcomingEvents = events.filter(e => e.is_upcoming);
  const pastEvents = events.filter(e => !e.is_upcoming);

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
          {loading ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">Loading events...</p>
            </div>
          ) : upcomingEvents.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No upcoming events at the moment</p>
            </div>
          ) : (
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
                    {event.speakers && event.speakers.length > 0 && (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Users size={18} className="text-primary" />
                          <span className="font-semibold text-foreground">Speakers:</span>
                        </div>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {event.speakers.map((speaker: string) => (
                            <li key={speaker}>{speaker}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
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
          {loading ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">Loading past events...</p>
            </div>
          ) : pastEvents.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No past events to display</p>
            </div>
          ) : (
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
                {event.highlights && event.highlights.length > 0 && (
                  <div>
                    <div className="font-semibold text-foreground mb-2">Key Highlights:</div>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight: string) => (
                        <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              ))}
            </div>
          )}
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
