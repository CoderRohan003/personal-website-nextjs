import Link from "next/link";

const Navlinks = ({ href , title }) => {
    return (
        <Link href={href} className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-[#adb7be]'>
            {title}
        </Link>
    );
};

export default Navlinks;