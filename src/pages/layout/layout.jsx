import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="w-[100%]">
        
        <Link to="/">Home</Link>
          <Link className="ml-[10px]" to="/about">About us</Link>
          <Link className="ml-[10px]" to="">Category</Link>
        
      </div>
      <Outlet />
    </>
  );
}
