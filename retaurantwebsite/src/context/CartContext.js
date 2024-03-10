import { useContext,createContext,useState } from "react";

const CartContext = createContext();
        export const CartProvider = ({ children }) => {
            const [cart, setCart] = useState(0)
            const [total, setTotal] = useState(0);
            return (
                <CartContext.Provider value={{ cart,  setCart,total,setTotal}}>
                {children}
                </CartContext.Provider>
            );
            };
            export const useCart = () => {
                return(useContext(CartContext))
           }