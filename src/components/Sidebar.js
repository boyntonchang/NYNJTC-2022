import React, { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { TrailDataContext } from "../context/GlobalContext";
const Sidebar = () => {
  const { myTrails } = useContext(TrailDataContext);
  return (
    <>
      <ul className="sidebar">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <h3>Home</h3>
          </NavLink>
        </li>
        <li>
          <h3 className="no-list">Find a hike</h3>
          <ul>
            <li>
              <NavLink
                to="/region"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Region
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/title"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Title
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/difficulty"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Difficulty
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/park"
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Park
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to="/mytrails"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <h3>
              My Trails <span className="badge">{myTrails.length}</span>
            </h3>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/donate"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            <h3>Donate</h3>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Sidebar;
