import { useContext } from "react";
import { ProductList } from "../Store/ProductListProvider";


const Card = ({product}) => {

  const{productBuy,productSell}=useContext(ProductList)
  return (

    <div className="card">
      <img src={product.image} alt="image"/>
      <p className="iname">{product.title}</p>
      <p className="iprice">RS {product.price.toLocaleString()}</p>
      <div className="button">
        <button onClick={()=>productSell(product.id)} className="sell">Sell</button>
        <div className="qunty">{product.quantity}</div>
        <button onClick={()=>productBuy(product.id)} className="buy">Buy</button>
      </div>
    </div>
  );
};

export default Card;
