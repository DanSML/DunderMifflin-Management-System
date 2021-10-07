import { useState } from 'react';

import { DepositSideBarContent } from '../DepositSideBarContent';
import { DepositBoxesSection } from '../DepositBoxesSection';
import { DepositTypesSection } from '../DepositTypesSection';

import './styles.scss'

function DepositMainContent() {  
  const [isBoxSectionActive, setIsBoxSectionActive] = useState(true);
  const [isSettingsSectionActive, setIsSettingsSectionActive] = useState(false);

  function handleBoxSectionState(){
    if (!isBoxSectionActive) {
      setIsBoxSectionActive(!isBoxSectionActive);
      setIsSettingsSectionActive(!isSettingsSectionActive);
    }
  }

  function handleBoxTypeSectionState(){
    if (!isSettingsSectionActive) {
      setIsSettingsSectionActive(!isSettingsSectionActive);
      setIsBoxSectionActive(!isBoxSectionActive);
    }
  }

  return (
    <>
      <DepositSideBarContent
        boxSectionState={handleBoxSectionState}
        boxTypeSectionState={handleBoxTypeSectionState}
      />

      <DepositBoxesSection
        active={isBoxSectionActive}
      />
      
      <DepositTypesSection
        active={isSettingsSectionActive}
      />
    </>
  );
}

export { DepositMainContent }