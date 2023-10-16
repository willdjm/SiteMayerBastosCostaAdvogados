"use client"

import React, { useState } from 'react';
import Link from "next/link";
import { FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from 'react-icons/ai';

export function NavBarPageFamilyLaw() {

const [showMobileMenu, setShowMobileMenu] = useState(false);

return (

<nav className="w-full py-5">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-4 gap-2">
        <Link href="/">
            <h2 className="text-2xl font-bold ">
                <picture>
                    <img
                        src="/home/logo-topo.svg"
                        alt="logo"
                    />
                </picture>
            </h2>
        </Link>
        {/* Desktop */}
        <div className="hidden lg:flex lg:flex-col lg:items-end lg:py-5 lg:gap-5 text-white">
            <ul className="lg:h-auto items-center justify-center lg:flex lg:flex-row flex gap-5 lg:gap-5">
                <li className="text-white flex items-center justify-center text-center lg:hover:bg-transparent">
                    <button className="relative overflow-hidden text-white transition-all before:absolute before:bottom-0 before:left-3 before:top-0 before:z-0 before:w-0 before:bg-white before:hover:rounded-full before:transition-all before:duration-500 w-40 hover:text-black hover:before:left-0 hover:before:w-full">
                        <a href="https://wa.me/551142930396" target='_blank' rel="noreferrer" className="relative z-10 flex gap-2">
                            <FaPhone className='bg-white cursor-pointer border-2 text-black rounded-full' size={25} /> (11) 4293-0396
                        </a>
                    </button>
                </li>
                <li className="text-white text-center lg:hover:bg-transparent">
                    <Link href="#" target='_blank' aria-label='acesso para a página do instagram' rel="noreferrer" >
                        <AiOutlineInstagram size={25} />
                    </Link>
                </li>
                <li className=" text-white text-center lg:hover:bg-transparent">
                    <Link href="#" target='_blank' aria-label='acesso para a página do linkedin' rel="noreferrer" >
                        <FaLinkedin size={25} />
                    </Link>
                </li>
            </ul>
            <ul className="lg:h-auto items-center justify-center lg:flex gap-5 flex flex-col lg:flex-row lg:gap-5 text-white ">
                <li>
                    <Link href="/">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link href="/#Sobre" >
                        SOBRE
                    </Link>
                </li>
                <li>
                    <Link href="/#AreasDeAtuacao" >
                        ÁREAS DE ATUAÇÃO
                    </Link>
                </li>
                <li>
                    <Link href="/#Clientes" >
                        CLIENTES
                    </Link>
                </li>
                <li>
                    <Link href="/#Contact" >
                        CONTATO
                    </Link>
                </li>
            </ul>
        </div>
        <button
            type="button"
            className="lg:hidden"
            onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <picture>
                    <img
                        src="/hamburger-menu.svg"
                        width={40}
                        height={40}
                        alt="menu mobile"
                        className="active:border-none"
                    />
                </picture>
        </button>
    </div>
    <div className="lg:hidden py-3">
        {showMobileMenu &&

            // Mobile
            <ul className="flex flex-col items-center justify-center py-5 space-y-5 text-white bg-black">
                <li>
                    <Link href="/" className="px-2 pb-1 border-b">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link href="/#Sobre" className="px-2 pb-1 border-b">
                        SOBRE
                    </Link>
                </li>
                <li>
                    <Link href="/#AreasDeAtuacao" className="px-2 pb-1 border-b">
                        ÁREAS DE ATUAÇÃO
                    </Link>
                </li>
                <li>
                    <Link href="/#Clientes" className="px-2 pb-1 border-b">
                        CLIENTES
                    </Link>
                </li>
                <li>
                    <Link href="/#Contact" className="px-2 pb-1 border-b">
                        CONTATO
                    </Link>
                </li>
                <li>
                    <a className='flex gap-1 cursor-pointer text-lg' href="https://wa.me/551142930396" target='_blank' rel="noreferrer">
                        <FaWhatsapp className='cursor-pointer'
                            size={25} />(11) 4293-0396</a>
                </li>
                <li className="flex flex-row gap-5 lg:px-7 lg:justify-end">
                    <a href="#" target='_blank' aria-label='acesso para a página do intagram' rel="noreferrer"><AiOutlineInstagram size={30} /></a>
                    <a href="#" target='_blank' aria-label='acesso para a página do linkedin' rel="noreferrer" ><FaLinkedin size={30} /></a>
                </li>
            </ul>
        }
    </div>
</nav>
)
}
