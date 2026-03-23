import React from "react";
import { NavLink } from "react-router";
import SignUpIcon from "./icons/SignUpIcon";
import HomeIcon from "./icons/HomeIcon";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import supabase from "../utils/supabase";

const NavBar = () => {
    const session = useContext(SessionContext);

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) alert("kupal mali");
    };

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex w-full max-w-7xl mx-auto">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl px-0">
                        <span className="text-primary">Event</span>
                        <span className="text-secondary">Gate</span>
                    </a>
                </div>
                <div className="flex-none">

                    <NavLink
                        to="/"
                        className="btn btn-primary mr-4 rounded-full btn-outline"
                    >
                        <HomeIcon className="text-lg" />
                        Home
                    </NavLink>

                    {!session && (
                        <NavLink to="/sign-up" className="btn btn-primary mr-4 rounded-full">
                            <SignUpIcon className="text-lg" />
                            Sign Up
                        </NavLink>

                    )}


                    {!session && (
                        <NavLink to="/login" className="btn btn-primary mr-4 rounded-full">
                            <SignUpIcon className="text-lg" />
                            Login
                        </NavLink>

                    )}

                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://m.media-amazon.com/images/M/MV5BZjA0MDgyYmItNzkzMC00OTM2LThlYzktMWMxZWU3ZGNkNDI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;