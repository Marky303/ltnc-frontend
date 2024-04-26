import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AuthContext calls function from NotifyContext -> NotifyProvider wraps AuthProvider
import { NotifyProvider } from "./context/NotifyContext";
import { AuthProvider } from "./context/UserauthContext";

// Importing introduction related pages

// Importing opening pages
import Home from "./pages/Home";

// Importing main pages
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/main/Dashboard";

// Importing userath related pages
import Signup from "./pages/userauth/Signup";
import Login from "./pages/userauth/Login";
import ResetPassword from "./pages/userauth/ResetPassword";
import VerifyEmail from "./pages/userauth/VerifyEmail";

// Importing 404 page
import PageNotFound from "./pages/error/PageNotFound";

// Layout for website
import Layout from "./hocs/Layout.jsx";

// Manager pages
import DriverList from "./pages/manager/DriverList";
import CreateTrip1 from "./pages/manager/CreateTrip1";
import CreateTrip2 from "./pages/manager/CreateTrip2";
import History from "./pages/main/History";

// Include/setup all pages in application wrapper/router
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<NotifyProvider />}>
        <Route exact path="/" element={<AuthProvider />}>
          <Route path="/" element={<Layout />}>

            <Route exact path="/home" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/resetpassword" element={<ResetPassword />} />
            <Route exact path="/verifyemail" element={<VerifyEmail />} />
            <Route exact path="/" element={<Dashboard />} />

            <Route exact path="/profile" element={<Profile />} />
            
            <Route exact path="/driverlist" element={<DriverList />} />
            <Route exact path="/createtrip1" element={<CreateTrip1 />} />
            <Route exact path="/createtrip1/:title/:desc/:start/:end/:departdate/:departtime/:arrivaldate/:arrivaltime/:expense/:revenue/:vehicle" element={<CreateTrip1 />} />
            <Route exact path="/createtrip2/:title/:desc/:start/:end/:departdate/:departtime/:arrivaldate/:arrivaltime/:expense/:revenue/:vehicle" element={<CreateTrip2 />} />
            
            <Route exact path="/history" element={<History />} />

          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

// TODO <Route path="*" element={<PageNotFound />} />
