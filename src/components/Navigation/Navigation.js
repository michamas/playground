import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { FaHome, FaUser, FaLightbulb } from "react-icons/fa";

export const Navigation = () => {
  return (
    <nav className={css.bar}>
      <NavLink className={css.navlink} to="/">
        <FaHome />
      </NavLink>
      <NavLink className={css.navlink} to="/projects">
        <FaLightbulb />
      </NavLink>
      <NavLink className={css.navlink} to="/about">
        <FaUser />
      </NavLink>
    </nav>
  );
};
