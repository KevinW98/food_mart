export const addItemToCart= (cartItems, itemToAdd)=>{
    const existingCartItem = cartItems.find(
        cartItem => itemToAdd.itemId === cartItem.itemId
    );
    if(existingCartItem){
        return cartItems.map(cartItem =>
        cartItem.itemId=== itemToAdd.itemId ?
            {...cartItem,quantity:cartItem.quantity+1}:cartItem);
    }
    return [...cartItems,{...itemToAdd,quantity:1}];
}



export const removeItemFromCart = (cartItems,itemToRemove)=>{
    const existingCartItem = cartItems.find(
        cartItem=> cartItem.itemId == itemToRemove.itemId
    )
    if(existingCartItem.quantity == 1){
        return cartItems.filter(cartItem => cartItem.itemId !== itemToRemove.itemId);
    }
    return cartItems.map(
        cartItem=>
            cartItem.itemId == itemToRemove.itemId ?
                {...cartItem,quantity:cartItem.quantity-1}
                : cartItem
    )
}
