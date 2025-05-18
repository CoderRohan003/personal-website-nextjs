"use client";
import React, { useState } from "react";
import Link from "next/link";
import Navlinks from "./Navlinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "About",
        href: "#about",
    },
    {
        title: "Projects",
        href: "#projects",
    },
    {
        title: "Contact",
        href: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href="/">
                    <img
                        src="/images/logo-circle.png"
                        alt="Logo"
                        className="h-10 w-auto md:h-12"
                    />
                </Link>

                <div className="mobile-menu block md:hidden">
                    {navbarOpen ? (
                        <button
                            className="flex items-center justify-center w-10 h-10 border rounded border-slate-200 text-slate-400 hover:text-white hover:border-white"
                            onClick={() => setNavbarOpen(false)}
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            className="flex items-center justify-center w-10 h-10 border rounded border-slate-200 text-slate-400 hover:text-white hover:border-white"
                            onClick={() => setNavbarOpen(true)}
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className={`menu hidden md:block md:w-auto`} id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Navlinks href={link.href} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    );
};

export default Navbar;
