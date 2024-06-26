import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AuthContext calls function from NotifyContext -> NotifyProvider wraps AuthProvider
import { NotifyProvider } from "./context/NotifyContext";
import { AuthProvider } from "./context/UserauthContext";
import { DriverProvider } from "./context/DriverContext";
import { ManagerProvider } from "./context/ManagerContext";

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
import VehicleList from "./pages/manager/VehicleList";
import CreateTrip1 from "./pages/manager/CreateTrip1";
import CreateTrip2 from "./pages/manager/CreateTrip2";
import CreateTrip3 from "./pages/manager/CreateTrip3";
import CreateTrip4 from "./pages/manager/CreateTrip4";
import CreateTrip5 from "./pages/manager/CreateTrip5";
import History from "./pages/main/History";
import VehicleEdit from "./pages/manager/VehicleEdit";
import VehicleAdd from "./pages/manager/VehicleAdd";
import VehicleMaint from "./pages/manager/VehicleMaint";

// Include/setup all pages in application wrapper/router
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<NotifyProvider />}>
        <Route exact path="/" element={<AuthProvider />}>
          <Route exact path="/" element={<DriverProvider />}>
            <Route exact path="/" element={<ManagerProvider />}>
              <Route path="/" element={<Layout />}>
                <Route exact path="/home" element={<Home />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route exact path="/login" element={<Login />} />
                <Route
                  exact
                  path="/resetpassword"
                  element={<ResetPassword />}
                />
                <Route exact path="/verifyemail" element={<VerifyEmail />} />
                <Route exact path="/" element={<Dashboard />} />

                <Route exact path="/profile" element={<Profile />} />

                <Route exact path="/driverlist" element={<DriverList />} />

                <Route exact path="/vehicles" element={<VehicleList />} />
                <Route
                  exact
                  path="/vehicles/edit/:id"
                  element={<VehicleEdit />}
                />
                <Route exact path="/vehicles/add" element={<VehicleAdd />} />
                <Route exact path="/vehicles/:id" element={<VehicleMaint />} />

                <Route exact path="/createtrip1" element={<CreateTrip1 />} />
                <Route
                  exact
                  path="/createtrip1/:title/:desc/:start/:end/:departdate/:departtime/:revenue/:vehicle"
                  element={<CreateTrip1 />}
                />
                <Route
                  exact
                  path="/createtrip2/:title/:desc/:start/:end/:departdate/:departtime/:revenue/:vehicle"
                  element={<CreateTrip2 />}
                />
                <Route
                  exact
                  path="/createtrip3/:title/:desc/:start/:end/:departdate/:departtime/:revenue/:vehicle/:driverid"
                  element={<CreateTrip3 />}
                />
                <Route
                  exact
                  path="/createtrip4/:title/:desc/:start/:end/:departdate/:departtime/:revenue/:vehicle/:driverid/:vehicleid"
                  element={<CreateTrip4 />}
                />
                <Route exact path="/createtrip5" element={<CreateTrip5 />} />

                <Route exact path="/history" element={<History />} />
              </Route>
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

// TODO <Route path="*" element={<PageNotFound />} />
