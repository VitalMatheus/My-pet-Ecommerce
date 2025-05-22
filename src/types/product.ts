export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  old_price: number;
  image: string;
  sku: string;
  type: string;
  recommended: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface RootState {
  cart: {
    products: Array<{
      name: string;
      price: number;
      image: string;
      quantity: number;
    }>;
  };
}

export type CartItemType = {
  name: string;
  price: number;
  image: string;
  quantity: number;
};