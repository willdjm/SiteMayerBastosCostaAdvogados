import { Sombra } from './sombra';

export function MayerBastosCostaAdvogados() {

return (

<div id='MayerBastos&CostaAdvogados'>
<section className="flex justify-center flex-col lg:bg-[url('/home/img-bg-MVV.webp')] bg-[url('/home/img-bg-MVV-mobile.jpg')] lg:bg-no-repeat bg-cover bg-center items-center p-4">
    <div className='flex flex-col justify-between justify-items-center lg:max-w-6xl lg:w-full'></div>
    <div className='flex flex-col items-center lg:justify-center lg:p-20 p-5 text-white gap-8 lg:w-full'>
        <h3 className='text-4xl text-center'>Mayer, Bastos & Costa Advogados</h3>
        <p className="text-center text-base max-w-3xl">Consolidado escritório, que há mais de 20 anos oferece serviços de assessoria em diversas áreas do direito, 
        tanto no âmbito judicial quanto extrajudicial, para pessoas e empresas de diversos ramos de atividade.</p>
        <p className="text-center text-base max-w-3xl">Com estrutura organizacional moderna e ferramentas tecnológicas de ponta, operada por uma equipe de 
        profissionais técnicos, Mestres e Doutores, se estabeleceu como uma excelente opção quando o assunto é assessoria de pessoas e empresas em suas demandas legais.</p>
        <div className="grid lg:grid-cols-3 lg:pt-32 lg:gap-16 gap-10">
            <div className="group bg-[url('/home/degrade-MVV.webp')] bg-no-repeat lg:w-80 p-5 flex flex-col items-start gap-5 rounded-xl">
                <div className=" flex items-start justify-start group-hover:scale-150 transition duration-700  group-hover:-translate-y-5">
                    <picture className=' group-hover:hidden'>
                        <img src="/home/icone-missao.svg"
                            alt="icone Visao"
                        />
                    </picture>
                    <picture className=' hidden group-hover:block z-50' >
                        <img src="/home/icone-missao-hover.svg"
                            alt="icone Visao hover"
                        />
                    </picture>
                </div>
                <p className="group-hover:scale-125 transition duration-700 group-hover:-translate-y-1 text-2xl group-hover:text-yellow-300">MISSÃO</p>
                <span>Atuar de maneira estratégica com foco total no cliente, apresentando resultados de maneira eficiente, contanto com profissionais, parceiros e colaboradores especialistas, Mestres e Doutores em diversos ramos do Direito.</span>
            </div>
            <div className="group bg-[url('/home/degrade-MVV.webp')] bg-no-repeat lg:w-80 p-5 flex flex-col items-start gap-5 rounded-xl">
                <div className=" flex items-start justify-start group-hover:scale-150 transition duration-700  group-hover:-translate-y-5">
                    <picture className=' group-hover:hidden'>
                        <img src="/home/icone-visao.svg"
                            alt="icone Visao"
                        />
                    </picture>
                    <picture className=' hidden group-hover:block z-50'>
                        <img src="/home/icone-visao-hover.svg"
                            alt="icone Visao hover"
                        />
                    </picture>
                </div>
                <p className="group-hover:scale-125 transition duration-700 group-hover:-translate-y-1 text-2xl group-hover:text-yellow-300">VISÃO</p>
                <span>Consolidar-se no mercado como empresa diferenciada na solução das mais variadas questões judiciais e extrajudiciais, voltada para parcerias duradouras através da eficiência de resultados.</span>
            </div>
            <div className="group bg-[url('/home/degrade-MVV.webp')] bg-no-repeat lg:w-80 p-5 flex flex-col items-start gap-5 rounded-xl">
                <div className=" flex items-start justify-start group-hover:scale-150 transition duration-700  group-hover:-translate-y-5">
                    <picture className=' group-hover:hidden'>
                        <img src="/home/icone-valores.svg"
                            alt="icone Valores"
                        />
                    </picture>
                    <picture className=' hidden group-hover:block z-50'>
                        <img src="/home/icone-valores-hover.svg"
                            alt="icone Valores hover"
                        />
                    </picture>
                </div>
                <p className="group-hover:scale-125 transition duration-700 group-hover:-translate-y-1 text-2xl group-hover:text-yellow-300">VALORES</p>
                <ul className="flex flex-col list-disc list-inside gap-1">
                    <li>Transparência</li>
                    <li>Ética</li>
                    <li>Seriedade, e</li>
                    <li>Dedicação ao negócio.</li>
                </ul>
            </div>
        </div>
    </div>
</section>
<Sombra />
</div>
);
}
