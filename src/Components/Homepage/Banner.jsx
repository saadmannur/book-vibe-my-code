import React from 'react';
import bookImg from "../../assets/hero_img.jpg"

const Banner = () => {
    return (
        <div className=''>
            <div className=" bg-base-300  m-5 md:m-5 p-20 rounded-3xl">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img
                        src={bookImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className='space-y-8'>
                        <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                        <button className="btn btn-success font-semibold text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;