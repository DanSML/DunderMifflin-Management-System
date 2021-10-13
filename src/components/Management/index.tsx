import { MainApplicationHeader } from "../SectorHeader";

import managementImg from '../../assets/report.svg'
import { ManagementMainContent } from "../ManagementMainContent";
import { useUsers } from "../../hooks/useUsers";

function Management() {
  const { managementAuthResponse } = useUsers();
  return (
    <div className={managementAuthResponse ? "main" : "mainHidded"}>
        <MainApplicationHeader
          logo={managementImg}
          sectorName={"Management"}
        />
      <div className="section">
        <ManagementMainContent/>
      </div>
    </div>
  );
};

export { Management }