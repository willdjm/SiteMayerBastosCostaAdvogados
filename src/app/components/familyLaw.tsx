import { Sombra } from './sombra';

export function FamilyLaw() {

return (

<section>
<div className="bg-[url('/direito-familia/textura-bg-uem-somos.jpg')] bg-no-repeat flex flex-col items-center ">
    <picture>
        <img src="/home/sombra-divisao.webp" alt="sombra divisao" className='flex items-center justify-end' />
    </picture>
    <div>
        <div className='flex xl:flex-col xl:items-center justify-center xl:gap-5 gap-3 xl:p-12 p-9'>
            <picture>
                <img src="/home/icone-direito-familia.svg" alt="icone direito familia" />
            </picture>
            <h1 className='xl:text-2xl text-xl font-medium text-center items-center justify-center flex'>DIREITO DE FAMÍLIA E SUCESSÕES</h1>
        </div>
        <div className='flex flex-col xl:flex-row xl:items-start xl:justify-end xl:w-screen '>
            <div className='w-full grid justify-center relative'>
                <div className='xl:pl-64 px-6 py-2 xl:p-0 relative'>
                    <p className='text-xl font-normal items-end text-left hidden xl:flex'>A Mayer, Bastos & Costa Advogados conta <br />
                        com profissionais e advogados, <br />
                        dedicados as mais complexas soluções <br />
                        e especializados em Direito de Família <br />
                        e Sucessões, atuando com as <br />
                        principais causas, que envolvem <br />
                        as relações pessoais e patrimoniais <br />
                        decorrentes do matrimônio, <br />
                        da união estável, do parentesco, <br />
                        da tutela e da curatela.</p>
                        <p className='text-xl flex text-center xl:hidden'>A Mayer, Bastos & Costa Advogados conta
                        com profissionais e advogados,
                        dedicados as mais complexas soluções
                        e especializados em Direito de Família
                        e Sucessões, atuando com as
                        principais causas, que envolvem
                        as relações pessoais e patrimoniais
                        decorrentes do matrimônio,
                        da união estável, do parentesco,
                        da tutela e da curatela.</p>
                </div>
                <div className='flex items-center justify-center'>
                <picture>
                    <img src="/direito-familia/img-advogado-familia.png" alt="imagem advogado familia" className='xl:absolute lg:top-[8.2rem] lg:-right-40 xl:top-[15.7rem] 2xl:top-[8.2rem]'/>
                </picture>
            </div>
            </div>

            <div className='xl:w-full bg-neutral-500 text-white'>
                <div className='xl:p-20 xl:px-28 px-5 p-10'>
                    <div className="flex flex-col xl:justify-items-center xl:items-start items-center xl:justify-start">
                        <p className="xl:py-3 py-6 font-normal text-base">DENTRE AS CAUSAS ATENDIDAS, ESTÃO:</p>
                        <ul className="flex flex-col font-normal gap-3">
                            <li>{">"} Casamento, separação, divórcio e anulação;</li>
                            <li>{">"} Conversão de união estável em casamento;</li>
                            <li>{">"} Reconhecimento e dissolução de união estável, inclusive homoafetiva;</li>
                            <li>{">"} Guarda, visitação, alimentos e adoção de filhos;</li>
                            <li>{">"} Reconhecimento e investigação de paternidade e maternidade;</li>
                            <li>{">"} Regime de bens e partilha de bens entre cônjuges ou companheiros;</li>
                            <li>{">"} Testamentos, inventários e arrolamentos de bens;</li>
                            <li>{">"} Tutela, curatela e tomada de decisão apoiada de pessoas incapazes;</li>
                            <li>{">"} Suspensão, perda e extinção do poder familiar⁵;</li>
                            <li>{">"} Concessão de Benefícios Pós Mortem – Previdenciários ou Legais.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<Sombra />
</section>
);
}
