import { Leaf, Shield, Award, Heart, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-rose-300 bg-clip-text text-transparent">
              Crystal Glow
            </div>
            <p className="text-gray-300 leading-relaxed">
              Unveiling natural radiance with premium skincare solutions for everyone.
            </p>
            <div className="pt-2">
              <a
                href="https://instagram.com/mohdanwar_21"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Why Choose Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-4 h-4 text-pink-400" />
                <span className="text-sm">Dermatologist Tested</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Leaf className="w-4 h-4 text-green-400" />
                <span className="text-sm">100% Organic</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm">Award Winning</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm">Cruelty Free</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Phone: +91 83687 93616</p>
              <p>Manufactured and Marketed by Mohd Anwar</p>
              <p>T-381 Nizamuddin west New Delhi - 110013</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Crystal Glow. All rights reserved. Made with ❤️ for beautiful skin.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
