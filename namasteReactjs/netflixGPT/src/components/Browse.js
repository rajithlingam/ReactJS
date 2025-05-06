import React, { useState, useEffect } from "react";
import Header from "./Header";
import { netflix_logout_logo } from "../utils/url";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

const Browse = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName);
    }
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  return (
    <div className="relative h-screen">
      <Header />

      {/* Profile Section */}
      <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
        {/* Display Name outside button */}
        <span className="max-w-[120px] truncate text-white font-medium text-sm bg-white/20 px-2 py-1 rounded">
          {displayName}
        </span>

        {/* Profile button with image and dropdown */}
        <div className="relative inline-block text-left">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center rounded-full focus:outline-none"
            aria-expanded={menuOpen}
            aria-haspopup="true"
          >
            <img
              src={netflix_logout_logo}
              alt="Logout"
              className="w-10 h-10 rounded-sm"
            />
            <span className="ml-1 text-white">▼</span>
          </button>

          {menuOpen && (
            <div
              className="absolute right-0 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 z-30"
              role="menu"
              aria-orientation="vertical"
            >
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
