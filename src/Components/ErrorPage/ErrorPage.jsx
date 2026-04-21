import React from "react";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="text-center max-w-md bg-white p-10 rounded-2xl shadow-md">

                {/* 404 */}
                <h1 className="text-7xl font-bold text-gray-800">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-700 mt-4">
                    Page Not Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 mt-2">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    <a
                        href="/"
                        className="px-5 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
                    >
                        Home
                    </a>

                    <button
                        onClick={() => window.history.back()}
                        className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                    >
                        Back
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;