import Link from "next/link";

export function ButtonCardFamilyLaw() {

return (

<div className='flex'>
    <Link href="/direito-de-familia" rel="noreferrer">
        <button className="p-1.5 w-32 border border-black hover:text-white hover:shadow-[inset_13rem_0_0_0] lg:opacity-0 lg:group-hover:opacity-100 rounded-full hover:shadow-black duration-[700ms] transition-[color,box-shadow]">
            Saiba mais
        </button>
    </Link>
</div>
);
}
