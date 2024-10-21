import React, { useState, useEffect, useRef } from 'react';

const Section2 = () => {
    // Define state for each counter
    const [coursesCount, setCoursesCount] = useState(0);
    const [pathsCount, setPathsCount] = useState(0);
    const [projectsCount, setProjectsCount] = useState(0);
    const [instructorsCount, setInstructorsCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false); // Ensure animation runs only once

    // Reference for the counters section
    const countersRef = useRef(null);

    // Counter animation function
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

    // Intersection Observer callback function
    const handleIntersection = (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
            // Start the counters when section comes into view
            setHasAnimated(true);
            incrementCounter(setCoursesCount, 200, 10); // target 200+ courses
            incrementCounter(setPathsCount, 25, 75);    // target 24+ paths
            incrementCounter(setProjectsCount, 185, 10); // target 50+ projects
            incrementCounter(setInstructorsCount, 15, 100); // target 15+ instructors
        }
    };

    useEffect(() => {
        // Create the observer when the component mounts
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            threshold: 0.5, // Trigger when 50% of the section is in view
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
        <div className='w-full h-[550px] flex flex-col justify-center items-center text-white' style={{ backgroundColor: '#333333' }}>
            <div className='flex items-center justify-center gap-16 mb-12'>
                {/* Left */}
                <div className='w-[430px] flex flex-col gap-6'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-3xl font-bold'>
                            Learn From the Best Teachers
                        </p>
                        <p className='text-sm'>
                            At Learnify, we pride ourselves on offering courses designed and taught by leading experts actively employing their skills at renowned companies such as Netflix, Spotify, Google, and Stripe. Our curriculum is continually refreshed to align with the most recent advancements, guaranteeing that our learners are equipped with industry-standard best practices and cutting-edge techniques.
                        </p>
                    </div>
                    <div className='flex gap-4'>
                        <button
                            style={{ fontWeight: '650', padding: '6px 18px' }}
                            className='text-black text-sm rounded-full bg-lime-500'
                        >
                            Browse Our Courses
                        </button>
                        <button
                            style={{ fontWeight: '650', padding: '6px 18px' }}
                            className='text-black text-sm rounded-full bg-lime-500'
                        >
                            View Learning Paths
                        </button>
                    </div>
                </div>

                {/* Right */}
                <div className='relative w-[450px]'>
                    <img
                        src="images/study.jpg"
                        alt="img"
                        className='rounded-xl shadow-lg'
                    />
                    <div className='absolute inset-0 bg-black opacity-20 rounded-xl'></div>
                </div>
            </div>

            {/* Counters Section */}
            <div ref={countersRef} className='w-[60%] text-center pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
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
