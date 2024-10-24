import React, { useState, useEffect, useRef } from 'react';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Navbar = () => {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const mobileMenuRef = useRef(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
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
                className={`w-full h-14 flex flex-col items-center transition-all duration-500 fixed top-0 ${isScrolled ? 'bg-[#1d1d1d]' : 'bg-transparent'} z-10`}
            >
                <div className="lg:w-[75%] md:max-w-6xl w-[90%] ">
                    <div className='text-sm text-white font-semibold h-14 flex items-center justify-between'>
                        <div className='cursor-pointer w-32 transform transition-transform duration-200 hover:scale-110'>
                            <img
                                src='images/logo.png'
                                alt="Learnify Logo"
                            />
                        </div>
                        <div className='hidden lg:block'>
                            <ul className='flex lg:gap-6 text-[16px] text-[#939393]'>
                                <li className='cursor-pointer hover:text-white'>Features</li>
                                <li className='cursor-pointer hover:text-white'>Courses</li>
                                <li className='cursor-pointer hover:text-white'>Learn</li>
                                <li className='cursor-pointer hover:text-white'>Blog</li>
                                <li className='cursor-pointer hover:text-white'>Pricing</li>
                            </ul>
                        </div>
                        <div className='hidden lg:flex md:items-center lg:gap-4 md:gap-2'>
                            <div className='cursor-pointer'>
                                <MagnifyingGlassIcon className='h-6 text-[#939393] hover:text-white' />
                            </div>
                            <div>
                                <button
                                    className='text-black rounded-full bg-lime-500 text-[15px] font-bold px-5 py-[6px]'
                                >
                                    Join Now
                                </button>
                            </div>
                            <div className='cursor-pointer text-[16px] text-[#939393] hover:text-white'>Login</div>
                        </div>
                        <div className='lg:hidden' onClick={toggleMobileMenu}>
                            <Bars3Icon className='text-white w-10' />
                        </div>
                    </div>
                </div>
            </nav>

            <div
                ref={mobileMenuRef}
                className={`fixed top-0 right-0 w-[70%] h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden z-50`}
            >
                <div className='flex flex-col px-4 py-12 items-center justify-between h-full'>
                    <ul className='flex flex-col gap-10 items-center'>
                        <li className='cursor-pointer' onClick={toggleMobileMenu}>Features</li>
                        <li className='cursor-pointer' onClick={toggleMobileMenu}>Courses</li>
                        <li className='cursor-pointer' onClick={toggleMobileMenu}>Learn</li>
                        <li className='cursor-pointer' onClick={toggleMobileMenu}>Blog</li>
                        <li className='cursor-pointer' onClick={toggleMobileMenu}>Pricing</li>
                    </ul>
                    <div className='mt-6 w-full flex flex-col items-center gap-4'>
                        <button
                            className='text-black rounded-full bg-[#8dc21f] w-[80%] font-bold px-5 py-2'
                            onClick={toggleMobileMenu}
                        >
                            Join Now
                        </button>
                        <button
                            className='text-black rounded-full bg-[#8dc21f] w-[80%] font-bold px-5 py-2'
                            onClick={toggleMobileMenu}
                        >
                            Login
                        </button>
                        <p className='pt-2'>
                            Contact:
                            <a href="#" className='text-lime-500'> support@learnify.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
