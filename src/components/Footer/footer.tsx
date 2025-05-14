function Footer() {
  return (
    <div className="flex text-white justify-center items-center px-40 h-96 bg-black">
      <div className="flex flex-col w-1/5 h-72 justify-around pt-1">
        <strong><p className="text-2xl">Exclusive</p></strong>
        <p className="text-sm">Subscribe</p>
        <p className="text-sm">Get 10% off your first order</p>
        <input type="text" placeholder="Enter your email" className="border border-white text-sm text-gray-500 w-44 rounded p-2" />
      </div>

      <div className="flex flex-col w-1/5 h-72 justify-around pt-1">
        <strong><p className="text-2xl">Support</p></strong>
        <p className="text-sm">Rua dos exemplos, 123 – Lagoa Nova,<br /> Natal, RN, 59000-000, Brasil</p>
        <p className="text-sm">email@example.com</p>
        <p className="text-sm">+55(84)99999-9999</p>
      </div>

      <div className="flex flex-col w-1/5 h-72 justify-around pt-3">
        <strong><p className="text-2xl">Account</p></strong>
        <p className="text-sm">My Account</p>
        <p className="text-sm">Login / Register</p>
        <p className="text-sm">Cart</p>
        <p className="text-sm">Wishlist</p>
        <p className="text-sm">Shop</p>
      </div>

      <div className="flex flex-col w-1/5 h-72 justify-around pt-2">
        <strong><p className="text-2xl">Quick Link</p></strong>
        <p className="text-sm">Privacy Policy</p>
        <p className="text-sm">Terms of Use</p>
        <p className="text-sm">FAQ</p>
        <p className="text-sm">Contact</p>
      </div>

      <div className="flex flex-col w-1/5 h-72 pt-6 ">
        <strong><p className="text-2xl">Download App</p></strong>
      </div>
    </div>
  )
}

export default Footer;
