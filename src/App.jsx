import "./App.css";

import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import PriceSection from "./Components/PriceSection";
import CardList from "./Components/CardList";
import ProductListProvider from "./Store/ProductListProvider";
import Footer from './Components/Footer';
import Background from './Components/Background';
import Blurx from './Components/Blurx';


function App() {
  return (
    <ProductListProvider >
        {/* <Background/> */}
        <Blurx/>
        <Header />
        <HeroSection />
        <PriceSection />
        <CardList />
        <Footer/>
      </ProductListProvider>
  );
}

export default App;
