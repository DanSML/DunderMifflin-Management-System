import { Header } from "./components/Header";
import { ButtonContextProvider } from "./contexts/ButtonContext";
import { Home } from "./pages/Home/";

import './styles/global.scss'

function App() {
  return (
    <ButtonContextProvider>
      <Header/>
      <Home/>
    </ButtonContextProvider>
  )
}

export default App;
