export interface SaleProps {
  id: number,
  boxQuantity: number,
  client: string,
  boxSelled: string,
  date: string,
}

export type initialSaleProps = Omit<SaleProps, 'id' | 'date'>

export interface SalesProviderProps {
  sales: SaleProps[],

  handleAddSale: (props: initialSaleProps) => void,
}