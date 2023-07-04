import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={css.bar}>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      <NavLink className={css.link} to="/about">
        About
      </NavLink>
      <NavLink className={css.link} to="/projects">
        Projects
      </NavLink>
    </nav>
  );
}