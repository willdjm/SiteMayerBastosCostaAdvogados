import { AiOutlineInstagram } from 'react-icons/ai';
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';

export function Footer() {

return (

<footer className="lg:bg-[url('/home/img-bg-rodape.webp')] bg-[url('/home/img-bg-rodape-mobile.webp')] bg-cover flex justify-center items-center py-10 p-3 lg:p-16 text-white">
<div className='lg:justify-between grid justify-items-center lg:max-w-6xl w-full gap-10'>
    <ul className="grid grid-cols-1 lg:grid-cols-5 sm:gap-10 md:gap-5 gap-10 justify-items-center">
        <li>
            <a className='flex gap-1 cursor-pointer text-lg' href="https://wa.me/551142930396" target='_blank' rel="noreferrer">
                <FaWhatsapp className='cursor-pointer'
                    size={25} />(11) 4293-0396</a>
        </li>
        <li className="flex flex-row gap-5 lg:px-7 lg:justify-end">
            <a href="#" target='_blank' aria-label='acesso para a página do intagram' rel="noreferrer"><AiOutlineInstagram size={30} /></a>
            <a href="#" target='_blank' aria-label='acesso para a página do linkedin' rel="noreferrer" ><FaLinkedin size={30} /></a>
        </li>
        <li>
            <Link href="/#Contact"
                className='flex gap-1 items-center cursor-pointer text-base lg:justify-end'>
                <MdEmail className='cursor-pointer' size={30} />Envie e-mail</Link>
        </li>
        <li className='lg:col-span-2'>
            <p className='flex items-start lg:text-sm lg:pl-24 text-justify text-sm'>Av. Brigadeiro Luís Antônio, nº 290 - Cj.132, Bairro: Bela Vista, São Paulo - SP, Cep :01318-000</p>
        </li>
    </ul>
    <div className='grid lg:flex w-full lg:justify-between gap-3 lg:pt-5'>
        <span className="lg:text-sm text-xs text-zinc-500 text-center">© Copyright 2023 - Mayer, Bastos & Costa Advogados - Todos os direitos reservados.</span>
        <div className='flex gap-5 items-end justify-center'>
            <a href="https://sacorp.tec.br/?utm_source=www.mayerbastoscostaadv.com.br&utm_medium=banner&utm_campaign=slogan" target='_blank' rel="noreferrer">
                <picture>
                    <img src="/home/logo-sacorp.svg" alt="logo Sacorp" />
                </picture>
            </a>
            <a href="https://www.gukenz.com.br/" target='_blank' rel="noreferrer">
                <picture>
                    <img src="/home/logo-gukenz.svg" alt="logo Gukenz" />
                </picture>
            </a>
        </div>
    </div>
</div>
</footer>
);
}