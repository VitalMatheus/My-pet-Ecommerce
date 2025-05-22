export const selectCartProducts = (state) => state.cart.products;

export const selectCartSubtotal = (state) =>
  state.cart.products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

export const selectCartTotal = (state) => {
  const subtotal = selectCartSubtotal(state);
  const shipping = 0;
  return subtotal + shipping;
};
