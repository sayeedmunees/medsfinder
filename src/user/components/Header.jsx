import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaBookmark, FaUser } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { ImUser } from "react-icons/im";
import { PiPillFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Login from "./Login";
import { getImagePath } from "../../services/imagePath";

const Header = ({ from }) => {
  // const [dropDownStatus, setDropDownStatus] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  React.useEffect(() => {
    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
    if (existingUser) {
      setUserData(existingUser);
    }
  }, []);

  const hasToken = !!sessionStorage.getItem("token");

  const handleLogout = () => {
    sessionStorage.removeItem("existingUser");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <header className="py-6 px-6 md:px-12 flex justify-between items-center bg-card shadow-sm transition-colors duration-300">
        <Link to={"/"}>
          <div className="flex items-center">
            <h1 className="flex items-center gap-2 text-xl md:text-3xl font-bold text-primary ml-2">
              <PiPillFill className="text-blue-500" />
              <div>
                Meds<span className="text-blue-500">Finder</span>
              </div>
            </h1>
          </div>
        </Link>
        <div className="flex items-center md:gap-4">
          {from != "home" && (
            <Link to={"/"}>
              <button className="p-2 rounded-full text-xl md:text-2xl text-primary hover:bg-muted transition-colors">
                <AiFillHome />
              </button>
            </Link>
          )}
          {hasToken && (
            <Link to={"/saved"}>
              <button className="p-2 rounded-full text-xl md:text-2xl text-primary hover:bg-muted transition-colors">
                <FaBookmark />
              </button>
            </Link>
          )}

          <div className="text-right">
            {hasToken ? (
              <Menu>
                <MenuButton className="inline-flex items-center gap-2 rounded-full p-2 text-sm/6 font-semibold text-foreground shadow-inner shadow-white/10 focus:outline-none data-hover:bg-muted data-open:bg-muted transition-colors">
                  {userData?.profile ? (
                    <img
                      alt="User profile"
                      className="h-8 w-8 rounded-full object-cover border border-border"
                      src={getImagePath(userData.profile)}
                    />
                  ) : (
                    <FaRegCircleUser className="text-xl md:text-2xl" />
                  )}
                </MenuButton>

                <MenuItems
                  transition
                  anchor="bottom end"
                  className="w-52 origin-top-right mt-5 rounded-xl bg-card p-2 text-sm/6 text-foreground transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 "
                >
                  <MenuItem>
                    <Link to={"/profile"}>
                      <p
                        className="flex justify-start items-center gap-2 px-4 py-2 mb-1 text-sm rounded-md hover:bg-muted text-foreground transition-colors"
                        role="menuItem"
                      >
                        {userData?.profile ? (
                          <img
                            alt="User Profile"
                            className="h-6 w-6 rounded-full object-cover"
                            src={getImagePath(userData.profile)}
                          />
                        ) : (
                          <ImUser className="text-xl" />
                        )}
                        Profile
                      </p>
                    </Link>
                  </MenuItem>

                  <div className="m-1 h-px bg-border/50" />
                  <MenuItem>
                    <button
                      onClick={handleLogout}
                      type="submit"
                      className="flex gap-2 w-full rounded-md px-4 py-2 text-left text-sm text-destructive hover:bg-destructive/10 transition-colors"
                      role="menuItem"
                    >
                      <FiLogOut className="text-xl" />
                      Logout
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="p-2 rounded-full text-xl md:text-2xl text-foreground hover:bg-muted transition-colors"
              >
                <FaRegCircleUser />
              </button>
            )}
          </div>
        </div>
      </header>
      {/* login dropdown dialog using headless UI */}
      <Dialog open={showLogin} onClose={setShowLogin} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 min-w-fit data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <Login onLoginClick={() => setShowLogin(false)} />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Header;
