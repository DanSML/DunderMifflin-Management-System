import './styles.scss'

interface LogoProps {
  logo: string,
  sectorName: string,
}

function SectorLogo({ logo, sectorName }: LogoProps){
  return (
    <div className="depositLogo">
      <img 
        src={logo} 
        alt="Sector Logo" 
      />
      <span> 
          {sectorName}
      </span>
    </div>
  );
}

export { SectorLogo };