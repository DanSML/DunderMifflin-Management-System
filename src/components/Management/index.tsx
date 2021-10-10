import { MainApplicationHeader } from "../SectorHeader";

import managementImg from '../../assets/report.svg'
import { ManagementMainContent } from "../ManagementMainContent";

function Management() {
  return (
    <>
      <div className="main">
        <MainApplicationHeader
          logo={managementImg}
          sectorName={"Management"}
        />
      </div>
      <div className="section">
        <ManagementMainContent/>
      </div>
    </>
  );
};

export { Management }