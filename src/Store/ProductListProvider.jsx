import { createContext, useState } from "react";

 export const ProductList = createContext({
  products: [],
  productBuy: () => {},
  productSell: () => {},
});

const ProductListProvider = ({ children }) => {

    const totalAmount=15683345400000
    var [remainAmount,setReamainAmount]=useState(totalAmount)
    var [percentageUsed,setPercentageUsed]=useState(0)

  var productList = [
    { id: 0, image:"card/airpod.jpg", title: "AirPord Pro", price: 20000, quantity: 0 },

    { id: 1, image:"card/Nintendo_Switch.jpg", title: "Nintendo Switch", price: 24950, quantity: 0 },

    { id: 2, image:"card/PS5.jpg", title: "PS-5", price: 41500, quantity: 0 },
    { id: 3, image:"card/Xbox_SeriesX.jpg", title: "Xbox SeriesX", price:  41000, quantity: 0 },
    { id: 4, image:"card/Iphone15_proMax.jpg", title: "Iphone15 Pro Max", price:  149999, quantity: 0 },
    { id: 5, image:"card/samsung.png", title: "Samsung S23 Ultra - 1TB", price:  12599, quantity: 0 },
    { id: 6, image:"card/airpod.jpg", title: "MacBook Pro 14' M3 Max ", price: 392131, quantity: 0 },
    { id: 7, image:"card/Gaming_cpu.jpg", title: "Gaming Pc", price: 550000, quantity: 0 },
    { id: 8, image:"card/Razer_blade.jpg", title: "Razer Blade 14 Top spec", price: 320000, quantity: 0 },
    { id: 9, image:"card/IpadAir.jpg", title: "Ipad Air M2 Chip(256 GB)", price: 62599 , quantity: 0 },
    { id: 10, image:"card/Telsa_Bot(2025).jpg", title: "Telsa Bot(2025)", price:  1669000, quantity: 0 },
    { id: 11, image:"card/Startup.jpg", title: "Start your own StartUp", price:  41000000, quantity: 0 },
    { id: 12, image:"card/fastfood.jpg", title: "Open Fast Food Franchise", price:  500000, quantity: 0 },
    { id: 13, image:"card/spotify.jpg", title: "spotify for 80 yrs", price:  1051470, quantity: 0 },
    { id: 14, image:"card/steam.jpg", title: "Entire Steam library", price:  6909660, quantity: 0 },
    { id: 15, image:"card/netflix.jpg", title: "Netflix for 80 Years", price:  1543825, quantity: 0 },
    { id: 16, image:"card/pvt_concert.jpg", title: "Private Concert with ANY Super Star", price:  1000000, quantity: 0 },
    { id: 17, image:"card/sattile.jpg", title: "Launch your own satellite", price:  300000000, quantity: 0 },
    { id: 18, image:"card/Lg_Tv.png", title: "LG 88' OLED 8K ThinQ®", price:  150000, quantity: 0 },
    { id: 19, image:"card/Fiat.jpg", title: "Fiat", price:  1585550, quantity: 0 },
    { id: 20, image:"card/Toyota.jpg", title: "Toyota Camry", price:  2420000, quantity: 0 },
    { id: 21, image:"card/Ford.jpg", title: "Ford F150 Raptor", price:  5499355, quantity: 0 },
    { id: 22, image:"card/Telsa_model_S.jpg", title: "Tesla Model S Plaid", price:  11015400, quantity: 0 },
    { id: 23, image:"card/Cybertruck.jpg", title: "Cybertruck (Tri Motor)", price: 5841500, quantity: 0 },
    { id: 24, image:"card/Tesla_Roadster.jpg", title: "Tesla Roadster", price:  20000000, quantity: 0 },
    { id: 25, image:"card/Bugatti.jpg", title: "Bugatti La Voiture Noire", price: 204500000, quantity: 0 },
    { id: 26, image:"card/Lamborghini.jpg", title: "Lamborghini Aventador SVJ", price: 35000000, quantity: 0 },
    { id: 27, image:"card/Ferrari_F8.jpg", title: "Ferrari F8 Tributo", price:  50000000, quantity: 0 },
    { id: 28, image:"card/Helicopter.jpg", title: "Helicopter Bell 206", price:  80000000, quantity: 0 },
    { id: 29, image:"card/land.jpg", title: "1000 Acres of land", price:  50000000000, quantity: 0 },
    { id: 30, image:"card/island.jpg", title: "Private Island, Central America", price:  413077500, quantity: 0 },
    { id: 31, image:"card/Eating.jpg", title: "Eating out for 80 years", price:  258695000, quantity: 0 },
    { id: 32, image:"card/Diamond.jpg", title: "Diamond Ring (Tiffany - 1 carat)", price:  1418650, quantity: 0 },
    { id: 33, image:"card/Rolax.jpg", title: "Rolex Oyster", price:  1168000, quantity: 0 },
    { id: 34, image:"card/painting.jpg", title: "Les Femmes d’Alger by Picasso", price:  1497093000, quantity: 0 },
    { id: 35, image:"card/monalisa.jpg", title: "Monalisa by Leonardo da Vinci", price:  7251805000, quantity: 0 },
    { id: 36, image:"card/plastic_surgeries.jpg", title: "10 plastic surgeries", price:  10848500, quantity: 0 },
    { id: 37, image:"card/earth.jpg", title: "One week in EVERY country", price:  104312500, quantity: 0 },
    { id: 38, image:"card/NBA_team.jpg", title: "NBA Team", price:  200280000, quantity: 0 },

    
  ];

  const [products, setProducts] = useState(productList);


  var productBuy = (id) => {
    var p=products[id];
    if(p.price<=remainAmount)
    {
        p.quantity++;
        var newdata=[...products];
        setProducts(newdata)
        var tempAmount=remainAmount-(p.price);
        setReamainAmount(tempAmount)
    
        var perct=((totalAmount-tempAmount)/totalAmount)*100
        setPercentageUsed(perct)
    }
  };


  var productSell = (SId) => {
    console.log(SId);
    if(products[SId].quantity>0)
    {
        products[SId].quantity--;
        var selldata=[...products];
        setProducts(selldata)
        var tempAmount=remainAmount+(products[SId].price);
        setReamainAmount(tempAmount)

        var perct=((totalAmount-tempAmount)/totalAmount)*100
        setPercentageUsed(perct)

    }
  };


  return (
    <ProductList.Provider value={{remainAmount,percentageUsed, products, productBuy, productSell }}>
      {children}
    </ProductList.Provider>
  );
};

export default ProductListProvider;
