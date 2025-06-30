
import { Card } from '@/components/ui/card';
import { Sparkles, Clock, Heart, Users } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Instant Glow",
      description: "See visible brightness and radiance from the very first application",
      stat: "95%",
      statLabel: "Notice immediate glow"
    },
    {
      icon: Clock,
      title: "7-Day Transformation",
      description: "Complete skin tone improvement within one week of regular use",
      stat: "7 Days",
      statLabel: "For visible results"
    },
    {
      icon: Heart,
      title: "Gentle & Safe",
      description: "Dermatologist-tested formula that's gentle on all skin types",
      stat: "100%",
      statLabel: "Dermatologist approved"
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "Gender-neutral formula suitable for all ages and skin concerns",
      stat: "2,847+",
      statLabel: "Happy customers"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-pink-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900">
            Why Choose 
            <span className="block bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent font-medium">
              Crystal Glow?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the transformative power of our premium skin whitening formula
          </p>
        </div>

        {/* Before/After Showcase */}
        <div className="mb-20">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-r from-pink-50 to-rose-50">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/acc2b5b2-5880-452b-bd73-0dc0d450b8fc.png" 
                  alt="Before and After transformation results"
                  className="w-full rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Real Results, Real People
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    See the dramatic transformation our customers experience. 
                    Crystal Glow doesn't just promise results – it delivers them.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                    <div className="text-2xl font-bold text-pink-500">94%</div>
                    <div className="text-sm text-gray-600">Skin Brightening</div>
                  </div>
                  <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl">
                    <div className="text-2xl font-bold text-rose-500">87%</div>
                    <div className="text-sm text-gray-600">Even Skin Tone</div>
                  </div>
                </div>

                <div className="text-3xl font-bold text-center">
                  <span className="text-yellow-600">Only ₹499/-</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="text-2xl font-bold text-pink-500">
                    {benefit.stat}
                  </div>
                  <div className="text-xs text-gray-500">
                    {benefit.statLabel}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
