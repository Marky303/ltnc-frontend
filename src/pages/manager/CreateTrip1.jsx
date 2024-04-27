import React, { useState, useEffect, useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";

// Importing style
import "../../pagestyles/Createtrip/createtrip1.css";

// Importing AuthContext
import AuthContext from "../../context/UserauthContext";
import NotifyContext from "../../context/NotifyContext";
import ManagerContext from "../../context/ManagerContext";

// Importing assets
import background from "../../assets/img/background/userauthbg.webp";

// Warcrime #2
const places = [
  "HaNoi",
  "HoChiMinh",
  "HaiPhong",
  "DaNang",
  "CanTho",
  "AnGiang",
  "BaRiaVungTau",
  "BacLieu",
  "BacKan",
  "BacGiang",
  "BacNinh",
  "BenTre",
  "BinhDuong",
  "BinhDinh",
  "BinhPhuoc",
  "BinhThuan",
  "CaMau",
  "CaoBang",
  "DakLak",
  "DakNong",
  "DienBien",
  "DongNai",
  "DongThap",
  "GiaLai",
  "HaGiang",
  "HaNam",
  "HaTinh",
  "HaiDuong",
  "HauGiang",
  "HoaBinh",
  "HungYen",
  "KhanhHoa",
  "KienGiang",
  "KonTum",
  "LaiChau",
  "LamDong",
  "LangSon",
  "LaoCai",
  "LongAn",
  "NamDinh",
  "NgheAn",
  "NinhBinh",
  "NinhThuan",
  "PhuTho",
  "PhuYen",
  "QuangBinh",
  "QuangNam",
  "QuangNgai",
  "QuangNinh",
  "QuangTri",
  "SocTrang",
  "SonLa",
  "TayNinh",
  "ThaiBinh",
  "ThaiNguyen",
  "ThanhHoa",
  "ThuaThienHue",
  "TienGiang",
  "TraVinh",
  "TuyenQuang",
  "VinhLong",
  "VinhPhuc",
  "YenBai",
];

const CreateTrip1 = () => {
  const navigate = useNavigate();
  let { notify } = useContext(NotifyContext);
  let { findOperator, fetching } = useContext(ManagerContext);

  // Load params if theres any
  const { title, desc, start, end, departdate, departtime, revenue, vehicle } =
    useParams();

  const tripInfo = {
    title: title,
    desc: desc,
    start: start,
    end: end,
    departdate: departdate,
    departtime: departtime,
    revenue: revenue,
    vehicle: vehicle,
  };

  const textFieldList = [
    "title",
    "desc",
    "start",
    "end",
    "departdate",
    "departtime",
    "revenue",
    "vehicle",
  ];

  useEffect(() => {
    if (title) {
      let element;
      for (let i of textFieldList) {
        if (i === "vehicle") {
          let query = document.getElementsByName(tripInfo[i]);
          if (query[0]) {
            element = query[0];
            element.setAttribute("selected", "selected");
          } else {
            notify("error", "Vehicle not found, please try again");
            navigate("/");
          }
        } else {
          element = document.getElementsByName(i)[0];
          element.setAttribute("value", tripInfo[i]);
        }
      }
    }
  }, []);

  useEffect(() => {
    let element = document.getElementsByClassName("form-disabled");
    if (element.length > 0) {
      if (fetching) element[0].setAttribute("disabled", "disabled");
      else element[0].removeAttribute("disabled");
    }
  }, [fetching]);

  let handleSubmit = (e) => {
    e.preventDefault();
    findOperator(e);
  };

  // Private link
  let { authTokens, userInfo } = useContext(AuthContext);

  return authTokens ? (
    userInfo.admin ? (
      <div className="createtrip1-content-wrapper">
        <img className="viewprofile-bg" src={background}></img>
        <div className="createtrip1-content">
          <div className="form-box-signup js-signup-box">
            <h2 className="header-form">Create a trip (Step 1)</h2>
            <form
              action=""
              method=""
              className="body-signup"
              onSubmit={(e) => handleSubmit(e)}
            >
              <fieldset className="form-disabled">
                <div className="user-infor">
                  <div className="name-flex">
                    <i class="fa-solid fa-box"></i>
                    <label>Title</label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Title of your trip..."
                    />
                  </div>

                  <div className="name-flex">
                    <i class="fa-solid fa-money-bill-trend-up"></i>
                    <label>Revenue</label>
                    <input
                      type="text"
                      id="revenue"
                      name="revenue"
                      placeholder="Short description..."
                    />
                  </div>
                </div>

                <div className="user-infor">
                  <div className="name-flex">
                    <i class="fa-solid fa-location-dot"></i>
                    <label>Start</label>
                    <select className="vehicle-select" id="start" name="start">
                      {places.map((place) => (
                        <option id={place} name={place} value={place}>
                          {place}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="name-flex">
                    <i class="fa-solid fa-flag-checkered"></i>
                    <label>End</label>
                    <select className="vehicle-select" id="end" name="end">
                      {places.map((place) => (
                        <option id={place} name={place} value={place}>
                          {place}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="user-infor">
                  <div className="name-flex">
                    <i class="fa-solid fa-calendar"></i>
                    <label>Departure date</label>
                    <input type="date" id="departdate" name="departdate" />
                  </div>

                  <div className="name-flex">
                    <i class="fa-solid fa-clock"></i>
                    <label>Departure time</label>
                    <input type="time" id="departtime" name="departtime" />
                  </div>
                </div>


                
                <i class="fa-solid fa-boxes-stacked"></i>
                <label for="address">Description</label>
                <input className="vehicle-select" type="text"
                      id="desc"
                      name="desc"
                      placeholder="Short description about your trip...">
                </input>

                <i class="fa-solid fa-truck"></i>
                <label for="address">Vehicle</label>
                <select className="vehicle-select" id="vehicle" name="vehicle">
                  <option name="coach" value="coach">
                    Coach
                  </option>
                  <option name="container" value="container">
                    Container
                  </option>
                  <option name="coach" value="coach">
                    Coach
                  </option>
                </select>

                <button type="submit" className="accept-btn">
                  Accept
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    ) : (
      <Navigate to="/" />
    )
  ) : (
    <Navigate to="/home" />
  );
};

export default CreateTrip1;
