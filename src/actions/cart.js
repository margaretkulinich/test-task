export function addToCart(itemId, quantity = 1) {
  return {
    type: "ADD_TO_CART",
    payload: { itemId, quantity }
  };
}
