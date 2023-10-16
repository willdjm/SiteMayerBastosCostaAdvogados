import { Sombra } from "./sombra";

export function DevelopmentProfessional() {

return (

<div className='flex flex-col'>
    <section className="lg:bg-[url('/home/img-bg-desenvolvimento-profissional.webp')] lg:bg-no-repeat bg-[url('/home/img-bg-desenvolvimento-profissional-mobile.jpg')] lg:bg-center bg-no-repeat bg-cover lg:bg-cover bg-center lg:h-auto">
        <div className='text-white lg:w-full flex lg:items-start lg:justify-between items-center'>
            <div className='lg:w-full'></div>
            <div className='flex justify-center items-center justify-items-center lg:w-2/3 w-full flex-col lg:gap-10 gap-5 bg-stone-700 lg:bg-opacity-100 bg-opacity-70 lg:items-start lg:justify-center lg:p-32 p-5 '>
                <h3 className='text-4xl lg:text-left text-center lg:p-0'>Desenvolvimento <br /> profissional</h3>
                <p className="text-center lg:text-left">Com amplo conhecimento e corpo <br /> técnico, A Mayer, Bastos & Costa Advogados <br /> ministra cursos e treinamentos voltados a <br /> atualização de funcionários e colaboradores, <br /> nos diversos ramos do Direito.</p>
            </div>
        </div>
        <div>
        </div>
    </section>

<Sombra/>
</div>

);
}
