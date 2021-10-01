import salesImg from '../../../assets/sales.svg'
import packageImg from '../../../assets/deposit.svg'
import reportImg from '../../../assets/report.svg'

import './styles.scss'

interface LogoProps {
  sectorName: string,
}

function SectorLogo({ sectorName }: LogoProps){
  return (
    <div className="depositLogo">
      <img 
        src={
          sectorName === 'Deposit' ? packageImg
          : sectorName === 'Sales' ? salesImg
          : reportImg
        } 
        alt="Sector Logo" 
      />
      <span> 
          {sectorName}
      </span>
    </div>
  );
}

export { SectorLogo };