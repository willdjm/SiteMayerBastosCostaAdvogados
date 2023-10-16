import { NavBarPageFamilyLaw } from './navBarPageFamilyLaw';

export function BannerPageFamilyLaw() {

return (

<div>
<section className="flex flex-col">
    <div className='absolute z-40 flex flex-col items-center w-full '>
        <NavBarPageFamilyLaw />
    </div>
    <picture className='hidden sm:block object-cover relative w-full z-0'>
        <img src="/direito-familia/img-banner-direito-familia.webp" alt="banner" />
    </picture>
    <picture className='sm:hidden object-cover relative w-full z-0'>
        <img src="/direito-familia/img-banner-direito-familia-celular.webp" alt="banner mobile" />
    </picture>
    <picture className='absolute z-30'>
        <img src="/home/degrade-topo-banner.webp" alt="banner topo" />
    </picture>
</section>
</div>
);
}  