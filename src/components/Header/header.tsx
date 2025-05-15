import Link from 'next/link';
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { HiMagnifyingGlass } from "react-icons/hi2";


function Header() {
  return (
    <div className="flex justify-around items-center py-6 border-b border-gray-200">
      <Link href="/">
        <div>
          <h1 className="text-2xl font-bold drop-shadow-2xl">Magali Store</h1>
        </div>
      </Link>

      <div className="flex justify-evenly w-sm text-base">
        <Link href="/">Home</Link>
        <p>Contact</p>
        <p>About</p>
        <p>Sign Up</p>
      </div>

      <div className="flex items-center">
        <div className="flex items-center">
          <input type="text" placeholder="What are you looking for?" className="bg-gray-100 rounded-sm py-2 px-4" />
          <HiMagnifyingGlass className="relative right-6 text-base"  />
        </div>
        <span>
          <PiShoppingCartSimpleLight className="text-base" />
        </span>
      </div>
    </div>
  )
}

export default Header;