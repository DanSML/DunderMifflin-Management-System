import { ReportButton } from '../ReportButton'
import { SectorLogo } from '../SectorLogo';

import './styles.scss'

interface MainApplicationHeaderProps {
    logo: string,
    sectorName: string,
}

function MainApplicationHeader({ logo, sectorName }: MainApplicationHeaderProps) {
    return (
        <header className="baseHeaderContainer">
            <SectorLogo 
                logo={logo}
                sectorName={sectorName} 
            />
            <ReportButton />
        </header>
    );  
}

export { MainApplicationHeader }