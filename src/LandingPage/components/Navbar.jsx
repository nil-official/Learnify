import React, { useState, useEffect, useRef } from 'react';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const mobileMenuRef = useRef(null); // Ref to the mobile menu

    // Function to toggle the mobile menu
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Function to close the mobile menu when clicking outside of it
    const handleClickOutside = (event) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
            setMobileMenuOpen(false);
        }
    };

    // UseEffect to add event listener for detecting clicks outside the mobile menu
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Cleanup the event listener when component unmounts or menu closes
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <nav
                className={`w-full h-14 flex flex-col items-center transition-all duration-500 fixed top-0 ${isScrolled ? '' : 'bg-transparent'} z-10`}
                style={{ backgroundColor: isScrolled ? '#1d1d1d' : 'transparent' }}
            >
                
                <div className="md:w-[75%] md:max-w-6xl w-[90%] ">
                    <div className='text-sm text-white font-semibold h-14 flex items-center md:justify-around justify-between'>

                        {/* Left */}
                        <div className='cursor-pointer md:w-32 w-24 transform transition-transform duration-200 hover:scale-110'>
                            <img
                                src='images/logo.png'
                                alt="Learnify Logo"
                            />
                        </div>

                        {/* Middle */}
                        <div className='hidden md:block'>
                            <ul className='flex lg:gap-6 max-lg:gap-4'>
                                <li className='cursor-pointer'>Features</li>
                                <li className='cursor-pointer'>Courses</li>
                                <li className='cursor-pointer'>Learn</li>
                                <li className='cursor-pointer'>Blog</li>
                                <li className='cursor-pointer'>Pricing</li>
                            </ul>
                        </div>

                        {/* Right */}
                        <div className='hidden md:flex md:items-center lg:gap-4 md:gap-2'>
                            <div className='cursor-pointer'>
                                <MagnifyingGlassIcon className='h-6' />
                            </div>
                            <div>
                                <button
                                    style={{ ontSize: '12px', fontWeight: '650', padding: '6px 18px' }}
                                    className='text-black rounded-full bg-lime-500'
                                >
                                    Join Now
                                </button>
                            </div>
                            <div className='cursor-pointer'>Login</div>
                        </div>

                        {/* Mobile Menu Icon */}
                        <div className='md:hidden' onClick={toggleMobileMenu}>
                            <Bars3Icon className='text-white w-8' />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                ref={mobileMenuRef} // Attach ref to the mobile menu container
                className={`fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-50`}
            >
                <div className='flex flex-col p-4 items-center'>
                    <ul className='flex flex-col gap-4 items-center'>
                        <li className='cursor-pointer' onClick={toggleMobileMenu}>Features</li>
                        <li className='cursor-pointer' onClick={toggleMobileMenu}>Courses</li>
                        <li className='cursor-pointer' onClick={toggleMobileMenu}>Learn</li>
                        <li className='cursor-pointer' onClick={toggleMobileMenu}>Blog</li>
                        <li className='cursor-pointer' onClick={toggleMobileMenu}>Pricing</li>
                    </ul>
                    <hr className='border w-full mt-8' />
                    <div className='mt-6 w-full flex flex-col items-center gap-4'>
                        <button
                            style={{ backgroundColor: '#8dc21f', fontSize: '12px', fontWeight: '650', padding: '6px 18px' }}
                            className='text-black rounded-full w-[80%]'
                            onClick={toggleMobileMenu}
                        >
                            Join Now
                        </button>
                        <button
                            style={{ backgroundColor: '#8dc21f', fontSize: '12px', fontWeight: '650', padding: '6px 18px' }}
                            className='text-black rounded-full w-[80%]'
                            onClick={toggleMobileMenu}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
