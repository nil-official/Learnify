import React, { useState, useEffect, useRef } from 'react';

const Section2 = () => {
    
    const [coursesCount, setCoursesCount] = useState(0);
    const [pathsCount, setPathsCount] = useState(0);
    const [projectsCount, setProjectsCount] = useState(0);
    const [instructorsCount, setInstructorsCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const countersRef = useRef(null);

    const incrementCounter = (setState, target, speed) => {
        let count = 0;
        const interval = setInterval(() => {
            count += 1;
            setState(count);
            if (count >= target) {
                clearInterval(interval);
            }
        }, speed);
    };

    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            incrementCounter(setCoursesCount, 200, 10);
            incrementCounter(setPathsCount, 25, 75);
            incrementCounter(setProjectsCount, 185, 10);
            incrementCounter(setInstructorsCount, 15, 100);
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5,
        });
        if (countersRef.current) {
            observer.observe(countersRef.current);
        }
        return () => {
            if (countersRef.current) {
                observer.unobserve(countersRef.current);
            }
        };
    }, [hasAnimated]);

    return (
        <div className='w-full p-8 lg:py-12 flex flex-col gap-4 justify-center items-center text-white bg-[#333333]'>
            <div className='lg:w-[80%] 2xl:w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 py-4'>
                <div className='w-full lg:w-[70%] xl:w-[50%] 2xl:w-[25%] flex flex-col gap-6'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-2xl lg:text-3xl font-bold text-center lg:text-left'>
                            Learn From the Best Teachers
                        </p>
                        <p className='text-sm text-center lg:text-left'>
                            At Learnify, we pride ourselves on offering courses designed and taught by leading experts actively employing their skills at renowned companies such as Netflix, Spotify, Google, and Stripe. Our curriculum is continually refreshed to align with the most recent advancements, guaranteeing that our learners are equipped with industry-standard best practices and cutting-edge techniques.
                        </p>
                    </div>
                    <div className='w-full p-4 lg:p-0 flex flex-col lg:flex-row gap-4 justify-center lg:justify-normal'>
                        <button
                            className='w-full text-black font-bold text-sm rounded-full px-5 py-2 bg-lime-500'
                        >
                            Browse Our Courses
                        </button>
                        <button
                            className='w-full text-black font-bold text-sm rounded-full px-5 py-2 bg-lime-500'
                        >
                            View Learning Paths
                        </button>
                    </div>
                </div>
                <div className='relative w-[85%] sm:w-[70%] xl:w-[50%] 2xl:w-[25%]'>
                    <img
                        src="images/study.jpg"
                        alt="img"
                        className='rounded-xl shadow-lg'
                    />
                    <div className='absolute inset-0 bg-black opacity-20 rounded-xl'></div>
                </div>
            </div>
            <div ref={countersRef} className='w-[60%] text-center py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className='flex flex-col items-center'>
                    <p className='text-4xl font-bold'>{coursesCount}+</p>
                    <p className='text-sm'>In-Depth Courses</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-4xl font-bold'>{pathsCount}</p>
                    <p className='text-sm'>Learning Paths</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-4xl font-bold'>{projectsCount}</p>
                    <p className='text-sm'>Real-world Projects</p>
                </div>
                <div className='flex flex-col items-center'>
                    <p className='text-4xl font-bold'>{instructorsCount}</p>
                    <p className='text-sm'>Expert Instructors</p>
                </div>
            </div>
        </div>
    );
};

export default Section2;
