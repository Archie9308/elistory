import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className={styles.Navigation}>
      <NavLink to=".">Home</NavLink>
      <NavLink to="audio">Audio</NavLink>
      <NavLink to="events">Events</NavLink>
      <NavLink to="eat">Eat</NavLink>
    </nav>
  );
}

export default Menu;
