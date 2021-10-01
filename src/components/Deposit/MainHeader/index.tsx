import { ReportButton } from '../../GeneralComponents/ReportButton'
import { SectorLogo } from '../../GeneralComponents/SectorLogo';

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
                sectorName={sectorName} />
            <ReportButton />
        </header>
    );  
}

export { MainApplicationHeader }