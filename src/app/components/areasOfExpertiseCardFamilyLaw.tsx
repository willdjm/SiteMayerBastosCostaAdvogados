import { ButtonCardFamilyLaw } from './buttonCardFamilyLaw';


export function AreasOfExpertiseCardFamilyLaw() {

return (

<div className="group lg:hover:bg-[url('/home/img-bg-atuacao-aceso.webp')] p-5 lg:p-0 bg-center bg-no-repeat bg-fixed flex flex-col lg:flex-row col-span-3 items-center rounded-xl hover:shadow-2xl bg-gray-50 bg-opacity-50 border lg:border-none border-gray-200 lg:bg-transparent">
    <div className="flex flex-col items-center gap-5 lg:bg-gradient-to-r lg:from-gray-50 lg:to-transparent lg:h-full rounded-xl justify-center">
        <div className="relative lg:w-64 h-16 flex items-center justify-center group-hover:scale-110 transition duration-700 group-hover:-translate-y-1">
            <picture className='lg:absolute group-hover:hidden'>
                <img src='home/icone-direito-familia.svg'
                    alt="icone direito civil"
                />
            </picture>
            <picture className=' hidden group-hover:flex'>
                <img src="home/icone-direito-familia-hover.svg"
                    alt="icone direito civil hover"
                />
            </picture>
        </div>
        <p className="text-center">DIREITO DE FAMILIA <br /> E SUCESSÕES</p>
    </div>
    <div className="col-span-2 flex gap-5 justify-end lg:py-20 py-4 lg:w-full h-full items-center rounded-e-2xl">
        <div className='flex lg:items-end lg:pr-7'>
            <ButtonCardFamilyLaw />
        </div>
    </div>
</div>
);
}
