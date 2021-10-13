import { Header } from "./components/Header";
import { ButtonContextProvider } from "./contexts/ButtonContext";
import { BrowserRouter } from 'react-router-dom';

import './styles/loggedSection.scss'
import './styles/styles.scss'
import './styles/global.scss'
import { SideBar } from "./components/SideBar";
import { Routes, Routeri } from "./routes";
import { useButtons } from "./hooks/useButtons";
import { BoxesContextProvider } from "./contexts/BoxesContext";
import { BoxesTypesContextProvider } from "./contexts/BoxesTypesContext";
import { NewSaleContextProvider } from "./contexts/NewSaleContext";
import { DepositModalContextProvider } from "./contexts/DepositModalContext";
import { ClientsContextProvider } from "./contexts/ClientsContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { InitialPage } from "./components/InitialPage";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
  const {buttonState} = useButtons();
  const [userState, setUserState] = useState(false);

  function handleUserState() {
    setUserState(!userState);
  }

  return (
    <BrowserRouter>
      <ButtonContextProvider>
        <BoxesContextProvider>
          <BoxesTypesContextProvider>
            <NewSaleContextProvider>
               <DepositModalContextProvider>
                 <ClientsContextProvider>
                   <UserContextProvider>
                    <ToastContainer autoClose={3000} />
                      <div className={userState ? "logged" : "unlogged"}>
                        <InitialPage
                          handleUserState={handleUserState}
                        />
                      </div>
                      <div className={userState ? "loggedSection" : "unLoggedSection"}>
                        <Header/>
                        <div className={buttonState === 'normal' ? 'mainSectionNoSide' : 'mainSection'}>
                          <SideBar
                            handleUserState={handleUserState}
                          />
                          <div className="on">
                            <Routes/>
                            <Routeri/>
                          </div>
                        </div>
                      </div>
                    </UserContextProvider>
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
