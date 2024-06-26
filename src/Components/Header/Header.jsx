import { NavLink } from "react-router-dom";

const Header = () => {
    const links=<>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/jobs"}>Jobs</NavLink></li>
                <li><NavLink to={"/applied"}>Applied Jobs</NavLink></li>
                <li><NavLink to={"/statistics"}>Statistics</NavLink></li>
                <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
                </>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold lg:text-3xl lg:font-extrabold">Career <span className="text-[#7E90FE]">Hub</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
    <img className="w-10 lg:hidden rounded-3xl" src="/src/assets/images/366068331_1255316221829709_7767482365841208902_n.jpg" alt="" />
    <a className="btn btn-accent hidden lg:flex rounded-2xl">Apply Now</a>
  </div>
</div>
        </div>
    );
};

export default Header;