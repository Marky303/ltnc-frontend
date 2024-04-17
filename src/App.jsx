import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AuthContext calls function from NotifyContext -> NotifyProvider wraps AuthProvider
import { NotifyProvider } from "./context/NotifyContext";
import { AuthProvider } from "./context/UserauthContext";

// Importing introduction related pages

// Importing opening pages
import Home from "./pages/Home";

// Importing main pages
import Dashboard from "./pages/main/Dashboard";

// Importing userath related pages
import Signup from "./pages/userauth/Signup";
import Login from "./pages/userauth/Login";
import ResetPassword from "./pages/userauth/ResetPassword";

// Importing 404 page
import PageNotFound from "./pages/error/PageNotFound";

// Layout for website
import Layout from "./hocs/Layout.jsx";

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

            <Route exact path="/" element={<Dashboard />} />

          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

// TODO <Route path="*" element={<PageNotFound />} />
