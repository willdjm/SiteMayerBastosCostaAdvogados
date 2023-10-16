import { NavBar } from "./navBar";

export function VideoBanner() {

return (

<section id='/' className="flex flex-col relative">
    <div className='absolute z-40 flex flex-col items-center w-full '>
        <NavBar/>
    </div>
    <picture className='hidden sm:block'>
        <img src="/home/img-banner-adv.webp" alt="banner advogados" />
    </picture>
    <picture className='absolute z-30'>
        <img src="/home/degrade-topo-banner.webp" alt="banner" />
    </picture>
    <picture className='sm:hidden relative z-0'>
        <img src="/home/img-banner-mobile.webp" alt="banner mobile" />
    </picture>
    <div className='2xl:absolute sm:hidden md:hidden lg:hidden xl:hidden hidden z-30 2xl:flex flex-col items-center w-full pt-[480px] lg:pt-[48rem]'>
        <span className='text-white text-2xl lg:text-7xl font-light pr-16 lg:pr-32'>Muito Mais</span>
        <span className='text-white text-xl lg:text-5xl font-light pl-24 lg:pl-64'>cobertura jurídica</span>
    </div>
</section>
);
}  