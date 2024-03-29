import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import navlinks from "../data";

export default function Navbar() {
    console.log(navlinks);
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            C
          </NavLink>
          {/* DropDown  */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200"
            >
                {navlinks.map(({id, link, text}) => {return <NavLink to={link} key={id}>{text}</NavLink>})}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
            <ul className="menu menu-horizontal">
              {navlinks.map(({id, link, text}) => {return <NavLink to={link} key={id}>{text}</NavLink>})}
            </ul>
        </div>
        <div className="navbar-end">
            <NavLink to='/cart' className='btn btn-ghost btn-circle btn-md ml-4'>
                <div className="indicator">
                    <BsCart3 className="h-6 w-6"/>
                    <span className="badge badge-sm badge-primary indicator-item">8</span>
                </div>
            </NavLink>
        </div>
      </div>
    </nav>
  );
}
