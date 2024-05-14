import React from "react";
import Home from "../pages/Home";
import Latest from "../card/Latest";

const Main = () => {

    return (
        <>
            <div className="main m-0">
                <div className="main-section">
                    <div className="section1"><Home /></div>
                    <div className="section2"><Latest /></div>
                </div>
            </div>
        </>
    )
}
export default Main;