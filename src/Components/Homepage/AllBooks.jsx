import React, { use } from 'react';
import Book from './Book';

const booksPromise = fetch("/booksData.json").then(res => res.json());

const AllBooks = () => {

    const books = use(booksPromise);
    // console.log(books)

    return (
        <div className='container mx-auto my-5 space-y-5'>
            <h2 className='text-center font-bold text-3xl'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    books.map((book , i) => <Book key={i} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default AllBooks;