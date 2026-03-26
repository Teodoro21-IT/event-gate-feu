import React from "react";
import { NavLink } from "react-router";
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
                                Sign Up
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

                    {profile?.role === "admin" && (
                        <NavLink to="/manage-events" className="btn btn-secondary mr-5 rounded-full btn-outline">
                            Manage Events
                        </NavLink>
                    )}

                    {profile?.role === "user" && (
                        <NavLink to="/event" className="btn btn-secondary mr-5 rounded-full btn-outline">
                            Events
                        </NavLink>
                    )}


                </div>
            </div>
        </div>



    );
};

export default NavBar;