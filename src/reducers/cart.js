const DEFAULT_CART_STATE = {
  lineItems: []
};

export default function cartReducer(state = DEFAULT_CART_STATE, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      const newLineItems = state.lineItems.slice();
      const foundIndex = state.lineItems.findIndex((item) =>
        item.itemId === action.payload.itemId
      );
      
      (foundIndex !== -1) 
        ? newLineItems[foundIndex].quantity += action.payload.quantity
        : newLineItems.push(action.payload);
      
      return {
        ...state,
        lineItems: newLineItems
      }
    
    default:
      return state;
  }
}
