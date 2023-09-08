import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    // const [cart, setCart] = useState([])
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
    

    // const addToCart = (id, price, productName, imageUrl) => {
    //     const existingId = cart.find(item => item.id == id)

    //     if(existingId){
    //         const getUniqueProducts = cart.filter(item => {
    //             return item.id !== existingId?.id
    //         })
    //         setCart([...getUniqueProducts, {...existingId, quantity: existingId?.quantity + 1}])
    //     } else {
    //         setCart([...cart, {id, productName, price, imageUrl, quantity: 1}])
    //     }
        
    // }

    // const deleteFromCart = (id) => {
    //     const filteredData = cart.filter(item => {
    //         return item.id !== id
    //     })
    //     setCart(filteredData)
    // }

    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
  
    const handleClick = (item) => {
      if (cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
    };
  
    const handleChange = (item, d) => {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;
  
      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr]);
    };
  
   

    return (
        <CartContext.Provider value={{pros, handleChange, handleClick, show, setShow, cart, setCart}}>{children}</CartContext.Provider>
    )
}