import { useState } from "react";
import { SalesEditClientSection } from "../SalesEditClientSection";
import { SalesNewClientSection } from "../SalesNewClientSection";

import { SalesNewSaleSection } from "../SalesNewSaleSection";
import { SalesSideBarContent } from "../SalesSideBarContent";

function SalesMainContent() {
  const [isNewSaleSectionActive, setIsNewSaleSectionActive] = useState(true);
  const [isNewClientSectionActive, setIsNewClientSectionActive] = useState(false);
  const [isEditClientSectionActive, setIsEditClientSectionActive] = useState(false);

  function handleNewSaleSectionState() {
    if (isNewSaleSectionActive === false) {
      setIsNewSaleSectionActive(!isNewSaleSectionActive);
      setIsNewClientSectionActive(false);
      setIsEditClientSectionActive(false);
    }
  }

  function handleNewClientSectionState() {
    if (isNewClientSectionActive === false) {
      setIsNewSaleSectionActive(false);
      setIsNewClientSectionActive(!isNewClientSectionActive);
      setIsEditClientSectionActive(false);
    }
  }  
  
  function handleEditClientSectionState() {
    if (isEditClientSectionActive === false) {
      setIsNewSaleSectionActive(false);
      setIsNewClientSectionActive(false);
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

      <SalesNewSaleSection
        isActive={isNewSaleSectionActive}
      />

      <SalesNewClientSection
        isActive={isNewClientSectionActive}
      />

      <SalesEditClientSection
        isActive={isEditClientSectionActive}
      />
      
    </>
  );
}

export { SalesMainContent }