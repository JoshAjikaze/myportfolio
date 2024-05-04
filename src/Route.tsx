import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";


const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<div>About</div>} />
    </Routes>
  )
}

export default AllRoutes