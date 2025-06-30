
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Droplets, Sun, Moon } from 'lucide-react';

const ProductDetails = () => {
  const ingredients = [
    {
      name: "Vitamin C",
      icon: Sun,
      benefit: "Brightens & protects"
    },
    {
      name: "Niacinamide",
      icon: Droplets,
      benefit: "Reduces dark spots"
    },
    {
      name: "Kojic Acid",
      icon: Leaf,
      benefit: "Natural whitening"
    },
    {
      name: "Hyaluronic Acid",
      icon: Moon,
      benefit: "Deep hydration"
    }
  ];

  const steps = [
    "Cleanse your face with mild cleanser",
    "Pat dry with a clean towel",
    "Apply small amount of Crystal Glow",
    "Massage gently in circular motions",
    "Use twice daily for best results"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
                Premium 
                <span className="block bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent font-medium">
                  Ingredients
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our carefully selected organic ingredients work synergistically to 
                deliver safe, effective, and lasting results for all skin types.
              </p>
            </div>

            {/* Ingredients Grid */}
            <div className="grid grid-cols-2 gap-4">
              {ingredients.map((ingredient, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ingredient.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{ingredient.name}</div>
                      <div className="text-sm text-gray-600">{ingredient.benefit}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Skin Types */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Perfect For All Skin Types</h3>
              <div className="flex flex-wrap gap-2">
                {['Dry Skin', 'Oily Skin', 'Combination', 'Sensitive', 'Normal', 'Mature'].map((type) => (
                  <Badge key={type} variant="secondary" className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <Card className="p-8 border-0 bg-gradient-to-br from-pink-50 to-rose-50 shadow-xl">
              <div className="text-center mb-8">
                <img 
                  src="/lovable-uploads/10be1acd-bd67-44ae-a075-fbd8b0a2f335.png" 
                  alt="Crystal Glow Product Showcase"
                  className="w-full max-w-sm mx-auto rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Use</h3>
                  <div className="space-y-3">
                    {steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </div>
                        <p className="text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-gray-200">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">Only ₹499/-</div>
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Order Crystal Glow Now
                  </Button>
                  <p className="text-sm text-gray-600 mt-2">Free shipping • 30-day money-back guarantee</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
