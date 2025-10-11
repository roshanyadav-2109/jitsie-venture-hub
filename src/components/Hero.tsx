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
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                JITSIE
              </span>
              <br />
              The Entrepreneurship Society, IIT Madras
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              The Jamsetji Tata Society for Innovation and Entrepreneurship
              (JITSIE) is a dedicated society at IIT Madras that fosters
              deep-tech innovation by cultivating a supportive ecosystem for
              aspiring founders. Through guided startup cohorts, incubation
              support, and curated investor connect sessions, JITSIE provides a
              structured pathway for entrepreneurs to develop their ideas into
              viable ventures. The society’s core mission is to inspire,
              nurture, and accelerate the journey from initial concept to a
              market-ready business, transforming bold ideas into startups
              poised to make a significant impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
