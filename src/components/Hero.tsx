import { Button } from '@/components/ui/button';
import { Star, Shield, Leaf, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
                Get Glow
                <span className="block bg-gradient-to-r py-2 from-pink-500 to-rose-400 bg-clip-text text-transparent font-medium">
                  Like Crystal
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
                <span>Delivering Globally</span>
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
                <a
                  href="https://wa.me/7289948867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  style={{ minWidth: '220px' }}
                >
                  <Button
                    className="bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center w-full"
                  >
                    Get Crystal Glow - ₹499
                  </Button>
                </a>
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
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-rose-400/30 rounded-full blur-3xl "></div>
              <div className="flex flex-col sm:flex-row justify-center items-center relative gap-4 sm:gap-2">
                <img 
                  src="/lovable-uploads/7cd5dd79-7477-4c0f-a0c6-7b320eeacd0c.png" 
                  alt="Crystal Glow Skin Whitening Cream"
                  className="w-32 h-32 sm:w-64 sm:h-64 object-cover rounded-xl border-2 border-white shadow-lg bg-white z-20 sm:transform sm:-rotate-6 sm:-translate-y-2"
                  loading="lazy"
                />
                <img
                  src="/product.jpg"
                  alt="Crystal Glow Product 1"
                  className="w-40 h-40 sm:w-64 sm:h-64 object-cover rounded-xl border-2 border-white shadow-lg bg-white z-10 sm:transform sm:rotate-6 sm:translate-y-4"
                  loading="lazy"
                />
                <img
                  src="/product2.jpg"
                  alt="Crystal Glow Product 2"
                  className="w-32 h-32 sm:w-64 sm:h-64 object-cover rounded-xl border-2 border-white shadow-lg bg-white z-10 sm:transform sm:-rotate-12 sm:translate-y-6"
                  loading="lazy"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-20 right-10 animate-[float_4s_ease-in-out_infinite_1s] opacity-80">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-pink-500">No Side Effects</div>
                <div className="text-sm text-gray-600 text-center">Guaranteed</div>
              </div>
            </div>
            
            <div className="absolute bottom-32 left-10 animate-[float_5s_ease-in-out_infinite_2s] opacity-80">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="text-2xl font-bold text-rose-500">30 Days</div>
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
