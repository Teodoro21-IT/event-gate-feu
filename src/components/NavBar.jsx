import React from "react";
import { NavLink } from "react-router";
import SignUpIcon from "./icons/SignUpIcon";
import HomeIcon from "./icons/HomeIcon";
import { useContext } from "react";
import { SessionContext } from "../contexts/SessionContext";
import supabase from "../utils/supabase";
import Profile from "../pages/Profile";

const NavBar = () => {
    const { session, profile } = useContext(SessionContext);

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) alert("kupal mali");
    };

    return (
        <nav className="sticky top-0 z-[100] w-full border-b border-white/5 bg-base-100/70 backdrop-blur-2xl transition-all duration-500">
            <div className="container mx-auto px-6 lg:px-10">
                <div className="navbar h-20 px-0 flex justify-between">

                    {/* --- BRAND IDENTITY --- */}
                    <div className="flex-none">
                        <NavLink
                            to="/"
                            className="group flex items-center gap-3 transition-all duration-300 active:scale-95"
                        >
                            {/* Animated Logo Icon */}
                            <div className="relative">
                                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-30 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-base-100 shadow-xl border border-white/10 group-hover:rotate-6 transition-transform">
                                    <span className="text-primary font-black text-2xl italic tracking-tighter">E</span>
                                </div>
                            </div>

                            <div className="hidden sm:flex flex-col leading-none">
                                <span className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-base-content to-base-content/60 group-hover:from-primary group-hover:to-secondary transition-all">
                                    EVENT<span className="italic opacity-80">GATE</span>
                                </span>
                                <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-40 mt-1">Global Events</span>
                            </div>
                        </NavLink>
                    </div>

                    {/* --- MAIN NAV & TOOLS --- */}
                    <div className="flex items-center gap-2 lg:gap-6">

                        {/* Navigation Link with Animated Underline */}
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `group relative px-4 py-2 text-sm font-bold tracking-tight transition-all ${isActive ? 'text-primary' : 'text-base-content/60 hover:text-base-content'
                                }`
                            }
                        >
                            <span>Overview</span>
                            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                        </NavLink>


                        <div className="h-6 w-[1px] bg-base-content/10 mx-2 hidden md:block"></div>

                        {/* --- THEME TOGGLE (Aesthetic Logic) --- */}
                        <label className="swap swap-rotate btn btn-ghost btn-circle btn-sm hover:bg-primary/10 transition-colors">
                            <input type="checkbox" className="theme-controller" value="dark" />
                            {/* Sun Icon */}
                            <svg className="swap-on fill-primary w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            {/* Moon Icon */}
                            <svg className="swap-off fill-secondary w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>

                        {/* --- AUTH / PROFILE SECTION --- */}
                        {!session ? (
                            <div className="flex items-center gap-3 ml-2">

                                <NavLink to="/login" className="btn btn-link btn-sm no-underline text-base-content/70 hover:text-primary font-bold">
                                    Sign In
                                </NavLink>

                                <NavLink
                                    to="/sign-up"
                                    className="btn btn-primary btn-sm h-11 rounded-2xl px-6 border-none bg-gradient-to-tr from-primary to-secondary hover:shadow-[0_0_20px_rgba(var(--p),0.4)] transition-all duration-300"
                                >
                                    Get Started
                                </NavLink>
                            </div>
                        ) : (
                            <div className="dropdown dropdown-end">
                                {/* Pulsing Profile Trigger */}
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="group relative flex items-center gap-2 p-1 rounded-full border border-base-content/10 hover:border-primary/50 transition-all duration-500"
                                >
                                    <div className="w-9 h-9 rounded-full overflow-hidden shadow-lg border-2 border-base-100">
                                        <img src="https://m.media-amazon.com/images/M/MV5BZjA0MDgyYmItNzkzMC00OTM2LThlYzktMWMxZWU3ZGNkNDI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="Profile" />
                                    </div>
                                    <div className="hidden lg:block pr-2">
                                        <p className="text-[11px] font-black leading-none uppercase tracking-tighter text-primary">Teodoro</p>
                                        <p className="text-[9px] font-bold opacity-40">Pro Member</p>
                                    </div>
                                </div>

                                {/* Premium Floating Menu */}
                                <ul tabIndex={0} className="dropdown-content menu p-3 shadow-2xl bg-base-100/95 border border-white/5 rounded-3xl w-64 mt-4 animate-in fade-in zoom-in slide-in-from-top-4 duration-300">
                                    <li className="menu-title px-4 pb-2 opacity-30 text-[10px] uppercase font-black tracking-[0.2em]">Navigation</li>

                                    <li>
                                        <NavLink to="/profile" className="rounded-2xl py-3 hover:bg-primary/10">Profile Dashboard</NavLink>
                                    </li>




                                    <li><NavLink to="/settings" className="rounded-2xl py-3">Security Settings</NavLink></li>
                                    <div className="divider opacity-10 my-1"></div>
                                    <li>
                                        <button onClick={handleLogout} className="rounded-2xl py-3 text-error bg-error/5 hover:bg-error hover:text-white transition-all font-black uppercase text-[10px] tracking-widest">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>

                        )}
                        {/* nullish value, undefined, "", 0,null */}
                        {/* if (session) &&  is not nullish value then execute what ever code after the && */}
                        {/* if (session) is nullish value then execute what ever code after the || */}


                        {!session && (
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
                                        <button onClick={handleLogout}>Login</button>
                                    </li>
                                </ul>
                            </div>
                        )}




                    </div>
                </div>
            </div>
        </nav>


    );
};

export default NavBar;