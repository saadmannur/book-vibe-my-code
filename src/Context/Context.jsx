import React, { createContext, useState } from 'react';

export const BookContext = createContext()

const Context = ({ children }) => {
    // console.log(children)

    const [storeBook, setStoreBook] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    const data = [storeBook, setStoreBook, wishlist, setWishlist]
    // console.log(storeBook)

    return (
        <div>
            <BookContext.Provider value={data}>
                {children}
            </BookContext.Provider>
        </div>
    );
};

export default Context;