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
