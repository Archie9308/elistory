import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <NavLink>Home</NavLink>
      <NavLink>Audio</NavLink>
      <NavLink>Events</NavLink>
      <NavLink>Eat</NavLink>
    </nav>
  );
}

export default Menu;
