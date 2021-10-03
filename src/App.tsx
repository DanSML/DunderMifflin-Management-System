import { Header } from "./components/Header";
import { ButtonContextProvider } from "./contexts/ButtonContext";
import { BrowserRouter } from 'react-router-dom';


import './styles/styles.scss'
import './styles/global.scss'
import { SideBar } from "./components/SideBar";
import { Routes } from "./routes";
import { useButtons } from "./hooks/useButtons";

function App() {
  const {buttonState} = useButtons();
  return (
    <BrowserRouter>
      <ButtonContextProvider>
            <Header/>
          <div className={buttonState === 'normal' ? 'mainSectionNoSide' : 'mainSection'}>
          <SideBar/>
              <div className="on">
                <Routes/>
              </div>
          </div>
      </ButtonContextProvider>
    </BrowserRouter>
  )
}

export default App;
