import { Sombra } from './sombra';

export function CorporateMarket() {

return (

<div className='flex flex-col justify-center'>
<section className="lg:bg-[url('/home/img-bg-mercado-corporativo.webp')] bg-[url('/home/img-bg-mercado-corporativo-mobile.jpg')] lg:bg-no-repeat lg:bg-cover bg-cover  lg:bg-center bg-no-repeat">
<div className='lg:bg-black text-white lg:w-2/5 lg:h-full lg:bg-opacity-30 bg-opacity-50 flex items-center justify-center p-5 py-5 lg:p-10'>
    
    <div className='flex flex-col lg:gap-10 gap-5 p-3 lg:p-5'>
        <h2 className='text-4xl text-center lg:text-left'>Mercado <br /> Corporativo</h2>
        <div className="flex flex-col lg:justify-items-center lg:items-start items-center lg:justify-start text-white">
            <p>Prestamos assessoria a profissionais e empresas.</p>
            <ul className="flex flex-col list-disc list-inside">
                <li>Elaboração de contratos</li>
                <li>Compra e negociações</li>
                <li>Empresas nacionais e estrangeiras.</li>
            </ul>
        </div>
        <h1 className='lg:pt-10 lg:text-left text-center'>ASSESSORIA CONTRATUAL E DE COBRANÇA</h1>
        <div className="flex flex-col justify-start gap-10">
            <div className="flex items-start justify-start gap-5">
                <picture>
                    <img
                        src="/home/icone-especie-contrato.svg"
                        alt="icone especie contrato"
                    />
                </picture>
                <p>Análise e elaboração de todas <br /> as espécies de contrato</p>
            </div>
            <div className="flex items-center justify-center gap-5">
                <picture>
                    <img
                        src="/home/icone-regularizacao-imoveis.svg"
                        alt="icone regularizacao imoveis" className=''
                    />
                </picture>
                <p>Análise de documentos e regularização <br /> de imóveis perante os órgãos competentes</p>
            </div>
            <div className="flex items-start justify-start gap-5">
                <picture>
                    <img
                        src="/home/icone-due-diligence.svg"
                        alt="icone due diligence"
                    />
                </picture>
                <p>Due Diligence <br /> imobiliária</p>
            </div>
            <div className="flex items-start justify-start gap-5">
                <picture>
                    <img
                        src="/home/icone-recuperacao-credito.svg"
                        alt="icone recuperacao credito"
                    />
                </picture>
                <p>Cobrança administrativa <br /> e recuperação de crédito</p>
            </div>
        </div>
    </div>
</div>
<div>
</div>
</section>
<Sombra />
</div>
);
}
