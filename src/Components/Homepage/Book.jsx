import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({book}) => {
    // console.log(book)
    const { bookName, author, image, rating, tags, category, bookId } = book;
    return (
        <Link to={`/booksDetails/${bookId}`}>
            <div className=' p-5 border border-gray-300 rounded-3xl space-y-5'>
                <div className='flex items-center justify-center bg-base-300 p-5 rounded-2xl'>
                    <img src={image} alt="" className='h-60 w-auto' />
                </div>
                <div className=' flex gap-3'>
                    {
                        tags.map((tag, i) => <div key={i} className='badge badge-soft badge-success text-md font-semibold text-green-500 p-2'>{tag}</div>)
                    }
                </div>
                <h2 className='text-3xl font-bold '>{bookName}</h2>
                <p className='text-xl font-semibold'> By: {author}</p>
                <div className="divider"></div>
                <div className=' flex justify-between items-center'>
                    <p>{category}</p>
                    <div className='flex items-center gap-3'>
                        <p>{rating}</p>
                        <Star></Star>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;