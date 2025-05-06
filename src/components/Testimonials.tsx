
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Lovable has completely transformed our development process. What used to take weeks now takes hours.",
      author: "Sarah Johnson",
      position: "CTO at TechStart",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      quote: "As someone with no coding experience, I was able to build our company's entire website in a single weekend.",
      author: "Michael Chen",
      position: "Founder, GreenLeaf",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The AI understands exactly what I need and delivers beautiful, responsive designs every time.",
      author: "Emma Williams",
      position: "Designer at CreativeHub",
      avatar: "https://randomuser.me/api/portraits/women/67.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">Developers & Non-Developers</span> Alike
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our users have to say about their experience building with Lovable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-8">
                <div className="flex flex-col h-full">
                  <blockquote className="flex-grow">
                    <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  </blockquote>
                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-flex flex-wrap justify-center gap-8 mb-8">
            {['Microsoft', 'Google', 'Airbnb', 'Netflix', 'Shopify', 'Slack'].map((company) => (
              <div key={company} className="text-gray-400 text-xl font-bold">
                {company}
              </div>
            ))}
          </div>
          <p className="text-gray-500">Trusted by leading companies worldwide</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
