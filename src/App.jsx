import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// AuthContext calls function from NotifyContext -> NotifyProvider wraps AuthProvider
import { NotifyProvider } from "./context/NotifyContext";

// Importing introduction related pages

// Importing profile related pages

// Importing userath related pages

// Importing 404 page
import PageNotFound from "./pages/error/PageNotFound";

// Layout for website
import Layout from "./hocs/Layout.jsx";

// Importing main page
import Home from "./pages/Home";

import Dashboard from "./pages/Dashboard";

// Include/setup all pages in application wrapper/router
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<NotifyProvider />}>
        <Route path="/" element={<Layout />}>
          <Route exact path="/" element={<Home />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

// TODO <Route path="*" element={<PageNotFound />} />
