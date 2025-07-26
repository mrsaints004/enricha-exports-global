import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "We maintain the highest standards in sourcing and processing, ensuring every shipment meets international quality requirements."
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "Our efficient logistics network guarantees on-time delivery to any destination worldwide, with full tracking capabilities."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our experienced professionals understand international trade requirements and provide dedicated support throughout the process."
  },
  {
    icon: Zap,
    title: "Competitive Pricing",
    description: "Direct sourcing from farmers and efficient operations allow us to offer competitive prices without compromising quality."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose ENRICHA?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to excellence in every aspect of our business, 
            making us the preferred partner for international agricultural trade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center group hover:shadow-elegant transition-all duration-300">
              <CardContent className="pt-8 pb-6 px-6">
                <div className="mb-6">
                  <feature.icon className="h-16 w-16 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Partner with Us?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied international buyers who trust ENRICHA 
            for their agricultural sourcing needs. Contact us today for a personalized quote.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-muted-foreground">Quality Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">Fast</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;