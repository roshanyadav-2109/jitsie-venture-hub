import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid on the left */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in-up">
            <div className="col-span-2">
              <img
                src="/placeholder.svg" // Replace with your image
                alt="Jitsie Event 1"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <img
                src="/placeholder.svg" // Replace with your image
                alt="Jitsie Team"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <img
                src="/placeholder.svg" // Replace with your image
                alt="Jitsie Startup"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Text content on the right */}
          <div className="text-left space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              Forging the Future of{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Deep-Tech Innovation
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground">
              JITSIE is the nexus where intellect, ambition, and opportunity
              converge. We are the driving force behind IIT Madras's
              entrepreneurial spirit, empowering the next generation of
              deep-tech pioneers to build ventures that will redefine tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/initiatives">
                <Button size="lg" className="shadow-glow group">
                  Explore Initiatives
                  <ArrowRight
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                    size={20}
                  />
                </Button>
              </Link>
              <Link to="/join">
                <Button size="lg" variant="outline">
                  Join Our Community
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
