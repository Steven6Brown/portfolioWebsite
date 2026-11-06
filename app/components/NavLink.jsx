import Link from 'next/link';

export default function NavLink({ href, title, onClick }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className='block py-3 pl-3 pr-4 text-bt-grey sm:text-xl rounded md:px-0 md:py-3 hover:text-p-green'
    >
      {title}
    </Link>
  );
}