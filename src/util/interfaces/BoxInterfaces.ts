import { initialSaleProps} from "./SaleInterfaces";

export interface PaperBoxProps {
  id: number,
  name: string,
  type: string,
  amount: string,
  buyPrice: string,
  sellPrice: string,
  totalBuyCost: string,
  lastUpdate: string,
}

export type InitialPaperBoxProps = Omit<PaperBoxProps, 'id' | 'lastUpdate' | 'totalBuyCost' | 'sellPrice'>

export interface PaperBoxProductProps {
  boxes: PaperBoxProps[],
  editingBox: PaperBoxProps,
  boxAfterSell: PaperBoxProps,

  handleEditingBox: (paperBox: PaperBoxProps) => void,
  handleAddPaperBox: (initPaperBox: InitialPaperBoxProps) => void,
  handleUpdatePaperBox: (initPaperBox: InitialPaperBoxProps) => void,
  handleDeletePaperBox: (boxId: number) => void,
  handleUpdateBoxAfterSell: (sale: initialSaleProps) => void,
  handleBoxAfterSell: (paperBox: initialSaleProps) => void
}


