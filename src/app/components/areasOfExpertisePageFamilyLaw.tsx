import { AreasOfExpertiseCards } from "./areasOfExpertiseCards";
import { Sombra } from "./sombra";

export function AreasOfExpertisePageFamilyLaw() {

return (

<div className='flex flex-col '>
<section className="bg-[url('/direito-familia/degarde-bg-area-atuacao.webp')] lg:bg-no-repeat bg-cover flex flex-col justify-center items-center pb-10 lg:pb-20">
    <h2 className='text-4xl lg:py-20 py-6'>Áreas de atuação</h2>
    <div className="lg:grid lg:grid-cols-3 flex flex-col gap-2">
        <AreasOfExpertiseCards />
    </div>
</section>
<Sombra />
</div>
);
}
