import Image from "next/image"
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";


function AddedToCart({ image, name, price }: { image: string, name: string, price: number }) {
  return (
    <div className="flex gap-10 justify-center mt-24 h-62">
      <div className="flex items-center justify-center shadow-xl w-3/5">
        <Image src={image} width={200} height={200} alt={"product"} />
        <div className="flex flex-col items-start gap-2">
          <span className="flex items-center gap-1">
            <FaCheckCircle className="text-green-500" />
            <strong>
              <p>Adicionado ao carrinho</p>
            </strong>
          </span>
          <p>{name}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 shadow-xl w-1/5">
        <p className="flex gap-2 text-xl font-bold">Subtotal do carrinho:
          <span className="font-medium">R${(Math.round(price * 100) / 100).toFixed(2).replace('.', ',')}</span>
        </p>
        <button className="bg-yellow-300 w-72 p-2 border rounded-full">fechar pedido</button>
        <Link href="/cart">
          <button className="w-72 p-2 border rounded-full">ir para o carrinho</button>
        </Link>
        <span className="text-sm flex flex-col items-center">para melhorar sua experiência,<br />
          <p>faça login em sua conta</p>
        </span>
      </div>
    </div>
  )
}

export default AddedToCart