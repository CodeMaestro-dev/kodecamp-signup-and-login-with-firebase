import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-[#fbfbfb] grid grid-cols-11 place-items-center h-screen">
      <Outlet />
    </div>
  );
}
