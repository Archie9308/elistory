import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import { GrHomeRounded } from "react-icons/gr";
import { FiHeadphones } from "react-icons/fi";
import { BiCalendarCheck } from "react-icons/bi";
import { BiRestaurant } from "react-icons/bi";

function Menu() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to=".">
        <GrHomeRounded />
      </NavLink>
      <NavLink to="audio">
        <FiHeadphones />
      </NavLink>
      <NavLink to="events">
        <BiCalendarCheck />
      </NavLink>
      <NavLink to="eat">
        <BiRestaurant />
      </NavLink>
    </nav>
  );
}

export default Menu;
