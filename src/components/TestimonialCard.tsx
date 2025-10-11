interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  avatar: string;
}

const TestimonialCard = ({
  name,
  role,
  testimonial,
  avatar,
}: TestimonialCardProps) => {
  return (
    <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="w-24 h-24 rounded-full bg-gradient-primary mb-4 mx-auto overflow-hidden">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
      <p className="text-sm text-primary mb-3 font-medium">{role}</p>
      <p className="text-sm text-muted-foreground leading-relaxed">
        "{testimonial}"
      </p>
    </div>
  );
};

export default TestimonialCard;
