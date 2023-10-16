import { Sombra } from "./sombra";

export function About() {

return (

<div className="bottom-0">
<section id="Sobre" className='bg-[url("/home/textura-bg-uem-somos.jpg")] flex justify-center flex-col items-center bg-no-repeat'>
    <div className='flex flex-col justify-center items-center lg:max-w-6xl w-full lg:gap-20 gap-5 lg:pt-28 pt-5 lg:pb-20 pb-5 p-5'>
        <p className='lg:text-2xl text-center hidden lg:flex'>A Mayer, Bastos & Costa Advogados é um consolidado escritório, <br /> que há mais de 20 anos oferece serviços de assessoria em diversas áreas do direito para <br /> pessoas e empresas de diversos ramos de atividade.</p>
        <p className='text-xl text-center lg:hidden'>A Mayer, Bastos & Costa Advogados é um consolidado escritório, que há mais de 20 anos oferece serviços de assessoria em diversas áreas do direito para pessoas e empresas de diversos ramos de atividade.</p>
        <button className="group relative p-1.5 w-32 border border-black text-center overflow-hidden rounded-full text-base ">
            <div className="absolute inset-0 w-0 bg-black transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <a href="/#MayerBastos&CostaAdvogados" className="relative text-black group-hover:text-white">Saiba mais</a>
        </button>
    </div>
</section>
<Sombra />
</div>
);
}
