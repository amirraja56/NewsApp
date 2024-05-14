import React from "react";
import { Route, Routes } from "react-router-dom"
import Science from "./components/pages/Science";
import Technology from "./components/pages/Technology";
import Sports from "./components/pages/Sports";
import Health from "./components/pages/Health";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Main from "./components/layout/Main";
import Error from "./components/errorPage/Error";
import SearchPage from "./components/layout/SearchPage";

const App = () => {

    return (
        <>
            <Header />
            <Navbar />
            <Routes>
                <Route exact path="/" Component={Main} />
                <Route exact path="/science" Component={Science} />
                <Route exact path="/technology" Component={Technology} />
                <Route exact path="/sports" Component={Sports} />
                <Route exact path="/health" Component={Health} />
                <Route exact path="/search" Component={SearchPage} />
                <Route path="*" Component={Error} />
            </Routes>
            <Footer />
        </>
    )
}
export default App;