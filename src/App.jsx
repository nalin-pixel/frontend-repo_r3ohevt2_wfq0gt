import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import AnalyticsPanel from './components/AnalyticsPanel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-inter">
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <AnalyticsPanel />
      </main>
      <Footer />
    </div>
  );
}

export default App;
