import { Header } from "./components/Header";
import { ButtonContextProvider } from "./contexts/ButtonContext";
import { BrowserRouter } from 'react-router-dom';


import './styles/styles.scss'
import './styles/global.scss'
import { SideBar } from "./components/SideBar";
import { Routes } from "./routes";
import { useButtons } from "./hooks/useButtons";
import { BoxesContextProvider } from "./contexts/BoxesContext";
import { BoxesTypesContextProvider } from "./contexts/BoxesTypesContext";
import { NewSaleContextProvider } from "./contexts/NewSaleContext";
import { DepositModalContextProvider } from "./contexts/DepositModalContext";
import { ClientsContextProvider } from "./contexts/ClientsContext";

function App() {
  const {buttonState} = useButtons();
  return (
    <BrowserRouter>
      <ButtonContextProvider>
        <BoxesContextProvider>
          <BoxesTypesContextProvider>
            <NewSaleContextProvider>
               <DepositModalContextProvider>
                 <ClientsContextProvider>
                    <Header/>
                    <div className={buttonState === 'normal' ? 'mainSectionNoSide' : 'mainSection'}>
                      <SideBar/>
                      <div className="on">
                        <Routes/>
                      </div>
                    </div>
                  </ClientsContextProvider>
                </DepositModalContextProvider>
              </NewSaleContextProvider>
            </BoxesTypesContextProvider>
          </BoxesContextProvider>
      </ButtonContextProvider>
    </BrowserRouter>
  )
}

export default App;
