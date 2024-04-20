'use client'

import React, {useState} from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import Image from "next";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "Nosotros",
        path: "/"
    },
    {
        title:"Productos",
        path:"/cortinasroller"
    },
    {
        title: "Proyectos",
        path:"/"
    },
    {
        title:"contacto",
        path:"/"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-orange-500 bg-opacity-100">
            <div className="flex flex-wrap item-center justify-between mx-auto p-4">
                <Link href={"/"} className='text-2xl md:text-4xl text-white font-sans'>ACOLOMA</Link>
                <div className="mobile-menu block md:hidden">
                    {
                        !navbarOpen ? (
                            <button onClick= {() => setNavbarOpen(true)} className="flex items-center px-3 py-2 border-slate-200 text-slate-200 hover:text-white hover:border-white">
                                <Bars3Icon className=" w-5 h-5" />
                            </button>
                        ) : <button onClick= {() => setNavbarOpen(false)} className="flex items-center px-3 py-2 border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <XMarkIcon className=" w-5 h-5"/>
                        </button>
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index)=> (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/>:null}
        </nav>
    )
}

export default Navbar;