import { useState } from "react";
import { SalesNewClientSection } from "../SalesNewClientSection";

import { SalesNewSaleSection } from "../SalesNewSaleSection";
import { SalesSideBarContent } from "../SalesSideBarContent";

function SalesMainContent() {
  const [isNewSaleSectionActive, setIsNewSaleSectionActive] = useState(true);
  const [isNewClientSectionActive, setIsNewClientSectionActive] = useState(false);

  function handleNewSaleSectionState() {
    if (isNewSaleSectionActive === false) {
      setIsNewSaleSectionActive(!isNewSaleSectionActive);
      setIsNewClientSectionActive(!isNewClientSectionActive);
    }
  }

  function handleNewClientSectionState() {
    if (isNewClientSectionActive === false) {
      setIsNewSaleSectionActive(!isNewSaleSectionActive);
      setIsNewClientSectionActive(!isNewClientSectionActive);
    }
  }  
  

  return (
    <>
      <SalesSideBarContent 
        newSaleState={handleNewSaleSectionState}
        newClientState={handleNewClientSectionState}
      />

      <SalesNewSaleSection
        isActive={isNewSaleSectionActive}
      />

      <SalesNewClientSection
        isActive={isNewClientSectionActive}
      />
    </>
  );
}

export { SalesMainContent }