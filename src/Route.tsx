/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./Pages/Home";
import Navigation from "./Components/Navigation";
import { useEffect } from "react";


const AllRoutes = () => {

  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    pathname === '/' ? navigate("/home") : null
  }, [pathname])

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/home" index element={<Home />} />
        <Route path="/portfolio" element={<div>About</div>} />
        <Route path="/blog" element={<div>About</div>} />
        <Route path="/blog/:id" element={<div>About</div>} />
        <Route path="/contact" element={<div>About</div>} />
      </Routes>
    </>
  )
}

export default AllRoutes