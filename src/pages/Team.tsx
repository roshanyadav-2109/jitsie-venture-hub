const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-28 pb-16 lg:pt-20 lg:pb-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content on the left */}
          <div className="text-left space-y-6 animate-fade-in-up">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase bg-gradient-primary bg-clip-text text-transparent">
                JITSIE
              </h1>
              <p className="text-base md:text-lg font-semibold uppercase tracking-wider text-foreground mt-2">
                The Entrepreneurship Society, IIT Madras
              </p>
            </div>
            <p className="text-base text-muted-foreground leading-relaxed">
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
                src="https://placehold.co/600x400/000000/FFFFFF?text=JITSIE+Event"
                alt="Jitsie Event 1"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="col-span-3 row-span-1">
              <img
                src="https://placehold.co/600x400/111111/FFFFFF?text=JITSIE+Team"
                alt="Jitsie Team"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="col-span-2 row-span-1">
              <img
                src="https://placehold.co/400x400/222222/FFFFFF?text=Startup"
                alt="Jitsie Startup"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="col-span-2 row-span-1">
              <img
                src="https://placehold.co/400x400/333333/FFFFFF?text=Workshop"
                alt="Jitsie Workshop"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="col-span-2 row-span-1">
              <img
                src="https://placehold.co/400x400/444444/FFFFFF?text=Pitch+Day"
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
