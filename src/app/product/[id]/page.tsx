"use client"
import { useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { incrementProduct, decrementProduct } from '@/redux/cartSlice';
import { useParams } from 'next/navigation';
import { useFetch } from '@/hooks/useFetch';
import AddedToCart from '@/components/AddedToCart/addedToCart';

function Product() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`http://localhost:3001/${id}`)

  const [addedToCart, setAddedToCart] = useState(true);
  const dispatch = useDispatch();

  interface RootState {
    cart: {
      products: Array<{
        name: string;
        price: number;
        image: string;
        quantity: number;
      }>;
    };
  }

  const cartProduct = useSelector((state: RootState) =>
    state.cart.products.find((item) => item.name === product?.name)
  );

  const quantity = cartProduct ? cartProduct.quantity : 0;

  const addProductToCart = () => {
    dispatch(
      incrementProduct({
        name: product?.name,
        price: product?.price,
        image: product?.image,
        quantity: 1,
      })
    );
  };

  const removeProductFromCart = () => {
    dispatch(decrementProduct({ name: product?.name }));
  };


  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;
  if (!product) return;

  if (addedToCart) {
    return (
      <AddedToCart image={product.image} name={product.name} price={product.price} />
    )
  }
  return (
    <div>
      <div className="flex justify-center items-center my-20">
        <div>
          <Image src={product.image} alt="promotions" width="500" height="600" />
        </div>

        <div className="flex flex-col justify-evenly w-md h-60">
          <div>
            <p className="text-3xl">{product.name}</p>
            <p className="text-xs">código: {product.sku}</p>
          </div>

          <div className="flex flex-col my-8">
            <p className="text-sm">de R${(Math.round(product.old_price * 100) / 100).toFixed(2).replace('.', ',')}</p>
            <strong><p className="text-lg"> por R${(Math.round(product.price * 100) / 100).toFixed(2).replace('.', ',')}</p></strong>
          </div>
          <p className="text-sm">{product.description}</p>

          <div className="flex gap-4">
            <div className="flex border rounded overflow-hidden w-44 text-center">
              <button
                onClick={removeProductFromCart}
                className="w-1/3 border-r text-xl hover:bg-gray-100"
              >
                –
              </button>
              <div className="w-1/3 flex items-center justify-center">{quantity}</div>
              <button
                onClick={addProductToCart}
                className="w-1/3 bg-red-500 text-white text-xl hover:bg-red-600"
              >
                +
              </button>
            </div>
            <button onClick={() => setAddedToCart(true)} className="w-2/4 bg-red-500 text-white text-xl rounded">Buy Now</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product;
