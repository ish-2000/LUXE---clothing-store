import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroVideoSection from './components/HeroVideoSection';
import FeaturedCategories from './components/FeaturedCategories';
import NewArrivals from './components/NewArrivals';
import BrandPhilosophy from './components/BrandPhilosophy';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Collections from './pages/Collections';
import CollectionDetails from './pages/CollectionDetails';
import Shop from './pages/Shop';
import About from './pages/About';

// Home page component that contains the landing page sections
const Home = () => (
  <>
    <HeroVideoSection />
    <FeaturedCategories />
    <NewArrivals />
    <BrandPhilosophy />
    <Newsletter />
  </>
);

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-brand-black text-brand-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:collectionSlug" element={<CollectionDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
