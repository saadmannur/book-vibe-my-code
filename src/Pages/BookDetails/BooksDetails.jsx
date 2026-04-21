import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/Context';
import { toast } from 'react-toastify';

const BooksDetails = () => {

    const params = useParams();
    // console.log(params.id)

    const allBooks = useLoaderData();
    // console.log(allBooks)

    const currentBook = allBooks.find((book) => book.bookId == params.id);
    // console.log(expectedBook)

    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = currentBook;

    const bookContext = useContext(BookContext)
    const [storeBook, setStoreBook, wishlist, setWishlist] = bookContext

    const handleMarkAsRead = (currentBook) => {
        const isExistBook = storeBook.find(book => book.bookId == currentBook.bookId);
        if(isExistBook){
            toast.error("This book is already store")
        }else{
            setStoreBook([...storeBook, currentBook]);
            toast.success(`${bookName} is added to read`)
        }
    }

    const handleWishlist = (currentBook) => {
        const isExistInReadList = storeBook.find(book => book.bookId == currentBook.bookId);
        if(isExistInReadList){
            toast.error("This book is already in Read List");
            return;
        }
        
        const isExistBook = wishlist.find(book => book.bookId == currentBook.bookId);
        if(isExistBook){
            toast.error("This book is already in Wishlist")
        }else{
            setWishlist([...wishlist , currentBook])
            toast.success(`${bookName} is added to Wishlist`)
        }
    }

    return (
        <div className='container mx-auto m-10'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-10 m-5 space-y-5 '>
                <div className='flex justify-center items-center bg-base-300 rounded-2xl p-15 lg:p-20 md:col-span-2'>
                    <img src={image} alt="" className='' />
                </div>
                <div className='space-y-5 md:col-span-3'>
                    <h2 className='text-4xl font-bold '>{bookName}</h2>
                    <p className='text-xl font-semibold'>By: {author}</p>
                    <div className="divider"></div>
                    <p>{category}</p>
                    <div className="divider"></div>
                    <p className='font-bold'>Review: <span className='text-gray-500 font-normal'>{review}</span></p>
                    <div><span className='font-bold'>Tag</span> {tags.map((tag, i) => <div key={i} className='badge badge-soft badge-success text-md font-semibold text-green-500 p-2'>{tag}</div>)}</div>
                    <div className="divider"></div>
                    <div className='flex gap-10 items-center'>
                        <div className='text-gray-500 space-y-4'>
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div className='font-bold space-y-4'>
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className=' flex gap-5'>
                        <button className="btn btn-neutral btn-outline"
                            onClick={() => { handleMarkAsRead(currentBook) }}
                        >Mark as Read</button>
                        <button
                            onClick={() => { handleWishlist(currentBook) }}
                         className="btn btn-active btn-info text-white font-semibold">Add to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;