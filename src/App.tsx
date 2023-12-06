import './App.css'
import {Route, Routes} from "react-router-dom";
import Toolbar from "./Components/Toolbar/Toolbar";
import Home from "./Containers/Home/Home";

const App = () => {

    return (
        <>
            <header>
                <Toolbar/>
            </header>
            <main className="container pt-5">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:namePage" element={<Home/>}/>
                </Routes>
            </main>
        </>
    )
};

export default App
