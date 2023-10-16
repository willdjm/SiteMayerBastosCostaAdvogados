export function RegulatoryAreas() {

return (

<section className='flex justify-center flex-col items-center lg:p-24 p-5'>
	<div className='flex flex-col justify-between justify-items-center lg:max-w-6xl w-full'>
		<h2 className='lg:text-4xl text-2xl lg:pb-16 pb-5 flex justify-center font-medium'>Áreas Regulatórias</h2>
		<p className='text-center font-medium lg:pb-14 pb-5 flex justify-center'>A Mayer, Bastos & Costa Advogados possui domínio técnico para assessoria em procedimentos junto a autarquias governamentais, como:</p>
		<div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-20 gap-10 items-end justify-center">
			<div className="flex flex-col items-center justify-center gap-6">
				<picture>
					<img src="/home/logo-ANS.webp" alt="logo ANS" />
				</picture>
				<p className='text-center font-medium md:w-36'>Agência Nacional de Saúde</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-6">
				<picture>
					<img src="/home/logo-bacen.webp" alt="logo Bacen" />
				</picture>
				<p className='text-center font-medium md:w-28'>Banco Central do Brasil</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-6">
				<picture>
					<img src="/home/logo-sefel.webp" alt="logo Sefel" />
				</picture>
				<p className='text-center font-medium md:w-64'>Secretaria de Acompanhamento Fiscal, Energia e Loteria</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-6">
				<picture>
					<img src="/home/logo-susep.webp" alt="logo Susep" />
				</picture>
				<p className='text-center font-medium md:w-40'>Superintendência de Seguros Privados</p>
			</div>
		</div>
	</div>
</section>
);
}
