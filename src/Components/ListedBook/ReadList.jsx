import { Link } from 'lucide-react';
import React from 'react';
import { FaUserTie } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlineRequestPage } from 'react-icons/md';

const ReadList = ({ book }) => {
    const { bookName, author, image, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;
    return (
        <div className='flex gap-10 items-center border border-gray-300 rounded-3xl p-5 m-5'>
            <div className=' p-20 bg-base-300 rounded-2xl'>
                <img src={image} alt={bookName} className='h-52 w-auto' />
            </div>
            <div className='space-y-5 '>
                <h2 className='text-3xl font-bold'>{bookName}</h2>
                <p className='text-lg font-semibold'>By: {author}</p>
                <div className='flex gap-5'>
                    <p className='font-bold'>Tag</p>
                    {
                        tags.map((tag, i) => <div key={i} className='badge badge-soft badge-success text-md font-semibold text-green-500 p-2'>#{tag}</div>)
                    }
                    <p className='flex items-center gap-1 text-gray-500'><span><IoLocationOutline></IoLocationOutline></span> Year of Publishing: {yearOfPublishing}</p>
                </div>
                <div className=' flex items-center gap-3 text-gray-400'>
                    <p className='flex items-center gap-1'><span><FaUserTie></FaUserTie></span>Publisher: {publisher}</p>
                    <p className='flex items-center gap-1'><span><MdOutlineRequestPage></MdOutlineRequestPage></span>Pages: {totalPages}</p>
                </div>
                <div className="divider"></div>
                <div className='flex items-center gap-5'>
                    <p className='bg-blue-100 text-blue-500 p-2 rounded-4xl'>Category:  {category}</p>
                    <p className='bg-amber-100 text-amber-500 p-2 rounded-4xl'>Rating: {rating}</p>
                    
                    <button className='bg-green-500 text-white p-2 rounded-4xl cursor-pointer'>View Details</button>                   
                </div>
            </div>
        </div>
    );
};

export default ReadList;