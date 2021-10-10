import { useContext } from "react"
import { NewSaleContext } from "../contexts/NewSaleContext"

export const useSales = () => {
  const salesContext = useContext(NewSaleContext);
  return salesContext;
}