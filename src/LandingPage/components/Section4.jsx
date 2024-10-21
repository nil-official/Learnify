import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import data from '../data/review.json';

const Section4 = () => {
    const [visibleCount, setVisibleCount] = useState(6);
    const initialVisibleCount = 6;  // Default number of cards shown

    const loadMore = () => {
        setVisibleCount((prevCount) => prevCount + 6);
    };

    const showLess = () => {
        setVisibleCount(initialVisibleCount);
    };

    return (
        <div className='w-full bg-gray-800 px-12 md:px-48 lg:px-48 2xl:px-80 flex flex-col items-center'>
            <div>
                <p className='text-3xl font-bold text-white p-12'>
                    What They're Saying About Us
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {data.slice(0, visibleCount).map((review, index) => {
                    return (
                        <div
                            key={index}
                            style={{ background: 'linear-gradient(90deg, #1f1f1f .04%, #101010)' }}
                            className="p-6 rounded-lg shadow-lg"
                        >
                            <div className="text-orange-500 text-2xl mb-4">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </div>
                            <p className="text-white text-sm">{review.review}</p>
                            <div className="flex items-center mt-6">
                                <img
                                    className="w-12 h-12 rounded-full object-cover"
                                    src={review.avatar}
                                    alt="profile"
                                />
                                <div className="ml-4">
                                    <h3 className="text-white font-semibold">{review.fullname}</h3>
                                    <p className="text-gray-400">{review.username}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className='p-12 flex items-center gap-4'>
                {visibleCount < data.length && (
                    <button
                        onClick={loadMore}
                        className="bg-transparent border-2 border-lime-500 text-lime-500 font-semibold py-2 px-6 rounded-full"
                    >
                        Show More
                    </button>
                )}

                {/* Show Less button appears when more than the initial number of cards are visible */}
                {visibleCount > initialVisibleCount && (
                    <button
                        onClick={showLess}
                        className="bg-transparent border-2 border-lime-500 text-lime-500 font-semibold py-2 px-6 rounded-full"
                    >
                        Show Less
                    </button>
                )}
            </div>
        </div>
    );
};

export default Section4;
