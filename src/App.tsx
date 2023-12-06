import './App.css'
import {Route, Routes} from "react-router-dom";
import Toolbar from "./Components/Toolbar/Toolbar";

const App = () => {

  return (
      <>
          <header>
              <Toolbar/>
          </header>
          <main className="container pt-5">
              <Routes>
                  <Route/>
                  <Route/>
              </Routes>
          </main>
      </>
  )
};

export default App
