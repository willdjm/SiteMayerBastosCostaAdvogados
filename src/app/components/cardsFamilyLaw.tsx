import { Sombra } from './sombra';

export function CardsFamilyLaw() {

return (

<div className='flex flex-col '>
<section className=" flex flex-col justify-center items-center xlpt-16 xl:pb-28">
    <div className='flex flex-col justify-between justify-items-center xl:max-w-[88rem] w-full'>
        
        <div className="flex xl:flex-wrap flex-col xl:flex-row items-center justify-center xl:gap-10 gap-5 p-5">
            
            {/* TITULO */}
            <div className="flex flex-col w-full xl:w-72 xl:px-3 items-center justify-center">
            </div>
            <div className=" w-full xl:w-36 flex items-center justify-center ">
            </div>
            <div className=" w-full xl:max-w-xl xl:w-full flex items-center justify-center ">
                <span className='xl:text-sm text-base w-full font-semibold xl:text-left text-center'>A MAYER, BASTOS & COSTA ADVOGADOS É NORTEADA PELAS <br /> PRINCIPAIS PREMISSAS INDISPENSÁVEIS PARA ATUAÇÃO NA ÁREA, <br /> TAIS COMO:</span>
            </div>
            {/* ICONE 1 */}
            <div className="flex flex-col w-full xl:w-80 xl:px-3 xl:items-end items-center xl:justify-end">
                <p className='font-semibold text-base'>CONHECIMENTO TÉCNICO</p>
            </div>
            <div className="xl:w-[6rem] xl:h-[6rem] flex items-center justify-center xl:border-[3px] rounded-full border-black">
                <picture className='z-30 relative'>
                <img src="/direito-familia/icone-conhecimento-tecnico.svg" alt="icone conhecimento tecnico"/>
                </picture>
            </div>
            <div className=" w-full xl:max-w-xl xl:w-full flex items-center justify-center ">
                <span className='xl:text-sm xl:w-full text-center xl:text-left'>Pleno domínio das normas, princípios, jurisprudência, entendimentos doutrinários <br />
                    que regem o Direito de Família, bem como todos atos e procedimentos, com <br />
                    destaque para adoção de estratégias adequadas para cada caso.
                </span>
            </div>
            {/* ICONE 2 */}
            <div className="flex flex-col w-full xl:w-80 xl:px-3 xl:items-end items-center xl:justify-end">
                <p className='font-semibold text-base'>EMPATIA</p>
            </div>
            <div className="xl:w-[6rem] xl:h-[6rem] flex items-center justify-center xl:border-[3px] rounded-full border-black">
                <picture>
                <img src="/direito-familia/icone-empatia.svg" alt="icone empatia" />
                </picture>
                <span className="xl:inline-block hidden h-[61px] w-[3px] self-stretch bg-black relative z-0 bottom-16 right-8 "></span>
            </div>
            <div className=" w-full xl:max-w-xl xl:w-full flex items-center justify-center ">
                <span className='xl:text-sm xl:w-full text-center xl:text-left'>Sensibilidade, compreensão e respeito para lidar com os mais variados <br />
                    públicos, faz da Mayer, Bastos & Costa Advogados, ter um diferencial à <br />
                    disposição de seus clientes, assim todos associados procuraram entender as <br />
                    necessidades, os sentimentos e os objetivos de cada cliente, sem qualquer tipo <br />
                    de julgamento ou imposição de opiniões, sempre buscando a melhor <br />
                    alternativa, atuando muitas vezes como mediadores, buscando facilitar o acordo <br />
                    entre as partes quando possível.
                </span>
            </div>
            {/* ICONE 3 */}
            <div className="flex flex-col w-full xl:w-80 xl:px-3 xl:items-end items-center xl:justify-end">
                <p className='font-semibold text-base'>ÉTICA</p>
            </div>
            <div className="xl:w-[6rem] xl:h-[6rem] flex items-center justify-center xl:border-[3px] rounded-full border-black">
                <picture>
                <img src="/direito-familia/icone-etica.svg" alt="icone etica" />
                </picture>
                <span className="xl:inline-block hidden h-[77px] w-[3px] self-stretch bg-black relative z-0 bottom-20 right-7"></span>
            </div>
            <div className=" w-full xl:max-w-xl xl:w-full flex items-center justify-center ">
                <span className='xl:text-sm xl:w-full text-center xl:text-left'>A Mayer, Bastos & Costa Advogados, segue a rigor todos os deveres impostos <br />
                    pelo Estatuto da Advocacia e pelo Código de Ética e Disciplina da OAB, assim <br />
                    todos seus associados, agem com total honestidade, transparência e <br />
                    responsabilidade com todos seus clientes, respeitando seus direitos e interesses. <br />
                    Estendendo o mesmo respeito e cordialidade a seus colegas, seus adversários e os <br />
                    demais profissionais envolvidos nas causas.</span>
            </div>
            {/* ICONE 4 */}
            <div className="flex flex-col w-full xl:w-80 xl:px-3 xl:items-end items-center xl:justify-end">
                <p className='font-semibold text-base'>HUMILDADE</p>
            </div>
            <div className="xl:w-[6rem] xl:h-[6rem] flex items-center justify-center xl:border-[3px] rounded-full border-black">
                <picture>
                <img src="/direito-familia/ione-humildade.svg" alt="icone humildade" />
                </picture>
                <span className="xl:inline-block hidden h-[60px] w-[3px] self-stretch bg-black relative z-0 bottom-[60px] right-7"></span>
            </div>
            <div className=" w-full xl:max-w-xl xl:w-full flex items-center justify-center ">
                <span className='xl:text-sm xl:w-full text-center xl:text-left'>Por fim, a Mayer, Bastos & Costa Advogados, preza e valoriza profissionais que <br />
                    reconhecem seus limites, suas dificuldades e suas dúvidas, buscando sempre ajuda <br />
                    quando necessário. Além disso, conta com corpo especializado que precisa e deve <br />
                    se manter atentos a aprender sempre, se atualizando sobre as mudanças e <br />
                    evoluções do Direito de Família.</span>
            </div>
        </div>
    </div>
</section>
<Sombra />
</div>
);
}
