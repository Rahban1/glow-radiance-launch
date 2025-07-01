import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import ProductDetails from '../components/ProductDetails';
import Footer from '../components/Footer';
import ComingSoon from '../components/ComingSoon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ComingSoon />
      <Benefits />
      <ProductDetails />
      <Footer />
    </div>
  );
};

export default Index;
