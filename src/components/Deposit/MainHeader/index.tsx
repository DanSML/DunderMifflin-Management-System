import { ReportButton } from '../../GeneralComponents/ReportButton'
import { SectorLogo } from '../../GeneralComponents/SectorLogo';

import './styles.scss'

interface MainApplicationHeaderProps {
    sectorName: string,
}

function MainApplicationHeader({ sectorName }: MainApplicationHeaderProps) {
    return (
        <header className="baseHeaderContainer">
            <SectorLogo sectorName={sectorName} />
            <ReportButton />
        </header>
    );  
}

export { MainApplicationHeader }