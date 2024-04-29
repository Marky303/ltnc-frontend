import React, { useContext, useEffect, useState } from "react";
import { Link, BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

import "../pagestyles/Admincard.css";

export function Dashboardcard({ title, main, footer, children, buttonLabel, onButtonClick}) {
  return (
    <div className="card">
      
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '270px'}}>
      <div className="card-header">{title}</div>
      {buttonLabel && <button className="card-button" onClick={onButtonClick}>{buttonLabel}</button>}
      </div>

      <div className="card-main">{main}</div>
      <div className="card-children">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}
  

export function Statistic({ label, value, type }) {
  return (
    <div className={`statistic ${type}`}>{label}: {value}</div>
  );
}

export function Cashflow({ revenue, expenses }) {
  return (
    <div className="cash-flow">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '80px', marginLeft: '30px'}}>
      <div className="revenue">Rev: ${revenue}</div>
      <div className="expenses">Exp: ${expenses}</div>
      </div>
    </div>
  );
}