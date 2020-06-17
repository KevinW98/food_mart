import {createSelector} from 'reselect';


const selectCart = state =>state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart=>cart.hidden
)


export const selectorCartTotal = createSelector(
    [selectCartItems],
      cartItems=>cartItems.reduce(
          (totalPrice,cartItem)=>
              totalPrice+cartItem.quantity*cartItem.price,0

));
