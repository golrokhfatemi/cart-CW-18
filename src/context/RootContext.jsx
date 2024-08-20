import { createContext, useContext, useState } from "react";

export const RootContext = createContext();

export default function RootContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [params, setParams] = useState({
    order: "asc",
    size: "",
  });

  function addToCart(product) {
    const isExistProduct = !!cart.find((item) => item.id === product.id);
    if (isExistProduct) {
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        })
      );
    } else {
      setCart([...cart, { ...product, count: 1 }]);
    }
  }

  function deleteCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }
  console.log(cart);
  return (
    <RootContext.Provider
      value={{ cart, addToCart, deleteCart, params, setParams }}
    >
      {children}
    </RootContext.Provider>
  );
}
export const useCartContext = function () {
  return useContext(RootContext);
};
