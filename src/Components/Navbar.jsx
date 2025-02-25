import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase.init";
import logo from "../assets/Logo.png";
import { FaUser, FaSignOutAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-lg px-5 md:px-10 fixed top-0 left-0 w-full z-50">
        <div className="navbar-start">
          <NavLink to="/" className="btn btn-ghost text-xl flex items-center">
            <img className="w-10 mr-2" src={logo} alt="Logo" />
            Career Counseling
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              {user.photoURL ? (
                <img src={user.photoURL} alt="User Profile" className="w-8 h-8 rounded-full" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center">
                  <FaUser />
                </div>
              )}
              <span className="text-lg font-semibold">{user.displayName || "User"}</span>
              <button className="py-1 px-3 lg:py-2 lg:px-4 bg-black flex text-white hover:bg-gray-800" onClick={handleLogout}>
                <FaSignOutAlt className="mr-2" /> <span>Logout</span> 
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <NavLink className="btn bg-black text-white hover:bg-gray-800" to="/signup">
                <FaUserPlus className="mr-2" /> Sign Up
              </NavLink>
              <NavLink className="btn bg-black text-white hover:bg-gray-800" to="/login">
                <FaSignInAlt className="mr-2" /> Login
              </NavLink>
            </div>
          )}
        </div>
        <div className="navbar-end lg:hidden">
          <button
            className="btn btn-ghost"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {menuOpen && (
            <ul
              className="absolute right-5 top-full mt-2 p-2 shadow-lg bg-base-100 rounded-lg w-48"
              onClick={() => setMenuOpen(false)} // Close menu on click
            >
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
                  About Us
                </NavLink>
              </li>
              {user ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center"
                  >
                    <FaSignOutAlt className="mr-2" /> Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/signup" className="flex items-center">
                      <FaUserPlus className="mr-2" /> Sign Up
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login" className="flex items-center">
                      <FaSignInAlt className="mr-2" /> Login
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
