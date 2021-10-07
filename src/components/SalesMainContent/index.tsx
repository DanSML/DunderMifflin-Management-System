import { useState } from "react";
import { SalesSideBarContent } from "../SalesSideBarContent";

function SalesMainContent() {
  const [isNewSaleSectionActive, setIsNewSaleSectionActive] = useState(true);
  const [isNewClientSectionActive, setIsNewClientSectionActive] = useState(false);
  const [isEditClientSectionActive, setIsEditClientSectionActive] = useState(false);

  function handleNewSaleSectionState() {
    if (!isNewSaleSectionActive) {
      setIsNewSaleSectionActive(!isNewSaleSectionActive);
      setIsNewClientSectionActive(!isNewClientSectionActive);
      setIsEditClientSectionActive(!isEditClientSectionActive);
    }
  }

  function handleNewClientSectionState() {
    if (!isNewClientSectionActive) {
      setIsNewSaleSectionActive(!isNewSaleSectionActive);
      setIsNewClientSectionActive(!isNewClientSectionActive);
      setIsEditClientSectionActive(!isEditClientSectionActive);
    }
  }  
  
  function handleEditClientSectionState() {
    if (!isEditClientSectionActive) {
      setIsNewSaleSectionActive(!isNewSaleSectionActive);
      setIsNewClientSectionActive(!isNewClientSectionActive);
      setIsEditClientSectionActive(!isEditClientSectionActive);
    }
  }

  return (
    <>
      <SalesSideBarContent 
        newSaleState={handleNewSaleSectionState}
        newClientState={handleNewClientSectionState}
        editClientState={handleEditClientSectionState}
      />

      
    </>
  );
}

export { SalesMainContent }