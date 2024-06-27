import { createContext, useState, useEffect, useContext } from "react";
import { products, carousel, inventory} from "../data/EcomData";
import useAlert from "../hooks/useAlert";
import AuthContext from "./AuthContext";

const EcomContext = createContext();

export const EcomProvider = ({children}) =>{
    const [state, dispatch] = useContext(AuthContext);
    const [product, setProduct] = useState([])
    const [slide, setSlide] = useState([])
    const[cars, setCars] = useState(inventory)
    const [cartItems, setCartItems] = useState([])
    const [newArrivals, setNewArrivals] = useState([]);
    const {showAndHide, alertInfo} = useAlert();
    const [order, setOrder] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const isAuthenticated = state.accessToken !== null;

    useEffect(()=>{
        fetchProduct()
        fetchCarousel()
        fetchInventory()
        fetchNewArrivals();
        fetchCart();
    }, [])

    useEffect(() => {
        const count = cartItems.products?.reduce((total, item) => total + item.quantity, 0)

        setCartCount(count)
    }, [cartItems])

    // const getCartCount = () => {
    //     if (!cartItems || !cartItems.products) {
    //         return 0;
    //     } else {
    //         return cartItems.products.reduce((total, item) => total + item.quantity, 0);
    //     }
    // };

     const featured = product.filter((item) => item.featured === true)
     const topSelling = product.filter((item) => item.topSelling === true)
     const garage = inventory.filter((item) => item.inventory === true)
    //  const upcoming = arrivals.filter((item)=> item.arrivals === true )

        const fetchProduct = async()=>{
            const res = await fetch("https://technotronix-api-eeve.onrender.com/api/product")
            const data = await res.json()
            setProduct(data)
        }

        const fetchCarousel = async()=>{
            const res = await fetch("https://localhost:3000/carousel")
            const data = await res.json()
            setSlide(data)

        }

        const fetchInventory = async()=>{
            const res = await fetch("https://technotronix-api-eeve.onrender.com/inventory")
            const data = await res.json()
            setCars(data)
        }

        const fetchNewArrivals = async () => {
            const res = await fetch("https://localhost:3000/arrivals");
            const data = await res.json();
            setNewArrivals(data);
        };

        // const addTocart = (prod) => {
        //     const existingItemIndex = cartItems.findIndex((item) => item.id === prod.id);
        //     if (existingItemIndex !== -1) {
        //         const updatedCartItem = [...cartItems];
        //         const itemToUpdate = updatedCartItem [existingItemIndex];
        //         itemToUpdate.quantity += prod.quantity;
        //         itemToUpdate.amount = itemToUpdate.price * itemToUpdate.quantity
        //         showAndHide("error", "Item already exist in cart");
        //     } else{
        //         setCartItems([...cartItems, {...prod, amount: prod.price * prod.quantity}]);
        //         showAndHide("success", "Item added to cart");
        //     }
        //  };

        const addTocart = async (productId) => {
            try {
                const res = await fetch("https://technotronix-api-eeve.onrender.com/addToCart", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": `${localStorage.getItem ("auth-token")}`,
                    },
                    body: JSON.stringify({ productId, quantity: 1}),
                });
                if (!res.ok) {
                    throw new Error("Something went wrong");
                }

                const data = await res.json();
                setCartItems(data);
                showAndHide("success", "item added to cart");
            } catch (error) {
                console.log(error.message);
                showAndHide("error", "Failed to add item to cart")
            }
        }

        const fetchCart = async () => {
            try {
                const res = await fetch("https://technotronix-api-eeve.onrender.com/cart", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": `${localStorage.getItem("auth-token")}`,
                    },
                });

                if (!res.ok) {
                    throw new Error("Something went wrong");
                }

                const data = await res.json();
                setCartItems(data);
            } catch (error) {
               console.error("Error getting cart", error); 
            }
        }


         const updateQuantity =  async (productId, quantity) =>{
            if (!quantity > 0) {
                showAndHide("error", "quantity cannot be less than 1");
                return;
            }
            try {
               const res = await fetch("https://technotronix-api-eeve.onrender.com/update-quantity", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                },
                body: JSON.stringify({ productId, quantity }),
               });
               const data = await res.json();
               if (res.ok) {
                const existingItemIndex = cartItems.products?.findIndex((item) => item.product._id === productId);
                const updatedCartItem = [...cartItems.products];
                const itemToUpdate = updatedCartItem [existingItemIndex]; 
                itemToUpdate.quantity = quantity;
                itemToUpdate.amount = itemToUpdate.product.price * itemToUpdate.quantity;
                        setCartItems({...cartItems, products: updatedCartItem});
                        console.log(data);
               } else{
                console.error(data.msg || "Failed to update quantity");
               }
            } catch (error) {
                console.error(error);
            }

           
        }

       const removeItem = async (productId) => {
        try {
            const res = await fetch("https://technotronix-api-eeve.onrender.com/delete", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                },
                body: JSON.stringify({productId})
            })

            const data = await res.json()
            if (res.ok) {
                showAndHide("success", "item removed from cart")
                setCartItems(data)
            } else{
                console.error(data.msg || "Failed to remove item");
            }
        } catch (error) {
            console.error(error);
        }
       };

       const totalAmount = () => {
        return cartItems.products?.reduce((total, item) => total + item.amount, 0);
       };

    //    const handleCheckout = async() =>{
    //     const amount = totalAmount()
    //     const currency = "NGN"

    //     try {
    //         const res = await fetch("http://localhost:3000/api/payment/initiate", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 "auth-token": `${localStorage.getItem("auth-token")}`,
    //             },
    //             body: JSON.stringify({amount, currency})
    //         })

    //         const data = await res.json()
    //         if (res.ok) {
    //             window.location.href = data.link 
    //         }else{
    //             console.error(data.msg || "Failed to initiate payment");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    //    }


    const createOrder = async (transaction_id, orderId) => {
        try {
            const response = await fetch("https://technotronix-api-eeve.onrender.com/api/payment/verify", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": `${localStorage.getItem("auth-token")}`
                },
                body: JSON.stringify({transaction_id, orderId}),
                credentials: "include"
            })

            const data = await response.json()
            if (res.ok) {
                setOrder(data.order)
                setCartItems([])
            } else {
                console.error(data.msg);
            }
        } catch (error) {
            console.error(error);
        }
    }

     return(
        <EcomContext.Provider
         value={{
            featured, 
            topSelling, 
            product, 
            slide, 
            garage, 
            addTocart, 
            cartItems, 
            newArrivals, 
            updateQuantity,
            removeItem,
            totalAmount,
            showAndHide,
            // getCartCount,
            createOrder,
            cartCount,
            // handleCheckout,
            alertInfo,
            isAuthenticated,
            }}>
                {children}
        </EcomContext.Provider>
     )

};

export default EcomContext