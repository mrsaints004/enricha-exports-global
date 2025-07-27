import cocoaImage from "@/assets/cocoa-beans.jpg";
import sesameImage from "@/assets/sesame-seeds.jpg";
import soybeansImage from "@/assets/soybeans.jpg";
import cashewImage from "@/assets/cashew-nuts.jpg";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    name: "Premium Cocoa Beans",
    image: cocoaImage,
    description: "High-quality cocoa beans with rich flavor profile, perfect for chocolate manufacturing.",
    specifications: ["Moisture: 7-8%", "Fermentation: Fully fermented", "Grade: Export quality"]
  },
  {
    name: "Sesame Seeds",
    image: sesameImage,
    description: "Natural sesame seeds with excellent oil content and nutritional value.",
    specifications: ["Oil content: 48-52%", "Purity: 99%", "Moisture: 6% max"]
  },
  {
    name: "Soybeans",
    image: soybeansImage,
    description: "Premium soybeans for oil extraction and protein processing.",
    specifications: ["Protein: 38-40%", "Oil content: 18-20%", "Moisture: 14% max"]
  },
  {
    name: "Cashew Nuts",
    image: cashewImage,
    description: "Fresh cashew nuts with superior taste and texture.",
    specifications: ["Grade: W180, W240, W320", "Moisture: 5% max", "Broken: 5% max"]
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-earth-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We source and export the finest agricultural products from Nigeria, 
            ensuring quality that meets international standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-square overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                <div className="space-y-1">
                  {product.specifications.map((spec, specIndex) => (
                    <div key={specIndex} className="text-sm text-earth text-opacity-80">
                      • {spec}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;