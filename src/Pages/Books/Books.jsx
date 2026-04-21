import React, { useContext } from 'react';
import { BookContext } from '../../Context/Context';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../../Components/ListedBook/ReadList';
import WishList from '../../Components/ListedBook/WishList';

const Books = () => {
    const bookContext = useContext(BookContext);
    const [storeBook, setStoreBook, wishlist, setWishlist] = bookContext;
    // console.log(wishlist)
    return (
        <div className='container mx-auto my-5'>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>
                <TabPanel>
                    {
                        storeBook.length == 0 ?

                            <div className=' text-3xl text-gray-500 text-center p-30 bg-base-300 rounded-3xl'>
                                No read list data found
                            </div> :

                            <div className='grid grid-rows-1 gap-1'>
                                {
                                    storeBook.map((book, i) => <ReadList key={i} book={book}></ReadList>)
                                }
                            </div>
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishlist.length == 0 ?

                            <div className=' text-3xl text-gray-500 text-center p-30 bg-base-300 rounded-3xl'>
                                No wish list data found
                            </div> :

                            <div className='grid grid-rows-1 gap-1'>
                                {
                                    wishlist.map((book, i) => <WishList key={i} book={book}></WishList>)
                                }
                            </div>
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;