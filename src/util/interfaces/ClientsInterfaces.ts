export interface ClientsProps {
  id: number,
  name: string,
  importance: string,
  clientSince: string,
  lastPurchase: string,
}

export type InitialClientProps = Omit<ClientsProps, 'id' | 'clientSince' | 'lastPurchase' | 'importance' >

export interface ClientsContextProps {
  clients: ClientsProps[],

  handleAddClient: (props: InitialClientProps) => void,
}