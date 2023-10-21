import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-800 font-bold underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-800 font-bold underline" : ""
                                }
                            >
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-700 font-bold underline" : ""
                                }
                            >
                                My Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-700 font-bold underline" : ""
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-700 font-bold underline" : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        </ul>
                    </div>
                    <div className="flex gap-5 ">
                <div ><img className="rounded-full h-10" src="https://i.ibb.co/jvX6cVP/41.png" alt="" /></div>
                <div className="text-rose-800 font-extrabold text-2xl">Car Dock</div>
            </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-800 font-bold underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/addProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-800 font-bold underline" : ""
                                }
                            >
                                Add Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/myProduct"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-700 font-bold underline" : ""
                                }
                            >
                                My Product
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-700 font-bold underline" : ""
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-pink-700 font-bold underline" : ""
                                }
                            >
                                Contact
                            </NavLink>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end ">
                <div className=" rounded-full flex gap-4 items-center">
                    <p>name</p>
          <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
       
                </div>
            </div>
        </div>
    );
};

export default Header;