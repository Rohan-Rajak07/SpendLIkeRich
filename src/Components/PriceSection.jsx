import { useContext } from "react"
import { ProductList } from "../Store/ProductListProvider"

const PriceSection = () => {

  const{remainAmount,percentageUsed}=useContext(ProductList)
  return (
    <section className="totalamount">
            <p>Remaining: {remainAmount.toLocaleString()} INR</p>
            <p>You only spent {percentageUsed} % of the total!</p>
    </section>
  )
}

export default PriceSection