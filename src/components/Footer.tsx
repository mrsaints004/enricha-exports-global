const Footer = () => {
  return (
    <footer className="bg-gradient-luxury text-luxury-light relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/4ca609f3-1c49-4e12-9cf4-c1f6250aa748.png" 
                alt="ENRICHA Logo" 
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold">ENRICHA</span>
            </div>
            <p className="text-earth-light/80 mb-6 max-w-md">
              Your trusted partner for premium agricultural exports from Nigeria to the world. 
              Quality, reliability, and sustainability in every shipment.
            </p>
            <div className="text-sm text-earth-light/60">
              © 2024 ENRICHA. All rights reserved.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-earth-light/80">
              <li>Cocoa Beans</li>
              <li>Sesame Seeds</li>
              <li>Soybeans</li>
              <li>Cashew Nuts</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-earth-light/80">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Our Products</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-earth-light/20 mt-8 pt-8 text-center text-sm text-earth-light/60">
          <p>Building bridges between African agriculture and global markets</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;