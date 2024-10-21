// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./components/Home/Navbar";
// import Footer from "./components/Home/Footer";
// import "./index.css";

// import Home from "./components/Home/Home";
// import AboutUs from "./components/AboutUs";
// import Treatment from "./components/Treatment/Treatment";
// import Schedules from "./components/Schedules";
// import Contact from "./components/Contact";
// import PageNotFound from "./components/PageNotFound";
// import AppointmentForm from "./components/AppointmentForm";
// import ScrollToTop from "../src/components/util/Helper";
// import { Toaster } from "react-hot-toast";
// import Doctors from "./components/Doctors";
// import AdminPage from "./components/AdminPage";

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Toaster position="top-center" />
//         <NavBar />
//         <div style={{ paddingTop: "56px" }}>
//           <ScrollToTop></ScrollToTop>
//           <Routes>
//             <Route index element={<Home />} />
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/admin" element={<AdminPage />} />
//             <Route path="/schedules" element={<Schedules />} />
//             <Route path="/treatments" element={<Treatment />} />
//             <Route path="/schedule" element={<Schedules />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/doctors" element={<Doctors />} />
//             <Route path="/appointment" element={<AppointmentForm />} />
//             <Route path="*" element={<PageNotFound />} />
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import "./index.css";

import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs";
import Treatment from "./components/Treatment/Treatment";
import Schedules from "./components/Schedules";
import Contact from "./components/Contact";
import PageNotFound from "./components/PageNotFound";
import AppointmentForm from "./components/AppointmentForm";
import ScrollToTop from "./components/util/Helper";
import { Toaster } from "react-hot-toast";
import Doctors from "./components/Doctors";
import AdminPage from "./components/AdminPage";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false); // Track login status

  return (
    <BrowserRouter>
      <div>
        <Toaster position="top-center" />
        <NavBar />
        <div style={{ paddingTop: "56px" }}>
          <ScrollToTop />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/schedules" element={<Schedules />} />
            <Route path="/treatments" element={<Treatment />} />
            <Route path="/schedule" element={<Schedules />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointment" element={<AppointmentForm />} />

            {/* Login Route */}
            <Route path="/login" element={<Login setAuth={setIsAuth} />} />

            {/* Protected Admin Route */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute isAuth={isAuth}>
                  <AdminPage />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
