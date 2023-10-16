import { AreasOfExpertiseCardFamilyLaw } from './areasOfExpertiseCardFamilyLaw';
import { AreasOfExpertiseCards } from './areasOfExpertiseCards';
import { Sombra } from './sombra';


export function AreasOfExpertise() {

return (

<div id='AreasDeAtuacao' className='flex flex-col justify-center'>
<section className="bg-[url('/home/img-bg-atuacao.webp')] 2xl:h-screen bg-cover bg-center bg-scroll flex flex-col justify-center items-center p-5 lg:p-0">
    <div className='lg:justify-between flex flex-col justify-items-center lg:max-w-6xl text-black items-center justify-center'>
        <h1 className='text-4xl lg:pb-20 pb-5 font-light'>Áreas de atuação</h1>
        <div className="lg:grid lg:grid-cols-3 grid-cols-2 flex flex-col gap-2">
            <AreasOfExpertiseCards />
            <AreasOfExpertiseCardFamilyLaw/>
        </div>
    </div>
</section>
<Sombra />
</div>
);
}
