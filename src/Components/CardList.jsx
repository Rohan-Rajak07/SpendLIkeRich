
import { useContext } from 'react';
import Card from './Card';
import { ProductList } from '../Store/ProductListProvider';

const CardList = () => {

  const{products}=useContext(ProductList);
// const[qunt,setQunt]=useState(initialQunt);


  return (
    <div className='cardcontainer'>
      {products.map((product)=><Card product={product} key={product.id}/>)}
        
    </div>
  )
}

export default CardList