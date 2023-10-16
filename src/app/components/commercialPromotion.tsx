export function CommercialPromotion() {

return (

<section className='flex justify-center flex-col items-center p-8 lg:p-24'>
<div className='flex flex-col justify-between items-center justify-items-center lg:max-w-6xl w-full'>
    <h2 className='lg:text-4xl text-2xl lg:pb-12 pb-5 flex justify-center font-medium'>Promoções comerciais</h2>
    <p className='text-center lg:pb-16 pb-8 font-medium text-base max-w-[50rem]'>A Mayer, Bastos e Costa Advogados é certificada para atuar na autorização, junto a entidades de controle,
    permissão e regulamentação para promoções comerciais. Alguns segmentos para o qual já atuamos nesta área:</p>
    <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-32 gap-5">
        <div className="flex flex-col items-center justify-start lg:gap-8 gap-3">
            <picture>
                <img src="/home/icone-bancos-oficiais.svg" alt="icone bancos oficiais" />
            </picture>
            <p className='font-medium'>Bancos oficiais</p>
        </div>
        <div className="flex flex-col items-center justify-start lg:gap-8 gap-3">
            <picture>
                <img src="/home/icone-seguradora.svg" alt="icone seguradora" />
            </picture>
            <p className='font-medium text-center'>Companhias de seguros</p>
        </div>
        <div className="flex flex-col items-center justify-start lg:gap-8 gap-3">
            <picture>
                <img src="/home/icone-credito.svg" alt="icone credito" />
            </picture>
            <p className='font-medium text-center'>Administradoras de crédito</p>
        </div>
        <div className="flex flex-col items-center justify-start lg:gap-8 gap-3">
            <picture>
                <img src="/home/icone-clube-futebol.svg" alt="icone clube futebol" />
            </picture>
            <p className='font-medium'>Clubes de futebol</p>
        </div>
    </div>
</div>
</section>
);
}
