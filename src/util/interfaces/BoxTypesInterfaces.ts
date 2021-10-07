export interface BoxTypesProps {
  id: number,
  title: string,
  percent: number,
}

export type BoxType = Omit<BoxTypesProps, 'id'>;

export interface BoxTypesContextProps {
  boxSettings: BoxTypesProps[],
  handleAddBoxType: (props: BoxType) => void,
  handleUpdateBoxType: (props: BoxType) => void,
  handleDeleteBoxType: (props: number) => void,
  handleEditingBoxType: (props: BoxTypesProps) => void
}