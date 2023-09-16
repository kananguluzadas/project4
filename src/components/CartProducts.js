import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [pros] = useState([
        {
            id: 1,
            productBrand:"New Balance",
            productName: "NEW BALANCE WS009WBR QADIN KROSSOVKASI",
            price: "200.00₼",
            imageUrl: "https://courir.az/image/cache/fotos/812106-70x70.png"
        },
        {
            id: 2,
            productBrand:"New Balance",
            productName: "NEW BALANCE WS009WBR QADIN KROSSOVKASI",
            price: "250.00₼",
            imageUrl: "https://courir.az/image/cache/fotos/812106-1-70x70.png"
        },
        {
            id: 3,
            productBrand:"New Balance",
            productName: "NEW BALANCE WS009WBR QADIN KROSSOVKASI",
            price: "200.00₼",
            imageUrl: "https://courir.az/image/cache/fotos/812106-2-70x70.png"
        },
        {
            id: 4,
            productBrand:"New Balance",
            productName: "NEW BALANCE WS009WBR QADIN KROSSOVKASI",
            price: "200.00₼",
            imageUrl: "https://courir.az/image/cache/fotos/812106-3-70x70.png"
        }
    ])
    const [products] = useState([
        {
            id: 1,
            productBrand:"New Balance",
            productName: "NEW BALANCE WS009WBR QADIN KROSSOVKASI",
            price: "200.00₼",
            images: [
                {
                    image:"https://courir.az/image/cache/fotos/812106-70x70.png"
                },
                {
                    image:"	https://courir.az/image/cache/fotos/812106-1-70x70.png"
                },
                {
                    image:"https://courir.az/image/cache/fotos/812106-2-70x70.png"
                },
                {
                    image:"https://courir.az/image/cache/fotos/812106-3-70x70.png"
                },
                {
                    image:"https://courir.az/image/cache/fotos/812106-4-70x70.png"
                }
            ]
        }
    ]);

    const tabele = [
        {
            id:1,
            contents: [
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300s",
                    price: "$300",
                    linkss: '/man'
                },
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300s",
                    price: "$300",
                    linkss: '/man'
                },
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300s",
                    price: "$300",
                    linkss: '/man'
                },
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300s",
                    price: "$300",
                    linkss: '/man'
                }
            ]
        },
        {
            id:2,
            contents: [
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300",
                    price: "$300",
                    linkss: '/man'
                },
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300",
                    price: "$300",
                    linkss: '/man'
                },
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300",
                    price: "$300",
                    linkss: '/man'
                },
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300",
                    price: "$300",
                    linkss: '/man'
                }
            ]
        },
        {
            id:3,
            contents: [
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300s",
                    price: "$300",
                    linkss: '/man'
                },
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300s",
                    price: "$300",
                    linkss: '/man'
                },
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300s",
                    price: "$300",
                    linkss: '/man'
                },
                {
                    img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
                    name: "Heidyye karti - 300s",
                    price: "$300",
                    linkss: '/man'
                }
            ]
        },
        {
            img: "https://courir.az/image/cache/catalog/courir/product/GIFT-CARDS-BNNRS-300-250x250.png",
            name: "Heidyye karti - 300",
            price: "$300"
        }
    ]
    
  
    const addToCart = (
        id,
        productName,
        price,
        description,
        imageUrl,
        quantity
      ) => {
        const existingId = cart.find((item) => item.id == id);
        if (existingId) {
          const getNonExisting = cart.filter((item) => item.id !== existingId.id);
          setCart([
            ...getNonExisting,
            { ...existingId, quantity: existingId.quantity + 1 },
          ]);
        } else {
          setCart([
            ...cart,
            { id, productName, price, description, imageUrl, quantity: 1 },
          ]);
        }
      };
    
      const deleteCart = (id) => {
        const filteredData = cart.filter((item) => item.id !== id);
        setCart(filteredData);
      };
    
    
      const value = { cart, addToCart, deleteCart };

    return (
        <CartContext.Provider value={{ products, addToCart, cart, deleteCart, totalQuantity, setTotalQuantity, setTotalPrice, totalPrice}}>{children}</CartContext.Provider>
    )
}