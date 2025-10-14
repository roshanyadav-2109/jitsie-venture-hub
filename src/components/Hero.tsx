const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-28 pb-16 lg:pt-20 lg:pb-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content on the left */}
          <div className="text-left animate-fade-in-up">
            <div className="inline-block">
              <h1 className="font-display text-7xl md:text-8xl lg:text-9xl font-extrabold bg-gradient-primary bg-clip-text text-transparent tracking-tight">
                JITSIE
              </h1>
              <p className="text-base md:text-lg font-semibold uppercase tracking-wider text-foreground">
                The Entrepreneurship Society, IIT Madras
              </p>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed mt-6">
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

          {/* Image Grid on the right */}
          <div className="grid grid-cols-6 grid-rows-2 gap-4 animate-fade-in-up h-[400px]">
            <div className="col-span-3 row-span-1">
              <img
                src="/placeholder.svg" // Replace with your image
                alt="Jitsie Event 1"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="col-span-3 row-span-1">
              <img
                src="/placeholder.svg" // Replace with your image
                alt="Jitsie Team"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="col-span-2 row-span-1">
              <img
                src="/placeholder.svg" // Replace with your image
                alt="Jitsie Startup"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="col-span-2 row-span-1">
              <img
                src="/placeholder.svg" // Replace with your image
                alt="Jitsie Workshop"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="col-span-2 row-span-1">
              <img
                src="/placeholder.svg" // Replace with your image
                alt="Jitsie Pitch Day"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
