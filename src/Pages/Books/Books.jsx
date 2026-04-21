import React, { useContext, useMemo, useState } from 'react';
import { BookContext } from '../../Context/Context';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Components/ListedBook/ReadList';
import WishList from '../../Components/ListedBook/WishList';

const Books = () => {
    const bookContext = useContext(BookContext);
    const [storeBook, setStoreBook, wishlist, setWishlist] = bookContext;
    // console.log(wishlist)

    const [sortingType, setSortingType] = useState("");
    // console.log(sortingType);

    const readListSortedData = useMemo(() => {
        if (sortingType == "pages") {
            const sortedData = [...storeBook].sort((a, b) => a.totalPages - b.totalPages);
            return sortedData;
        }
        else if (sortingType == "rating") {
            const sortedData = [...storeBook].sort((a, b) => a.rating - b.rating);
            return sortedData;
        }
        else {
            return storeBook;
        }

    }, [sortingType, storeBook]);

    const wishListSortData = useMemo(() => {
        if (sortingType == "pages") {
            return [...wishlist].sort((a, b) => a.totalPages - b.totalPages);
        }
        else if(sortingType == "rating"){
            return [...wishlist].sort((a, b) => a.rating - b.rating);
        }
        else{
            return wishlist;
        }
    }, [sortingType, wishlist])

    // useEffect(()=>{
    //     if(sortingType){
    //         if(sortingType == "pages"){
    //             const sortedData = [...storeBook].sort((a, b) => a.totalPages - b.totalPages);
    //             // console.log(sortedData)
    //             // setStoreBook(sortedData)
    //         }
    //     }
    // }, [sortingType])

    return (
        <div className='container mx-auto my-5'>

            <div className='text-center my-5'>
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By: {sortingType} ⬇️</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType("pages")}>
                            <a>Pages</a>
                        </li>
                        <li onClick={() => setSortingType("rating")}>
                            <a>Rating</a>
                        </li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>
                <TabPanel>
                    {
                        readListSortedData.length == 0 ?

                            <div className=' text-3xl text-gray-500 text-center p-30 bg-base-300 rounded-3xl'>
                                No read list data found
                            </div> :

                            <div className='grid grid-rows-1 gap-1'>
                                {
                                    readListSortedData.map((book, i) => <ReadList
                                        key={i} book={book}
                                    ></ReadList>)
                                }
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishListSortData.length == 0 ?

                            <div className=' text-3xl text-gray-500 text-center p-30 bg-base-300 rounded-3xl'>
                                No wish list data found
                            </div> :

                            <div className='grid grid-rows-1 gap-1'>
                                {
                                    wishListSortData.map((book, i) => <WishList
                                        key={i} book={book}
                                    ></WishList>)
                                }
                            </div>
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;