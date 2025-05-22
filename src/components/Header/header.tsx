'use client'
import Link from 'next/link';
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useSelector } from 'react-redux';
import { selectCartProducts } from '@/redux/cartSelectors';


function Header() {
  const cartItems = useSelector(selectCartProducts);
  
  return (
    <div className="flex justify-around items-center py-6 border-b border-gray-200">
      <Link href="/">
        <div>
          <h1 className="text-2xl font-bold drop-shadow-2xl">Magali Store</h1>
        </div>
      </Link>

      <div className="flex justify-evenly w-sm text-base">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/about">About</Link>
        <p>Sign Up</p>
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          <input type="text" placeholder="What are you looking for?" className="bg-gray-100 rounded-sm py-2 px-4" />
          <HiMagnifyingGlass className="relative right-6 text-xl"  />
        </div>
        <Link href="/cart">
          <span className="relative flex">
            <PiShoppingCartSimpleLight className="text-2xl" />
            <p className="absolute -right-2 text-xs w-4 h-4 bg-red-500 text-white px-1 rounded-full">{cartItems.length}</p>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default Header;