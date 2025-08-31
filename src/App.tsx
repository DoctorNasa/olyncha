import MatchaNavigation from "./components/MatchaNavigation";
import MatchaHero from "./components/MatchaHero";
import MatchaProducts from "./components/MatchaProducts";
import MatchaWellness from "./components/MatchaWellness";
import MatchaDiscovery from "./components/MatchaDiscovery";
import MatchaPairing from "./components/MatchaPairing";
import MatchaPromo from "./components/MatchaPromo";
import MatchaFooter from "./components/MatchaFooter";

export default function App() {
  return (
    <div className="min-h-screen">
      <MatchaNavigation />
      <main>
        <MatchaHero />
        <MatchaProducts />
        <MatchaWellness />
        <MatchaDiscovery />
        <MatchaPairing />
        <MatchaPromo />
      </main>
      <MatchaFooter />
    </div>
  );
}