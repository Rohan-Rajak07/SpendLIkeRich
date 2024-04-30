import "./App.css";

import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import PriceSection from "./Components/PriceSection";
import CardList from "./Components/CardList";
import ProductListProvider from "./Store/ProductListProvider";

function App() {
  return (
      <ProductListProvider>
        <Header />
        <HeroSection />
        <PriceSection />
        <CardList />
      </ProductListProvider>
  );
}

export default App;
