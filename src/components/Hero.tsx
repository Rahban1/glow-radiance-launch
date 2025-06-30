
import { Button } from '@/components/ui/button';
import { Star, Shield, Leaf, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
                Unveil Your
                <span className="block bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent font-medium">
                  Natural Radiance
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                Transform your skin with Crystal Glow's premium whitening cream. 
                Dermatologist-tested formula with organic ingredients for all skin types.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Shield className="w-5 h-5 text-pink-500" />
                <span>Dermatologist Tested</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Leaf className="w-5 h-5 text-green-500" />
                <span>Organic Ingredients</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Award className="w-5 h-5 text-yellow-500" />
                <span>All Skin Types</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get Crystal Glow - ₹499
              </Button>
              <div className="flex items-center gap-1 text-sm text-gray-600">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2">4.9/5 from 2,847 reviews</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative flex justify-center items-center">
            <div className="relative animate-[float_6s_ease-in-out_infinite]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-rose-400/30 rounded-full blur-3xl scale-150"></div>
              <img 
                src="/lovable-uploads/7cd5dd79-7477-4c0f-a0c6-7b320eeacd0c.png" 
                alt="Crystal Glow Skin Whitening Cream"
                className="relative z-10 w-80 h-80 object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 right-10 animate-[float_4s_ease-in-out_infinite_1s] opacity-80">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-pink-500">99%</div>
                <div className="text-sm text-gray-600">Natural</div>
              </div>
            </div>
            
            <div className="absolute bottom-32 left-10 animate-[float_5s_ease-in-out_infinite_2s] opacity-80">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-rose-500">7 Days</div>
                <div className="text-sm text-gray-600">Visible Results</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-transparent rounded-full blur-xl"></div>
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-gradient-to-br from-rose-200/20 to-transparent rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;
