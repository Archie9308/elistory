import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

function MainLayout() {
  return (
    <div>
      <Outlet></Outlet>
      <Menu></Menu>
    </div>
  );
}

export default MainLayout;
