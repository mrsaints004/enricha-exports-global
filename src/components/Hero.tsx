import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-agriculture.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Premium Agricultural 
            <span className="text-primary block">Exports Worldwide</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            ENRICHA connects global markets with Nigeria's finest agricultural produce. 
            We export premium cocoa, sesame, soybeans, cashew nuts, and more to international buyers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg">
              View Our Products
            </Button>
            <Button variant="outline" size="lg">
              Request Catalog
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-muted-foreground">Tons Exported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;