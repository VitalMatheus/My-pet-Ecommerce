"use client"
import Image from "next/image"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/types/product";
import { decrementProduct, incrementProduct } from "@/redux/cartSlice";
import type { CartItemType } from "@/types/product";
import { selectCartSubtotal, selectCartTotal } from "@/redux/cartSelectors"

function Cart() {
  const subtotal = useSelector(selectCartSubtotal);
  const total = useSelector(selectCartTotal);
  const cartItems = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();

  const handleDecreaseQuantity = (item: CartItemType) => {
    dispatch(decrementProduct({ name: item.name }))
  }

  const handleImproveQuantity = (item: CartItemType) => {
    dispatch(incrementProduct({
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: item.quantity
    }))
  }

  const getSubtotal = (item: { price: number; quantity: number }) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const formatCurrency = (value: number) => 
  value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  return (
    <div className="overflow-x-auto w-5/6 m-auto mb-20">
      <table className="min-w-full rounded-md shadow-sm">
        <thead>
          <tr className="text-left border-b">
            <th className="py-4 px-6">Product</th>
            <th className="py-4 px-6">Price</th>
            <th className="py-4 px-6">Quantity</th>
            <th className="py-4 px-6">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="py-4 px-6 flex items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="object-cover rounded"
                />
                <span>{item.name}</span>
              </td>
              <td className="py-4 px-6">R$ {(Math.round(item.price * 100) / 100).toFixed(2).replace('.', ',')}</td>
              <td className="py-4 px-6">
                <div className="flex border rounded overflow-hidden w-28 text-center">
                  <button
                    onClick={() => { handleDecreaseQuantity(item) }}
                    className="w-1/3 border-r text-xl hover:bg-gray-100"
                  >
                    –
                  </button>
                  <div className="w-1/3 flex items-center justify-center">
                    {String(item.quantity).padStart(2, '0')}
                  </div>
                  <button
                    onClick={() => handleImproveQuantity(item)}
                    className="w-1/3 border-l bg-red-500 text-white text-xl hover:bg-red-600"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-4 px-6 font-semibold">
                ${getSubtotal(item)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-around mt-20">
        <div className="flex h-16 gap-4">
          <input type="text" placeholder="Coupon Code" className="p-4 text-gray-600 border border-gray rounded" />
          <button className="text-white bg-red-500 p-4 rounded w-48">Apply Coupon</button>
        </div>

        <div className="border rounded-md p-6 w-1/4">
          <h2 className="text-xl font-semibold mb-4">Cart Total</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span className="font-medium">Free</span>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">{formatCurrency(total)}</span>
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart