import "./App.css";

import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import PriceSection from "./Components/PriceSection";
import CardList from "./Components/CardList";
import ProductListProvider from "./Store/ProductListProvider";
import Footer from './Components/Footer';
import Background from './Components/Background';


function App() {
  return (
    <ProductListProvider >
        {/* <Background/> */}
        <Header />
        <HeroSection />
        <PriceSection />
        <CardList />
        <Footer/>
      </ProductListProvider>
  );
}

export default App;
