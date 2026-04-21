import React, { createContext, useState } from 'react';
import { getAllReadListFromLocalDB } from '../Utils/LocalDB';
import { getAllWishListFromLocalDB } from '../Utils/LocalDB2';

export const BookContext = createContext()

const Context = ({ children }) => {
    // console.log(children)

    const [storeBook, setStoreBook] = useState(() => getAllReadListFromLocalDB());
    const [wishlist, setWishlist] = useState(() => getAllWishListFromLocalDB());

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