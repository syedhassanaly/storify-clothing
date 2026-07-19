const CartKey = "CartStore";

export const getLocalStorageCartItem = () => {
  const rawCartItem = localStorage.getItem(CartKey);
  // ab hamein data string me milay ga bcz of local storage or hamein array me chaiye to hum kia krein gi below
  if (!rawCartItem) return [];

  return JSON.parse(rawCartItem);
};

export const setLocalStorageCartItem = (cartItems) => {
  return localStorage.setItem(CartKey, JSON.stringify(cartItems));
};
