import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src="/lovable-uploads/4ca609f3-1c49-4e12-9cf4-c1f6250aa748.png" 
            alt="ENRICHA Logo" 
            className="h-10 w-auto"
          />
          <span className="text-2xl font-bold text-foreground">ENRICHA</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
          <a href="#why-us" className="text-foreground hover:text-primary transition-colors">Why Choose Us</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <Button variant="outline" className="hidden md:inline-flex">
          Get Quote
        </Button>
      </div>
    </header>
  );
};

export default Header;