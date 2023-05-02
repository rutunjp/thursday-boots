import Link from 'next/link'
import Logo from '../components/logo'
import { BsBag, BsSearch } from 'react-icons/bs'
export default function Navbar() {
  const svgHeight = '50pt'
  const Leftlinks = [
    'Men',
    'Women',
    'About',
    'HomeLogo',
    'Help',
    'Account',
    'Search',
    'Cart',
  ]

  return (
    <div
      className="w-full  absolute   hover:bg-white  justify-items-center  hover:text-black flex flex-row duration-700 h-1/8
    "
    >
      <div className="leftLinks gap-4 justify-start m-auto flex flex-row w-2/6 ">
        <a className="navLink hover-underline-animation">Men</a>
        <a className="navLink">Women</a>
        <a className="navLink">About</a>
      </div>
      <Logo className="w-36  hover:w-32 hover:fill-black duration-300" />

      <div className="leftLinks gap-4 justify-end m-auto flex flex-row w-2/6 ">
        <a className="navLink">Help</a>
        <a className="navLink">Account</a>
        <a className="hover:text-slate-600">
          <BsSearch />
        </a>
        <a className="hover:text-slate-600">
          <BsBag />
        </a>
      </div>
    </div>
  )
}
