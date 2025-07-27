import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Globe, Shield, Truck } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About ENRICHA
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              ENRICHA is a leading agricultural export company based in Nigeria, 
              specializing in connecting local farmers with global markets. We have 
              built a reputation for delivering premium quality agricultural products 
              to buyers across the world.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our commitment to quality, reliability, and sustainable farming practices 
              has made us a trusted partner for international buyers seeking the finest 
              African agricultural produce.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-foreground">ISO Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-foreground">HACCP Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-foreground">FDA Approved</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span className="text-foreground">Fair Trade Certified</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Global Reach</h3>
                <p className="text-muted-foreground">
                  Exporting to over 50 countries worldwide with established logistics networks.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  Rigorous quality control processes ensure premium products every time.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Reliable Logistics</h3>
                <p className="text-muted-foreground">
                  Efficient supply chain management for timely delivery worldwide.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Sustainable Practices</h3>
                <p className="text-muted-foreground">
                  Supporting local farmers with sustainable and ethical sourcing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;