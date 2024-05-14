import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MyContext } from "./MyContext";
import SearchPage from "./SearchPage";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [input, setInput] = useState()
  const [sub, setSub] = useState()
  // console.log(` navbar :${sub}`); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value)
  };

  const submit = () => {
    // console.log("click");
    setSub(input)
    setInput("")
    navigate('/search')
    setTimeout(() => {
      setSub("")
    }, 10);


  };

  return (
    <>

      <MyContext.Provider value={sub}>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">

            <button className="navbar-toggler text-bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/" >Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/science">Science</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/technology" >Technology</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/sports" >Sports</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/health">Health</NavLink>
                </li>
              </ul>
              <div className="d-flex" >
                <input className="form-control me-2" type="search" value={input} onChange={handleChange} placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" onClick={submit} type="submit">Search</button>
              </div>
            </div>
          </div>
        </nav>
        {sub ? <SearchPage /> : null}

      </MyContext.Provider>
    </>
  )
}
export default Navbar;